import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+()\d\s-]{7,20}$/;
const recent = new Map<string, number[]>();

function clean(value: unknown, max = 500) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  const now = Date.now();
  const attempts = (recent.get(ip) || []).filter((time) => now - time < 60_000);
  if (attempts.length >= 5) {
    return NextResponse.json({ message: "Please wait a moment before trying again." }, { status: 429 });
  }
  recent.set(ip, [...attempts, now]);

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never see or complete this field.
  if (clean(body.website)) return NextResponse.json({ ok: true });

  const fullName = clean(body.fullName, 100);
  const companyName = clean(body.companyName, 120);
  const email = clean(body.email, 160);
  const phone = clean(body.phone, 30);
  const location = clean(body.location, 120);
  const enquiryType = clean(body.enquiryType, 80);
  const interest = clean(body.interest, 160);
  const message = clean(body.message, 1500);
  const consent = body.consent === true;

  if (
    !fullName ||
    !companyName ||
    !emailPattern.test(email) ||
    !phonePattern.test(phone) ||
    !location ||
    !enquiryType ||
    !interest ||
    message.length < 20 ||
    !consent
  ) {
    return NextResponse.json({ message: "Please review the required fields and try again." }, { status: 400 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const webhook = process.env.ENQUIRY_WEBHOOK_URL;

  // 1. If Resend is configured, send email via Resend
  if (resendApiKey) {
    try {
      const resend = new Resend(resendApiKey);
      const recipientEmail =
        process.env.CONTACT_TO_EMAIL ||
        process.env.RESEND_TO_EMAIL ||
        "info@renumedpharma.com";

      const fromEmail =
        process.env.RESEND_FROM_EMAIL || "Renumed Website <onboarding@resend.dev>";

      const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f2f7f9; margin: 0; padding: 24px; color: #082d4f; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 10px 30px rgba(8, 45, 79, 0.08); }
          .header { background: linear-gradient(135deg, #082d4f 0%, #086b78 100%); padding: 32px 28px; color: #ffffff; }
          .header h1 { margin: 0; font-size: 22px; font-weight: 700; letter-spacing: -0.5px; }
          .header p { margin: 6px 0 0; font-size: 13px; opacity: 0.85; }
          .badge { display: inline-block; background: rgba(25, 182, 207, 0.2); border: 1px solid #19b6cf; color: #7fe4ed; padding: 4px 10px; border-radius: 999px; font-size: 11px; font-weight: 700; text-transform: uppercase; margin-bottom: 12px; }
          .content { padding: 28px; }
          .table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
          .table td { padding: 12px 14px; border-bottom: 1px solid #f1f5f9; font-size: 14px; }
          .table td.label { width: 35%; font-weight: 600; color: #64748b; background-color: #f8fafc; }
          .table td.value { width: 65%; font-weight: 500; color: #082d4f; }
          .message-box { background: #f8fafc; border-left: 4px solid #19b6cf; padding: 16px 18px; border-radius: 8px; margin-top: 8px; }
          .message-box p { margin: 0; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap; }
          .footer { background: #f8fafc; padding: 20px 28px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
          .footer a { color: #086b78; text-decoration: none; font-weight: 600; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <span class="badge">New Contract Requirement</span>
            <h1>Renumed Pharmaceutical Labs</h1>
            <p>A new contract manufacturing requirement was submitted through the website.</p>
          </div>
          <div class="content">
            <table class="table">
              <tr>
                <td class="label">Full Name</td>
                <td class="value"><strong>${fullName}</strong></td>
              </tr>
              <tr>
                <td class="label">Company Name</td>
                <td class="value">${companyName}</td>
              </tr>
              <tr>
                <td class="label">Business Email</td>
                <td class="value"><a href="mailto:${email}" style="color: #086b78; font-weight: 600;">${email}</a></td>
              </tr>
              <tr>
                <td class="label">Phone Number</td>
                <td class="value"><a href="tel:${phone}" style="color: #086b78;">${phone}</a></td>
              </tr>
              <tr>
                <td class="label">Location / Country</td>
                <td class="value">${location}</td>
              </tr>
              <tr>
                <td class="label">Enquiry Type</td>
                <td class="value"><strong>${enquiryType}</strong></td>
              </tr>
              <tr>
                <td class="label">Dosage Interest</td>
                <td class="value">${interest}</td>
              </tr>
            </table>

            <div style="margin-top: 20px;">
              <strong style="font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; color: #64748b;">Requirement Details:</strong>
              <div class="message-box">
                <p>${message}</p>
              </div>
            </div>
          </div>
          <div class="footer">
            <p>Submitted on ${new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })} IST</p>
            <p>Direct reply is configured: reply directly to this email to contact <strong>${fullName}</strong> at <a href="mailto:${email}">${email}</a>.</p>
          </div>
        </div>
      </body>
      </html>
      `;

      const { data, error } = await resend.emails.send({
        from: fromEmail,
        to: recipientEmail,
        replyTo: email,
        subject: `New Requirement: ${fullName} (${companyName})`,
        text: `New Website Enquiry from ${fullName}\nCompany: ${companyName}\nEmail: ${email}\nPhone: ${phone}\nLocation: ${location}\nType: ${enquiryType}\nInterest: ${interest}\n\nRequirement:\n${message}`,
        html: htmlContent,
      });

      if (error) {
        console.error("Resend delivery error:", error);
        return NextResponse.json({ message: error.message || "Failed to send email." }, { status: 500 });
      }

      return NextResponse.json({
        ok: true,
        message: "Thank you. Your enquiry has been received. Our team will contact you promptly.",
        id: data?.id,
      });
    } catch (err) {
      console.error("Resend exception:", err);
      return NextResponse.json(
        { message: "We could not deliver your enquiry right now. Please try again later." },
        { status: 502 }
      );
    }
  }

  // 2. Fallback: Webhook URL (if webhook is provided instead of Resend)
  if (webhook) {
    try {
      const delivery = await fetch(webhook, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ fullName, companyName, email, phone, location, enquiryType, interest, message, submittedAt: new Date().toISOString() }),
        signal: AbortSignal.timeout(8000),
      });
      if (!delivery.ok) throw new Error("Delivery failed");
      return NextResponse.json({ ok: true, message: "Thank you. Your enquiry has been received." });
    } catch {
      return NextResponse.json({ message: "We could not send your enquiry right now. Please try again later." }, { status: 502 });
    }
  }

  return NextResponse.json(
    {
      message:
        "Online enquiry delivery is awaiting configuration. Please set RESEND_API_KEY and CONTACT_TO_EMAIL in your environment variables.",
    },
    { status: 503 }
  );
}
