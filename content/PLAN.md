# Content plan

Work top to bottom, one item per daily run, done properly. When finished, tick
the item, move it to "Done" with the date, a one-line summary and its
information-gain element, and add genuinely new ideas to the right section.
Read `STRATEGY.md` (priorities, keyword map) and `CLAUDE.md` (writing, facts and
image rules) first. Items marked BLOCKED wait for the owner: skip them.

Exception: if a new file appears in `content/data/gsc/` that no Done entry
mentions, do an optimisation run instead (STRATEGY.md section 10).

## Backlog (in priority order)

### Foundation
- [ ] Move `/drenering/drenering-rundt-hus` fully into the repo (remove the HubSpot fetch). Make it the process pillar: step-by-step how the work is done, what a proper build-up looks like (SVG cross-section diagram: drensrør, pukk, fiberduk, grunnmursplate, isolasjon, terrengfall), how long it takes, what drives cost (link /drenering/pris), FAQ. Do the same HubSpot removal for `/drenering/drenerings-renne` (keep its current text, fact-check it).
- [ ] Create hub pages: `/drenering` (pillar for "drenering": short answer-first intro, cards linking every guide, blog article and city; CTA), `/tjenester` (links to the 4 services), `/om-oss` (how the service works, honest about the lead model; links team, visjon, kontakt). Link `/drenering` from header/footer/home.
- [ ] Fact-audit pass 1: `/drenering/pris` and `/drenering/hva-er-drenering`. Remove or source every number. Rebuild pris as the price pillar: what drives the price (table), what a quote must itemise, forum-reported per-meter ranges clearly labelled as anecdotal with source and year, "pris per meter" section, CTA. No invented price tiers.
- [ ] Tech batch: replace `LocalBusiness` JSON-LD with `Organization` + `WebSite`; add `BreadcrumbList` to blog posts, guides and city pages; support `faq:` frontmatter in Markdown articles (renders a FAQ section + FAQPage JSON-LD); custom `app/not-found.tsx` linking the hubs.
- [ ] Article: TG2/TG3 drenering i tilstandsrapporten. What the grades mean, why age alone often gives TG2, what to do as buyer or seller, what Finansklagenemnda has ruled (cite specific public rulings at publisering.finkn.no), and when to get a contractor to inspect. Verify every rule against the source (NS 3600 / the regulation under avhendingslova).
- [ ] Fact-audit pass 2: `/drenering/typer-drenering`, `/drenering/vanninntrenging`, `/drenering/fordeler`.

### Local and core content
- [ ] City data framework (`src/utils/cityData.ts` with sourced fields, components render only present fields; see STRATEGY.md section 5) + fill Oslo, Bergen and Trondheim.
- [ ] Rewrite `/blog/tegn-pa-at-boligen-trenger-ny-drenering` into the "når bør man drenere / levetid" page: signs, lifetime (sourced), how to check, SVG. Remove emoji bullets.
- [ ] Article: fukt i kjeller (damp, smell, mould: causes, how to tell drainage from condensation, what to do first). Must not cannibalise `/drenering/vanninntrenging`; cross-link.
- [ ] City data: Stavanger, Kristiansand, Drammen.
- [ ] `/tjenester/boligdrenering`: expand to a real service page (what's included, process, price drivers, how to compare quotes, FAQ, SVG).
- [ ] Rewrite `/blog/hvordan-velge-riktig-dreneringsfirma`: checklist, questions to ask, what the contract should say (håndverkertjenesteloven, verify at lovdata.no), red flags. Make the checklist printable/shareable.
- [ ] Article: drenering og etterisolering av grunnmur (do both at once, sourced SINTEF/Huseierne guidance).
- [ ] Refresh: check internal links across all pages; every page linked from at least 2 others with descriptive anchors; update the keyword map in STRATEGY.md.
- [ ] Article: grunnmursplate / knotteplast (what it does, correct installation, common mistakes, SVG detail).
- [ ] Rewrite `/blog/drenering-uten-graving`: verify every method claimed (the current text mentions electro-osmosis; keep it only if a credible source describes it for Norwegian homes) and be honest about limitations.
- [ ] City data: Bærum and Asker (new city pages: add to `KOMMUNER` only with real data), Fredrikstad.
- [ ] Article: dekker forsikringen vann i kjeller eller ny drenering? (homeowner's insurance vs eierskifteforsikring; cite Finansklagenemnda rulings and insurers' public terms).
- [ ] Article: drenering på leirgrunn (NGU marine clay map, why clay matters, what contractors do differently).
- [ ] Tech: PNG Open Graph images via `next/og` for blog posts and pillars (Facebook doesn't render SVG og:image).

### Expansion
- [ ] Article: vann i kjeller ved snøsmelting og vårflom (MUST be live by 2027-02-01; move up if needed).
- [ ] Article: takrenner, nedløp og overvann (connection to drainage, simple fixes first).
- [ ] Article: pumpekum og pumpesump.
- [ ] Fact-audit pass 3: `/drenering/baerekraftig`, `/drenering/klimaendringer`, `/hvordan-funker-det`. Merge the first two into one stronger page if they're thin (301 the other).
- [ ] City data: Sandnes, Tromsø, Sarpsborg.
- [ ] Article: spyling og inspeksjon av drensrør (kamera-inspeksjon, when it's worth it).
- [ ] `/tjenester/drensror-installasjon` and `/tjenester/overvannshandtering`: expand.
- [ ] Article: drenering med egeninnsats (what's realistic to do yourself, what isn't).
- [ ] Article: søknadsplikt for drenering (only what dibk.no / the municipality states).
- [ ] Linkable asset: data story from SSB, e.g. detached houses by building year per county vs typical drainage lifetime. Every number from statbank, with table IDs cited.
- [ ] Article: saltutslag på grunnmur.
- [ ] City data: remaining cities in `KOMMUNER`, in batches of three.
- [ ] `/tjenester/industriell-drenering`: expand or merge (low priority for homeowner leads).
- [ ] Article: drenering av hage og plen.
- [ ] Tech: IndexNow ping on deploy; monthly PageSpeed Insights check of home, pris, a city page and a blog post.

### BLOCKED (waiting on owner)
- [ ] `/om-oss/team`: owner must confirm whether the 3 listed people are real. If not, remove them and replace with an honest "who runs this".
- [ ] Editorial policy page "Slik lager vi innholdet" with the owner's name/company. Needs the owner's identity details.
- [ ] "Faglig gjennomgått av …" badges on articles, once a partner contractor reviews them.
- [ ] Price index from partner quote data (STRATEGY.md section 6).

## Done
- 2026-10-27: Phase 1 technical fixes. Blog moved to Markdown, city URL slugs + 301s, canonicals, sitemap cleanup, removed invented per-city price from city FAQ.
- 2026-10-27: Wrote STRATEGY.md; canonical host switched to www (Netlify serves www; apex 301s).
