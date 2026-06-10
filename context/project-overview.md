# HBP (Hair by Paula) — Code Standards & Claude Guidelines

> This document defines the coding standards, patterns, and conventions for the HBP project. Paste this (or reference it) at the start of any Claude/Cursor session to keep AI output consistent across the codebase.

---

## 🗂️ Project Overview (Context for Claude)

- **Project:** Hair by Paula — local salon website with a CMS admin panel
- **Goal:** Allow the salon owner to manage her own gallery images without needing a developer
- **Stack:** Next.js (React 19), TypeScript, Neon PostgreSQL + Prisma, Cloudflare R2, Tailwind CSS v4, ShadCN, NextAuth v5
- **Deployment:** Vercel
- **Domain:** Registered at Hostinger, DNS pointed to Vercel (not transferred — keep it at Hostinger)
- **Current state:** Vanilla JS site being migrated to Next.js in 3 phases (see Migration Plan below)

---

## 🚀 Migration Plan: Vanilla JS → Next.js

The migration happens in 3 phases. **Never touch the live vanilla JS site until Phase 1 is complete and deployed.**

### Phase 1 — Replicate (static, no backend)
Rebuild the existing site as Next.js pages. Goal: looks identical to the current site.

- Convert HTML pages → `app/(public)/page.tsx` JSX
- Replace `<img>` with Next.js `<Image />` (free performance win)
- Migrate CSS → Tailwind utility classes progressively (don't do it all at once)
- Existing vanilla JS (sliders, animations) → wrap in `'use client'` components temporarily
- No database, no auth, no R2 yet
- ✅ Done when: new Next.js site looks identical to current site, deployed to Vercel on a preview URL

### Phase 2 — CMS features
Layer in backend functionality on top of the replicated site.

- Neon DB + Prisma schema
- Cloudflare R2 for image storage
- NextAuth email + password for admin login
- Upload UI for before/after gallery and freshest hair gallery
- Admin dashboard with visit analytics
- ✅ Done when: salon owner can log in and manage images herself

### Phase 3 — Domain cutover
Point the live domain to Vercel only after Phase 2 is stable.

- In Hostinger DNS: update A record for `@` → `76.76.21.21`
- Add CNAME for `www` → `cname.vercel-dns.com`
- In Vercel: Settings → Domains → add the domain
- SSL is provisioned automatically by Vercel
- DNS propagation: up to 48 hours but usually faster
- ✅ Done when: hairbypaula.com (or whatever the domain is) resolves to the new Next.js site

---

## 🌐 Hosting & Deployment

- **Platform:** Vercel (free hobby tier is sufficient for this project)
- **Domain registrar:** Hostinger — keep it there, just update DNS records
- **Do not** use Hostinger shared hosting (no SSR support) or transfer the domain away

### Environment variables on Vercel
All secrets live in Vercel's Environment Variables dashboard (Settings → Environment Variables), not in any committed file.

```
DATABASE_URL          # Neon PostgreSQL connection string
R2_ACCOUNT_ID
R2_ACCESS_KEY_ID
R2_SECRET_ACCESS_KEY
R2_BUCKET_NAME
R2_PUBLIC_URL         # CDN base URL for public image access
NEXTAUTH_SECRET
NEXTAUTH_URL          # https://yourdomain.com in production
```

Always keep `.env.example` updated with every key (no values, just keys + comments).

---

## 📁 Project Structure

```
hbp/
├── app/                        # Next.js App Router
│   ├── (public)/               # Public-facing salon site
│   │   ├── page.tsx            # Homepage
│   │   └── layout.tsx
│   ├── (admin)/                # Admin CMS area (auth-protected)
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   ├── gallery/
│   │   │   └── page.tsx
│   │   └── layout.tsx          # Wraps admin with auth check
│   └── api/                    # API route handlers
│       ├── auth/               # NextAuth routes
│       └── upload/             # R2 upload handlers
├── components/
│   ├── ui/                     # ShadCN auto-generated components (DO NOT edit manually)
│   ├── salon/                  # Public site components (Gallery, Swiper, Hero etc.)
│   └── admin/                  # Admin-only components (UploadForm, DashStats etc.)
├── lib/
│   ├── db.ts                   # Prisma client singleton
│   ├── r2.ts                   # Cloudflare R2 client
│   ├── auth.ts                 # NextAuth config
│   └── utils.ts                # Shared utilities (cn(), formatDate() etc.)
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── types/
│   └── index.ts                # Shared TypeScript types & interfaces
└── public/
    └── assets/                 # Static assets (logo, fonts etc.)
```

---

## ⚙️ TypeScript Rules

- **Always use TypeScript** — no `.js` or `.jsx` files in `app/` or `components/`
- Define shared types in `types/index.ts` and import from there
- Never use `any` — use `unknown` and narrow it, or define a proper type
- Always type function parameters and return values explicitly

```ts
// ✅ Good
async function getGalleryImages(): Promise<GalleryImage[]> { ... }

// ❌ Bad
async function getGalleryImages() { ... }
```

- Use `interface` for object shapes, `type` for unions/aliases

```ts
// types/index.ts
export interface GalleryImage {
  id: string
  url: string
  category: 'before-after' | 'freshest-hair'
  uploadedAt: Date
}
```

---

## 🧱 Component Standards

### File naming
| Type | Convention | Example |
|---|---|---|
| Page | `page.tsx` | `app/(admin)/dashboard/page.tsx` |
| Component | PascalCase | `BeforeAfterSwiper.tsx` |
| Utility/lib | camelCase | `formatImageUrl.ts` |
| Types | `index.ts` in `types/` | `types/index.ts` |

### Component structure (order matters)

```tsx
// 1. Imports — external → internal → types → styles
import { useState } from 'react'
import Image from 'next/image'
import { UploadButton } from '@/components/admin/UploadButton'
import type { GalleryImage } from '@/types'

// 2. Types local to this file (if not shared)
interface Props {
  images: GalleryImage[]
  onUpload: (file: File) => void
}

// 3. Component (named export, not default where possible)
export function BeforeAfterGallery({ images, onUpload }: Props) {
  // 4. State & hooks first
  const [loading, setLoading] = useState(false)

  // 5. Handlers
  async function handleUpload(file: File) { ... }

  // 6. Return JSX
  return (...)
}
```

- Prefer **named exports** over default exports (easier to refactor/search)
- Keep components **under ~150 lines** — split if bigger
- **Server Components by default** in Next.js App Router; add `'use client'` only when you need interactivity or browser APIs
- During Phase 1 migration, vanilla JS logic (sliders etc.) can live in `'use client'` components — refactor in Phase 2

---

## 🎨 Styling (Tailwind CSS v4 + ShadCN)

- Use **Tailwind utility classes** directly in JSX — no custom CSS files unless absolutely necessary
- Use the `cn()` helper from `lib/utils.ts` for conditional classes

```tsx
import { cn } from '@/lib/utils'

<div className={cn('rounded-xl p-4', isActive && 'bg-primary text-white')} />
```

- **Never override ShadCN component internals directly** — extend via `className` prop or `cva` variants
- Respect the existing salon color palette (document the tokens in `tailwind.config.ts`)
- Keep spacing/border-radius consistent — prefer design tokens over one-off values

```ts
// tailwind.config.ts — document your brand tokens here
theme: {
  extend: {
    colors: {
      brand: {
        primary: '#YOUR_HEX',    // main salon brand colour
        accent:  '#YOUR_HEX',    // CTA / highlights
        muted:   '#YOUR_HEX',    // backgrounds
      }
    },
    borderRadius: {
      salon: '1.25rem',           // consistent rounded look across cards
    }
  }
}
```

---

## 🗄️ Database (Prisma + Neon PostgreSQL)

> Phase 2 only — do not set up DB during Phase 1

- Import Prisma client **only** from `lib/db.ts` (singleton pattern prevents connection leaks in dev)

```ts
// lib/db.ts
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }
export const db = globalForPrisma.prisma ?? new PrismaClient()
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db
```

- All DB calls go in **Server Components or API route handlers** — never call `db` from the client
- Schema changes → always run `prisma migrate dev --name describe-your-change`
- Keep migrations committed to git

---

## 🪣 File Uploads (Cloudflare R2)

> Phase 2 only — do not set up R2 during Phase 1

- Never store images in `/public` or the repo — all uploads go to R2
- Image flow: `Client → API Route → R2 → return public URL → save URL to DB`
- Always validate file type and size **on the server** (not just the client)

```ts
// app/api/upload/route.ts pattern
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp']
const MAX_SIZE_MB = 5

if (!ALLOWED_TYPES.includes(file.type)) {
  return Response.json({ error: 'Invalid file type' }, { status: 400 })
}
```

- Image optimisation: compress/resize **before** uploading to R2 (use `sharp` on the server)
- Return a CDN URL, never a signed URL, for gallery images that are public

---

## 🔐 Authentication (NextAuth v5)

> Phase 2 only — do not set up auth during Phase 1

- Auth config lives in `lib/auth.ts`
- Protect admin routes via the `(admin)` layout — check session there, not on every individual page
- Never expose session tokens or secrets in client components

```ts
// app/(admin)/layout.tsx
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function AdminLayout({ children }) {
  const session = await auth()
  if (!session) redirect('/login')
  return <>{children}</>
}
```

- Only email + password auth for the salon owner (keep it simple — she's the only admin)

---

## 🌐 API Routes

- Use **Next.js Route Handlers** (`app/api/.../route.ts`) — not Pages Router API
- Always return typed responses using `Response.json()`
- Handle errors consistently:

```ts
// Standard error response pattern
try {
  // ... logic
  return Response.json({ success: true, data })
} catch (error) {
  console.error('[upload/route]', error)
  return Response.json({ error: 'Something went wrong' }, { status: 500 })
}
```

- Log errors with a `[route-name]` prefix so they're easy to find in Sentry later

---

## 📝 Naming Conventions (Quick Reference)

| Thing | Convention | Example |
|---|---|---|
| Variables | camelCase | `galleryImages` |
| Functions | camelCase | `handleImageUpload` |
| Components | PascalCase | `UploadForm` |
| Types/Interfaces | PascalCase | `GalleryImage` |
| Constants | SCREAMING_SNAKE | `MAX_FILE_SIZE_MB` |
| DB table names | snake_case (Prisma) | `gallery_image` |
| API routes | kebab-case | `/api/before-after` |
| Git branches | kebab-case | `lesson-03-r2-upload` |
| Env vars | SCREAMING_SNAKE | `R2_BUCKET_NAME` |

---

## 🌿 Git Workflow

- **One branch per feature/lesson:** `lesson-01-setup`, `lesson-02-auth`, `feature/before-after-upload`
- Commit messages: imperative, present tense — `Add upload API route` not `Added upload route`
- Never commit `.env` or `.env.local` — always use `.env.example` to document required vars
- PR before merging to `main`

### Branch naming by phase
```
phase-1/replicate-homepage
phase-1/migrate-gallery-component
phase-2/prisma-schema
phase-2/r2-upload
phase-2/admin-auth
phase-3/domain-cutover
```

```bash
# Starting a new lesson/feature
git switch -c phase-1/replicate-homepage

# Committing
git commit -m "Convert homepage HTML to Next.js JSX"
```

---

## 🤖 Claude / AI Assistant Guidelines

When using Claude (or Cursor) on this project, **always share this document** or paste the relevant sections. Key rules for AI output:

1. **Always output TypeScript** — reject any JS-only suggestions
2. **Follow the folder structure above** — if Claude puts a file somewhere unexpected, move it
3. **No inline styles** — Tailwind only
4. **No `any` types** — ask Claude to fix them before accepting
5. **Server-first** — if Claude adds `'use client'` unnecessarily, remove it
6. **ShadCN for UI** — ask Claude to use ShadCN components (`Button`, `Card`, `Dialog` etc.) before custom ones
7. **Validate on the server** — don't trust client-side only validation suggestions
8. **Respect the phase** — don't let Claude scaffold DB/auth code during Phase 1

### Useful prompt starters for this project

```
We are on Phase 1 of the HBP migration (vanilla JS → Next.js static replicate).
Stack: Next.js React 19, TypeScript, Tailwind CSS v4. No database or auth yet.
Task: [describe task]
```

```
We are on Phase 2 of the HBP project (adding CMS features).
Stack: Next.js React 19, TypeScript, Tailwind v4, ShadCN, Prisma + Neon, Cloudflare R2, NextAuth v5.
Server Components by default. Named exports. No `any` types.
Task: [describe task]
```

---

## ✅ Pre-Commit Checklist

Before committing any new feature:

- [ ] No TypeScript errors (`npx tsc --noEmit`)
- [ ] No `any` types introduced
- [ ] No hardcoded secrets or API keys
- [ ] DB calls are in Server Components or API routes only (Phase 2+)
- [ ] File uploads validated on the server (Phase 2+)
- [ ] New environment variables added to `.env.example`
- [ ] Component is under 150 lines (split if needed)
- [ ] Consistent Tailwind spacing (no one-off magic numbers)
- [ ] Phase 1 only: no DB, R2, or auth imports snuck in

---

*Last updated: June 2026 — HBP v2 CMS migration*

