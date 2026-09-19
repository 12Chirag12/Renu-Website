# Renumed Pharmaceutical Labs website

A responsive corporate website built with Next.js, React, TypeScript, and Tailwind CSS. Unverified company information and capabilities are explicitly labelled for confirmation. Product data is intentionally empty until approved information is supplied.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Content updates

- Company details: `data/company.ts`
- Approved products: `data/products.json`
- Navigation and page copy: `components/CorporateSite.tsx`
- Generated photography: `public/images/`

Each product may use this shape:

```json
{
  "name": "Verified product name",
  "dosageForm": "Verified dosage form",
  "strength": "Verified strength",
  "packSize": "Verified pack size",
  "category": "Verified therapeutic category"
}
```

## Enquiry delivery

The API route validates required fields server-side, includes a honeypot, rate-limits repeated requests, and never exposes delivery credentials to the browser. Configure an approved HTTPS endpoint in `.env.local`:

```bash
ENQUIRY_WEBHOOK_URL=https://your-approved-secure-endpoint.example/enquiries
```

Without this variable, the form safely reports that delivery is not configured and does not imply that data was stored.

## Production

```bash
npm run build
npm start
```

Before launch, replace `https://www.example.com` in `app/layout.tsx`, confirm all placeholders, add approved product data, connect the enquiry endpoint, and run a final privacy/security review.

## Image-generation record

The three project photographs were created with the built-in image generation tool for this website. Final prompt themes: a cleanroom manufacturing-line inspection, a pharmaceutical QC analyst using analytical equipment, and an unbranded secondary packaging line. All prompts requested realistic PPE, restrained navy/teal styling, no brands, no readable labels, no logos, and no medical claims.
