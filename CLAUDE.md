# DinDrenering (dindrenering.no)

Norwegian site that compares drainage (drenering) contractors and sends homeowners'
quote requests on to them. Next.js 15 App Router, deployed by Netlify on every push to
`main`. There is no CMS and no paid service; keep it that way.

## Goal

Rank on Google for drenering searches in Norway. For roughly two months (from
late October 2026) the job is steady content: new articles plus improving thin
pages. If traffic picks up, the owner will contact drenering contractors and
charge them per lead, so the content also has to be trustworthy enough for a
contractor to want to be listed here.

**Read `STRATEGY.md` before planning any work.** It holds the priorities,
keyword map, city-page approach and owner tasks. `content/PLAN.md` is the
ordered backlog.

## Where content lives

- Blog articles: `content/blog/<slug>.md`. The slug is the file name and becomes
  `/blog/<slug>`. Frontmatter:
  ```yaml
  title: "..."          # H1 and <title>
  description: "..."    # meta description, ~150 characters
  date: "YYYY-MM-DD"
  updated: "YYYY-MM-DD" # bump when content changes meaningfully
  readingTime: 6        # minutes
  image: "/blog/<slug>.svg"   # optional
  imageAlt: "..."
  ```
- Article images: `public/blog/<slug>.svg`.
- Guide and service pages: `app/drenering/*`, `app/tjenester/*` (hand-written TSX).
- City pages: `app/drenering/[city]` plus `src/components/features/city/*`; the
  cities are listed in `src/utils/Constants.ts` (`KOMMUNER`, where `id` is the URL slug).

## Writing

- Norwegian bokmål, written the way a knowledgeable Norwegian tradesperson
  explains things to a homeowner: direct, concrete and practical.
- Avoid the typical AI tells: no "I dagens samfunn…" openers, no emoji bullets
  (✅ ❌), no closing section titled "Konklusjon" that repeats the article, no
  stacks of identical bullet lists, no hype adjectives. Vary sentence length.
  Answer the reader's question early.
- Each article goes after one main search intent (e.g. "drenering pris per meter",
  "drenering på leirgrunn"). Put the main keyword in the title, the H1, the first
  paragraph and the slug, and don't stuff it anywhere else.
- Link to 2–4 related pages on the site (guides, /drenering/pris, relevant city
  pages) and end with a natural pointer to `/tilbud`.
- Don't write an article whose search intent an existing article or page already
  covers. Improve that page instead.

## No made-up facts (most important rule)

Readers and contractors will notice wrong numbers, and one obvious error costs the
whole site its credibility.

- Never invent prices, statistics, regulations, product names, companies,
  customer quotes, testimonials or reviews.
- Prices: give wide national ranges, say what drives the price (meters of wall,
  depth, ground conditions, access, rock, disposal), and say that local quotes
  vary. Never claim a specific price for a specific city ("i Kristiansand koster det
  X kr") unless a cited source states it.
- Local content (city pages): only facts that are well established and checkable,
  such as marine clay being common around Oslo and Trondheim, heavy rainfall in
  Bergen, or frost and snowmelt in Northern Norway. When unsure, leave it out.
- Specific numbers or rules need a real source that you have actually checked,
  linked in the text (e.g. SINTEF Byggforsk, NVE, the Norwegian Meteorological
  Institute, SSB, TEK17 at dibk.no, Finance Norway, the municipality). If you can't
  verify it, write around it.
- Hedge honestly ("typisk", "ofte", "avhenger av") instead of being falsely precise.

## Images

- Only SVG illustrations, written by hand as SVG code. Never photos and never
  realistic AI-generated images.
- Style: flat, simple vector, slightly playful (a small twist, e.g. a house wearing
  rain boots or a pipe with a face) but clearly about the topic. Use the brand
  blues (`#1e3a8a` `#2563eb` `#60a5fa` `#bfdbfe` `#eff6ff`), with earth tones for
  soil and gravel. No text inside the image.
- Set `viewBox` (1200×600 for article headers), keep files small (<30 KB) and
  write a descriptive `imageAlt`.

## Shipping changes

- Run `npm run build` before committing; it also regenerates `public/sitemap*.xml`
  (commit those too). Optionally run `npx next start` and curl changed pages.
- Commit to `main` and push. Netlify deploys automatically. Don't wait for or poll
  the live deploy.
- Old city URLs (`/drenering/Oslo`) 301 to slugs in `middleware.ts`. Every
  indexable page sets `alternates.canonical`.
- The canonical host is `https://www.dindrenering.no` (Netlify 301s the apex to
  www). Hardcoded absolute URLs must use www.
