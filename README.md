# WeForge Clinical

Marketing website for WeForge Clinical — a clinical-recruitment infrastructure partner for research sites.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site locally.

## Environment

Copy `.env.example` to `.env.local` and configure contact delivery:

- `RESEND_API_KEY` — optional, for email delivery via Resend
- `CONTACT_TO_EMAIL` — inbox for contact form submissions
- `CONTACT_WEBHOOK_URL` — optional webhook fallback

## Scripts

- `npm run dev` — start development server
- `npm run build` — production build
- `npm run start` — run production server
- `npm run lint` — run ESLint

## Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- Motion
