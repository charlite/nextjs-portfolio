# Portfolio

Personal portfolio site for [Charlie Rios](https://github.com/charlite) — Software Engineer based in Amsterdam.

Live at **[charlie.icu](https://charlie.icu)**.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router, React 19)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Resend](https://resend.com/) + [React Email](https://react.email/) for the contact form
- [@opennextjs/cloudflare](https://opennext.js.org/cloudflare) for Cloudflare Workers deployment

## Getting started

### Prerequisites

- Node.js 20+
- npm, pnpm, or [Bun](https://bun.sh/) (the repo pins Bun via `packageManager`)

### Install

```bash
npm install
# or
bun install
```

### Environment

Copy `.env.template` to `.env.local` and set your Resend API key:

```bash
cp .env.template .env.local
```

```env
RESEND_API_KEY=re_xxxxxxxx
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm run start
```

## Deploy to Cloudflare Workers

This project uses OpenNext for Cloudflare Workers.

```bash
# Local preview on Workers runtime
npm run preview

# Build worker bundle
npm run build:cloudflare

# Deploy (requires wrangler login)
npm run deploy
```

Configure the worker in `wrangler.jsonc`. Static assets are served from `.open-next/assets`.

## Scripts

| Script | Description |
| --- | --- |
| `dev` | Start Next.js dev server |
| `build` | Production Next.js build |
| `lint` | Run ESLint (`eslint .`) |
| `preview` | Build and preview on Cloudflare Workers locally |
| `deploy` | Build and deploy to Cloudflare |
| `build:cloudflare` | OpenNext Cloudflare build only |
| `clean` | Remove `.next` and `.open-next` |

## Project structure

```
app/           # Next.js App Router pages and layout
components/    # UI sections (intro, projects, experience, contact, …)
context/       # React context (theme, active section)
lib/           # Site data, types, utilities
actions/       # Server actions (contact form email)
email/         # React Email templates
public/        # Static assets (images, CV)
```

## Author

**Charlie Rios** ([@charlite](https://github.com/charlite))

## License

[MIT](LICENSE.md)
