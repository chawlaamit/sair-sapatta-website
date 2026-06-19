# Sair Sapatta — Website

This is your real, multi-page Sair Sapatta site (Home, About, Brands, Why Buy,
Contact, Enquire) built with Astro. It deploys as plain fast HTML — no
database, no PHP, nothing to hack.

## What you can edit without touching code

Once the CMS login is set up (see Phase 6 in the chat), go to
`yourdomain.com/admin/` and you can edit:
- Every brand (name, category, status, description)
- Site-wide settings: hero text, stats, "why buy" cards, values, phone/email/address, RERA number

Editing there automatically updates the live site — no developer needed.

## Two things you must update before going live

1. **Domain**: open `src/content/settings/site.yaml` and `astro.config.mjs`,
   replace `https://yourdomain.com` with your real domain.
2. **Enquiry form**: open `src/pages/enquire.astro`, find
   `YOUR_ACCESS_KEY_HERE`, and replace it with a free key from web3forms.com
   (enter your email there, no signup, key arrives instantly). This is what
   makes form submissions land in your inbox.

## Local preview (optional — only if you install Node.js)

```
npm install
npm run dev
```

## Deploy

This project is meant to be pushed to GitHub and connected to Cloudflare
Pages. Build command: `npm run build`. Output directory: `dist`.
