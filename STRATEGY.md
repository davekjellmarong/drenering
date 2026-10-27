# SEO strategy: dindrenering.no

Written 2026-10-27. This is the "why" and the priorities. `CLAUDE.md` has the
rules for writing, facts and images; `content/PLAN.md` is the ordered to-do list.
Read all three before doing any work. When something here proves wrong (GSC data
contradicts it, say), update this file and note why in PLAN.md's Done log.

## 1. The goal and how we win

**Business:** homeowners request quotes, and contractors pay per lead. Google
ranking is the means, not the goal. Success, in order: **leads per month** >
Google clicks to commercial pages (pris, rundt hus, cities, /tilbud) > queries
in the top 10 > impressions > indexed pages.

**The opening:** in October 2026, the results for core drenering searches were
dominated by forum threads (byggebolig.no), a few Huseierne.no articles,
Finansklagenemnda PDF rulings and directory listings (1881, Gulesider). Google
ranks forums when it lacks good dedicated pages, and no site owns this topic.
We become **the most useful and most trustworthy place in Norway to understand
drenering and get it done right**. A specialist that goes deep beats
generalist marketplaces on the long tail, and that depth eventually earns the
head terms.

**Realistic timeline** (the domain has little authority):
- Long-tail guides (TG2 drenering, pumpekum, knotteplast): can rank in weeks to 3 months.
- "drenering pris" and "drenering rundt hus": 3–9 months and needs links.
- "drenering + by": hardest. Needs real local value, links and eventually real
  local contractors listed.
- So contractor conversations must not wait for rankings (see section 10).

**What would sink us:**
- Mass-produced thin pages. Google's "scaled content abuse" spam policy
  targets these regardless of how they're written.
- Wrong facts, and templated city pages.
- Invented people, reviews or companies.
- Keyword stuffing, or multiple pages competing for the same query.

## 2. Principles for every piece of work

1. **One URL per search intent.** Check the keyword map (section 4) and grep
   `content/` and `app/` before writing. If a page already covers the intent,
   improve that page instead of adding a new one.
2. **Information gain.** Each page adds something the current top results lack:
   - an explanatory SVG diagram (a cross-section of correct drainage, step by step),
   - a checklist, comparison table or decision guide,
   - sourced numbers, or a worked example ("40 m grunnmur: dette bør tilbudet inneholde").
   Note the info-gain element in the PLAN.md Done log.
3. **Answer first.** The first 2–3 sentences answer the query directly. This
   matters for featured snippets and for AI Overviews, ChatGPT and Perplexity,
   which quote clear, self-contained answers. Then go deep, using
   question-shaped H2s where natural.
4. **Trust.**
   - Cite and link sources, and show "Sist oppdatert".
   - Say where things vary or are uncertain.
   - Be open that we are a comparison service and that contractors pay for leads.
5. **Conversion.** Every page ends with a CTA to `/tilbud` that fits its intent:
   - problem pages: "få en fagperson til å vurdere det"
   - price pages: "få 3 tilbud å sammenligne"
   - process pages: "finn firma som gjør dette"
6. **Internal links, both directions.**
   - A new page links up to its pillar and to 2–4 related pages.
   - Also edit 2 or more existing pages so they link to the new page, with
     descriptive anchor text (never "les mer" or "klikk her").
   - Orphan pages don't rank.
7. **Quality over quantity.** One strong item per run. Use the length the
   intent needs (often 1 200–2 000 words for guides) and never pad.
8. **Titles** ≤ 60 characters with the keyword at the front. Descriptions are
   ≤ 155 characters and contain a concrete promise. One H1 per page.

## 3. Site architecture (target)

```
/                         home: pillars, cities, CTA
/drenering                HUB (404 today, must exist): everything about drenering, links all guides + all cities
  /drenering/hva-er-drenering       pillar: basics
  /drenering/pris                   pillar: price ("drenering pris", "pris per meter", "hva koster")
  /drenering/drenering-rundt-hus    pillar: how it's done (HubSpot-dependent today, must move into repo)
  /drenering/vanninntrenging        pillar: water/damp in basement
  /drenering/typer-drenering, /drenerings-renne, /fordeler, /baerekraftig, /klimaendringer
  /drenering/<city>                 local pages
/blog/<slug>              spokes (Markdown in content/blog), each linked from a pillar
/tjenester                HUB (404 today) + 4 service pages
/om-oss                   HUB (404 today): who we are, how it works, editorial policy
/tilbud                   the conversion page
```

