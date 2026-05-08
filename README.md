# Mark Anthony Rivas — Personal Portfolio

Personal portfolio website for **Mark Anthony Rivas**, Senior Full-Stack Developer specialising in React, Next.js, Node.js, and Web3.

🌐 **Live:** [markanthonyrivas.site](https://markanthonyrivas.site)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router, Static Export) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Fonts | Space Grotesk (headings) · Inter (body) · JetBrains Mono |
| Hosting | Cloudflare Pages |
| CI/CD | GitHub Actions |

---

## Sections

- **Hero** — Name, title, open-to-work badge, CTA buttons
- **About** — Professional summary with animated code card
- **Skills** — Tech stack grouped by category (Frontend, Backend, Web3, Databases, E-commerce, DevOps)
- **Portfolio** — Filterable grid of 21+ projects (WordPress, Shopify, React/Next.js, Web3)
- **Experience** — Vertical timeline of 7 roles (2009–Present)
- **Achievements** — Animated stat counters (50+ projects, 10+ years, etc.)
- **Contact** — Email + WhatsApp with availability status

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Build & Export

```bash
npm run build
```

Produces a static `out/` directory ready for Cloudflare Pages.

---

## Deployment (Cloudflare Pages)

Deployments are handled automatically via GitHub Actions on every push to `main`.

### One-time setup

1. Create a **Cloudflare Pages** project named `markanthonyrivas` in the Cloudflare dashboard.
2. Set the **custom domain** to `markanthonyrivas.site` in Cloudflare Pages → Custom Domains.
3. Add these secrets to your GitHub repository (**Settings → Secrets → Actions**):

| Secret | Where to find it |
|---|---|
| `CLOUDFLARE_API_TOKEN` | Cloudflare Dashboard → My Profile → API Tokens → Create Token (use *Edit Cloudflare Workers* template or *Cloudflare Pages* permissions) |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare Dashboard → right sidebar on any domain page |

4. Push to `main` — the workflow builds and deploys automatically.

---

## Updating Your CV

Place your CV PDF at `public/cv.pdf`. The "Download CV" buttons link directly to it.

---

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout, fonts, metadata
│   ├── page.tsx         # Assembles all sections
│   └── globals.css      # Tailwind base + custom utilities
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Portfolio.tsx    # Filterable project grid
│   ├── Experience.tsx   # Vertical timeline
│   ├── Achievements.tsx # Animated stat counters
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/
│   └── projects.ts      # All portfolio project data
├── public/
│   ├── cv.pdf           # ← add your CV here
│   └── _headers         # Cloudflare Pages cache headers
└── .github/
    └── workflows/
        └── deploy.yml   # CI/CD → Cloudflare Pages
```

---

## License

All rights reserved © Mark Anthony Rivas
