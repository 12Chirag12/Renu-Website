import { NextRequest, NextResponse } from "next/server";

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

  if (!fullName || !companyName || !emailPattern.test(email) || !phonePattern.test(phone) || !location || !enquiryType || !interest || message.length < 20 || !consent) {
    return NextResponse.json({ message: "Please review the required fields and try again." }, { status: 400 });
  }

  const webhook = process.env.ENQUIRY_WEBHOOK_URL;
  if (!webhook) {
    return NextResponse.json({ message: "Online enquiry delivery is awaiting company configuration. No information was stored." }, { status: 503 });
  }

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