The `/drenering/<x>` path is caught by the city route, so new guide content
goes under `/blog/<slug>` unless you add it as a static route. Don't change
existing URLs; if you must, add a 301.

## 4. Keyword map (one URL per primary keyword)

Status: ✔ exists and is good, ◐ exists but needs work, ○ planned.

| Cluster | Primary keyword (and close variants) | URL | Status |
|---|---|---|---|
| Head + basics | drenering, hva er drenering, drenering definisjon | /drenering/hva-er-drenering (Google already ranks this for "drenering"; `/drenering` is a navigation hub only) | ◐ fact-audit |
| Basics | typer drenering | /drenering/typer-drenering | ◐ fact-audit |
| Materials | drenerende masser, drensmasser, pukk drenering | /blog/drenerende-masser | ○ |
| Price tool | drenering kalkulator | on /drenering/pris or own page | ○ sourced inputs only |
| Overvann | overvannshåndtering, overvann tomt, drenering av overvann, overvannsanlegg | /tjenester/overvannshandtering | ◐ thin |
| Overvann | overflatedrenering, dreneringsrenne | /drenering/drenerings-renne | ◐ HubSpot |
| Price | drenering pris, hva koster drenering, drenering pris per meter | /drenering/pris | ◐ unsourced tiers |
| Price | drenering og isolering pris / etterisolering grunnmur | /blog/drenering-og-etterisolering-av-grunnmur | ○ |
| Process | drenering rundt hus, hvordan drenere hus | /drenering/drenering-rundt-hus | ◐ HubSpot |
| Process | grunnmursplate, knotteplast | /blog/grunnmursplate-knotteplast | ○ |
| Process | drenering uten graving | /blog/drenering-uten-graving | ◐ fact-check |
| Process | drenering egeninnsats | /blog/drenering-egeninnsats | ○ |
| Process | hvor lang tid tar drenering | section in rundt-hus pillar | ○ |
| Process | drensrør spyling / rørinspeksjon | /blog/spyling-og-inspeksjon-av-drensror | ○ |
| Process | pumpekum, pumpesump | /blog/pumpekum | ○ |
| Process | dreneringsrenne | /drenering/drenerings-renne | ◐ |
| Problem | vann i kjeller, vanninntrenging | /drenering/vanninntrenging | ◐ |
| Problem | fukt i kjeller (damp, smell, mould; not running water) | /blog/fukt-i-kjeller | ○ |
| Problem | saltutslag grunnmur | /blog/saltutslag-pa-grunnmur | ○ |
| Problem | tegn på dårlig drenering, levetid drenering, når bør man drenere | /blog/tegn-pa-at-boligen-trenger-ny-drenering | ◐ rewrite + expand |
| Problem | vann i kjeller snøsmelting / vårflom | /blog/vann-i-kjeller-ved-snosmelting | ○ publish by early Feb |
| Problem | drenering leirgrunn | /blog/drenering-pa-leirgrunn | ○ |
| Housing | TG2 drenering, TG3 drenering, tilstandsrapport drenering | /blog/tg2-tg3-drenering-tilstandsrapport | ○ high priority |
| Housing | forsikring vann i kjeller, eierskifteforsikring drenering | /blog/dekker-forsikringen-drenering | ○ |
| Hiring | dreneringsfirma, velge dreneringsfirma, kontrakt drenering | /blog/hvordan-velge-riktig-dreneringsfirma | ◐ rewrite |
| Hiring | søknadsplikt drenering | /blog/soknadsplikt-drenering | ○ (dibk.no only) |
| Outdoor | takrenner nedløp, takvann drenering | /blog/takrenner-og-overvann | ○ |
| Outdoor | drenering hage plen | /blog/drenering-av-hage-og-plen | ○ |
| Services | boligdrenering / drensrør installasjon / industriell drenering | /tjenester/* | ◐ thin |
| Local | drenering <by> | /drenering/<city> | ◐ templated |

Add rows when you add pages. If GSC shows two URLs ranking for the same query,
merge them (301 the weaker one) and update this table.

## 5. City pages

Today all 20 pages share the same text with only the name swapped. That makes
them doorway-like and a risk to the whole site. Fix them with **verifiable,
sourced data**, never invented "local insight":

- Build a per-city data file (e.g. `src/utils/cityData.ts`). Each field holds
  `{ value, sourceName, sourceUrl }`, and the components render only fields
  that exist. A city with no data stays short and generic. That's acceptable;
  a fabricated city page is not.
- Data that is good, real and unique per city:
  - **Ground conditions:** NGU's "Mulighet for marin leire" map and løsmassekart
    (marine clay below the marine limit). Describe the municipality
    qualitatively, link the map, and never claim conditions for a specific address.
  - **Rainfall:** the normal annual precipitation at a station in or near the
    city, from met.no / seklima (Norsk Klimaservicesenter). Give the station name.
  - **Housing stock:** SSB statbank. Number of detached houses (eneboliger) and
    the share built before roughly 1980–1990. Tie this to drainage lifetime,
    which is typically 20–60 years per Finansklagenemnda rulings; confirm with
    SINTEF where possible.
  - **Municipal rules:** link the municipality's own pages on overvann,
    gravemelding and stikkledninger. Quote only what they say.
- Never put prices, named companies, reviews or "vanlige problemer i <by>" on
  a city page without a source.
- **Order:** the big detached-house markets first. Check SSB for the real
  ranking. Likely Oslo, Bergen, Trondheim, Stavanger, Kristiansand. **Bærum and
  Asker** are huge villa markets with no page yet. Add new cities only when
  they get real data at launch.
- **Later**, once contractors join: a real "Dreneringsfirma i <by>" section
  with actual partners. That is the strongest local signal we can ever have.

## 6. Our data moat (prices without inventing them)

- **Now:** price content may cite
  - forum-reported quotes, labelled as anecdotal user reports with the year
    (byggebolig.no threads report roughly 2 000–4 000 kr per meter ex. VAT,
    widely varying, often older),
  - Huseierne.no articles,
  - SSB's construction cost index for the trend.
  Always show what drives the price and what a quote should itemise.
- **Once leads flow:** collect anonymised quote data from partner contractors
  (municipality, meters, depth, job type, price) and publish a "DinDrenering
  prisindeks" twice a year. Only we have that data, so it earns links, can be
  quoted by AI answers, and lets us state real local prices honestly. Never
  publish a city figure based on fewer than about 10 quotes.

## 7. Technical SEO

**Done:**
- Markdown blog and Article JSON-LD
- lowercase city slugs with 301s
- canonicals on every page
- sitemap cleanup
- `www` as the canonical host (Netlify serves `www.dindrenering.no`; the apex domain 301s to it)

**To do** (in PLAN.md):
- Hub pages for `/drenering`, `/tjenester` and `/om-oss`, which are 404 today.
- Move the HubSpot-dependent pages (`drenering-rundt-hus`, `drenerings-renne`)
  into the repo; the HubSpot token returns 401.
- Replace the `LocalBusiness` JSON-LD with `Organization` + `WebSite`
  (`LocalBusiness` without an address is invalid).
- `BreadcrumbList` on guides, blog posts and cities.
- `faq:` frontmatter in Markdown articles that renders a FAQ section plus
  FAQPage JSON-LD.
- Custom 404 page linking to the hubs.
- PNG Open Graph images via `next/og`. Facebook and LinkedIn don't render SVG
  og:images, and this matters for the Facebook ads.
- An IndexNow ping after deploy (free; Bing and the AI search tools built on Bing).
- A PageSpeed Insights check about once a month (the API is free and needs no
  key at low volume).

## 8. Off-page: links and brand

Content won't rank for competitive terms without other sites linking to it.
Free tactics, in order of return:

1. **Linkable assets** the routine can build:
   - **Data stories from SSB:** e.g. how many detached houses are past typical
     drainage lifetime, by county. Verify every number.
   - **The price index** (section 6).
   - **A "sjekkliste før du signerer med dreneringsfirma" page** that's genuinely
     worth sharing.
2. **Owner outreach** with those assets:
   - local newspapers' housing sections and housing bloggers;
   - timed to autumn rain (Sep–Nov) and snowmelt (Feb–Apr).
3. **Community:** the owner answers drenering questions in Facebook groups for
   homeowners and on byggebolig.no, linking a guide only when it truly answers
   the question.
4. **Partner badges:** contractors get "Listet på DinDrenering" and link to
   their profile.
5. **Basic citations:** Proff, 1881, Gulesider and a Google Business Profile,
   but only for a real registered company.

Never use paid links, link networks or link exchanges at scale.

## 9. Seasonality

| When | Searches peak for | Do |
|---|---|---|
| Sep–Nov | rain, vann i kjeller, takrenner | refresh problem pages, publish overvann content |
| Feb–Apr | snowmelt, vårflom, water in basement | snowmelt article live by early Feb; refresh vanninntrenging |
| Apr–Oct | the frost-free digging season: price, process, choosing a firm | push pris, rundt hus and hiring content; owner runs Facebook ads Mar–Sep |

## 10. Measurement and the daily run

- **GSC data:** the owner drops a Search Console export (queries + pages, last
  28 days) into `content/data/gsc/YYYY-MM.csv` about once a month. When a new
  file appears, the next run is an **optimisation run** instead of a backlog item:
  1. queries with many impressions but low CTR: rewrite the title and description;
  2. pages at positions 8–20: add the missing subtopics and FAQs, and strengthen internal links;
  3. queries with no matching page: add them to the backlog;
  4. log the before and after.
- **Refresh runs:** PLAN.md mixes in refresh and fact-audit runs. Old pages
  with unsourced claims hurt trust more than missing pages do.
- **Leads:** if a run notices the form or HubSpot failing, put it at the top of
  PLAN.md and say so in the final summary.

## 11. Owner tasks (not doable from code)

Must do:
1. ~~Google Search Console~~ DONE 2026-10-27. It's a Domain property (verified
   since 2025-04). Until 2026-10-27 the www sitemap listed apex URLs, so Google
   discovered 0 pages from it. Re-submitted `sitemap.xml` and `sitemap-0.xml`
   (46 pages discovered the same day).
2. **Test the quote form** on `/tilbud` and confirm the request reaches HubSpot.
   If it doesn't, Claude switches to Netlify Forms (free) with email notification.
3. **Team page:** are the 3 people on `/om-oss/team` real? If not, Claude
   removes them; fake people destroy trust. Then provide a real "who runs this"
   line (a name or the company, plus the org number if one exists).

Then:

4. **Bing Webmaster Tools:** import from GSC (2 minutes). Bing feeds ChatGPT
   search and Copilot.
5. **Monthly GSC export** into `content/data/gsc/` (or ask Claude to set up the
   GSC API with a service account).
6. **Founding partners, now, not in two months:**
   - Recruit 3–5 drenering contractors in the top cities. Offer free leads for
     a period in return for:
     - (a) handling the leads well,
     - (b) anonymised quote prices (for the price index),
     - (c) a fact-check of one or two articles ("Faglig gjennomgått av …",
       a strong trust signal).
   - Contractors buy leads, not rankings, so this unlocks both revenue and content.
7. **Facebook ads**, only after items 2 and 6 so leads have somewhere to go.
   - Use a small budget, target homeowners in the partner cities, and run them
     seasonally (section 9).
   - Ads don't help Google directly, but they create leads (proof for
     contractors) and brand searches.
8. **About 1 hour a week of community answers and outreach** (section 8).

## 12. Search Console baseline (export 2026-10-27, last 3 months)

The raw files are in `content/data/gsc/2026-10/`. Compare future exports against
this baseline.

- **Totals:** 18 clicks and 3 744 impressions over 3 months, average position
  about 45. The trend is flat. Norway accounts for 3 394 of the impressions.
  Mobile ranks far better than desktop (position 17 vs 48).
- **Demand exists:** "drenering" alone had 922 impressions, with us around
  position 58. Google ranks hva-er-drenering (1 031 impressions) and
  typer-drenering (834) for it.
- **The price cluster is the biggest commercial group:** about 400 impressions
  across 20+ variants, at positions 40–50. /drenering/pris has 495 impressions
  at position 42.
- **City pages are closest to page 1:**

  | City | Position | Impressions |
  |---|---|---|
  | Sandnes | 12.6 | 91 |
  | Tromsø | 16.8 | 35 |
  | Kristiansand | 17.7 | 103 |
  | Stavanger | 18.9 | 34 |
  | Trondheim | 23.6 | 100 |
  | Tønsberg ("drenering tønsberg") | 21.7 | — |

  Oslo has the most demand (238 impressions for "drenering oslo") but sits at
  position 49. So local pages are the fastest route to clicks, and unique city
  data is the lever. (The GSC URLs are the old capitalised ones, which now 301
  to the slugs; expect a short consolidation period.)
- **Overvann is a bigger group than expected:** about 300 impressions.
  "overflatedrenering" already sits at position 12.
- **Noise:** some impressions are for unrelated Fredrikstad queries (fjellsplitting,
  brønnboring, asbest) and other off-topic terms. Ignore them, and don't write
  content for them.
- **Missing from the data:** Bærum and Asker don't appear because there are no
  pages for them.
