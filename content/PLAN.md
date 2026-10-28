# Content plan

Work top to bottom, one item per daily run, done properly. When finished, tick
the item, move it to "Done" with the date, a one-line summary and its
information-gain element, and add genuinely new ideas to the right section.
Read `STRATEGY.md` (priorities, keyword map) and `CLAUDE.md` (writing, facts and
image rules) first. Items marked BLOCKED wait for the owner: skip them.

Exception: if a new file appears in `content/data/gsc/` that no Done entry
mentions, do an optimisation run instead (STRATEGY.md section 10).

## Backlog (in priority order)

Reordered 2026-10-27 from the first GSC export (`content/data/gsc/2026-10/`, see
STRATEGY.md section 12): price searches are the biggest commercial cluster,
city pages are closest to page 1, and overvann searches are a surprisingly
large group.

### Foundation (highest return first)
- [ ] Price pillar follow-up, BLOCKED on network: byggebolig.no and huseierne.no did not resolve in the 2026-10-28 session. Re-run when they are reachable: open 3+ byggebolig.no price threads and the Huseierne drainage articles, then add a clearly labelled "anecdotal quotes" table (year, what was included, source link) and SINTEF/Huseierne lifetime and insulation guidance to `/drenering/pris`. Until then the page carries no kroner figures.
- [ ] City data framework (`src/utils/cityData.ts`, sourced fields only, components render only present fields; STRATEGY.md section 5). Fill the striking-distance cities first: Sandnes (position 12.6), Kristiansand (17.7), Tromsø (16.8), Stavanger (18.9). Also give city titles/descriptions a CTR-oriented rewrite.
- [ ] City data: Trondheim (23.6), Tønsberg (21.7), Fredrikstad (24.8), Drammen (31.4).
- [ ] Move `/drenering/drenering-rundt-hus` fully into the repo (remove the HubSpot fetch). Make it the process pillar: step-by-step how the work is done, what a proper build-up looks like (SVG cross-section diagram: drensrør, pukk, fiberduk, grunnmursplate, isolasjon, terrengfall), how long it takes, what drives cost (link /drenering/pris), FAQ. Do the same HubSpot removal for `/drenering/drenerings-renne` (keep its current text, fact-check it; it has 551 impressions at position 68).
- [ ] Overvann cluster (about 300 impressions: "overvannshåndtering" 80, "overvannsanlegg" 56, "overflatedrenering" 56 at position 12, "drenering av overvann" 38, "overflatevann drenering" 29). Expand `/tjenester/overvannshandtering` into the homeowner-focused overvann page (what it is, takvann/nedløp, overflatedrenering, local rules link to the municipality, when you need a contractor); make sure `/drenering/drenerings-renne` covers "overflatedrenering" and links to it. Avoid cannibalising between the two: renne = the product/solution, overvannshåndtering = the overall topic.
- [ ] Strengthen `/drenering/hva-er-drenering` for the head term "drenering" (922 impressions, position 58; this page and typer-drenering are what Google ranks for it): fact-audit, answer-first definition, SVG diagram, clear links to pris/rundt hus/typer/cities. Also fact-audit `/drenering/typer-drenering` (834 impressions, position 42; 4 of the site's 18 clicks).
- [ ] Create hub pages: `/drenering` (navigation hub: cards linking every guide, blog article and city; title like "Alt om drenering: guider, priser og firma i din by"; do NOT make it compete with hva-er-drenering for "drenering"), `/tjenester` (links to the 4 services), `/om-oss` (how the service works, honest about the lead model; links team, visjon, kontakt). Link `/drenering` from header/footer/home.
- [ ] Tech batch: replace `LocalBusiness` JSON-LD with `Organization` + `WebSite`; add `BreadcrumbList` to blog posts, guides and city pages; support `faq:` frontmatter in Markdown articles (renders a FAQ section + FAQPage JSON-LD); custom `app/not-found.tsx` linking the hubs.
- [ ] Article: TG2/TG3 drenering i tilstandsrapporten. What the grades mean, why age alone often gives TG2, what to do as buyer or seller, what Finansklagenemnda has ruled (cite specific public rulings at publisering.finkn.no), and when to get a contractor to inspect. Verify every rule against the source (NS 3600 / the regulation under avhendingslova).
- [ ] Fact-audit `/drenering/vanninntrenging` and target its spelling variants ("vanninntrenging" 40, "vanngjennomtrengning" 50, "vanninntrengning" 24); also `/drenering/fordeler`.
- [ ] Article: drenerende masser (pukk, singel, drensgrus: which fill to use around drains and why; "drenerende materiale grunn" has 41 impressions). Source from SINTEF/Huseierne/manufacturer specs.
- [ ] Tool: drenering kalkulator ("drenering kalkulator" has 23 impressions). The visitor enters meters of wall, depth, access and ground; the tool shows which factors push the price up or down and a range ONLY if it's based on sourced per-meter figures shown on the page (otherwise just the factor checklist + "få tilbud"). Client component on `/drenering/pris` or its own page. No invented numbers.

### Local and core content
- [ ] Rewrite `/blog/tegn-pa-at-boligen-trenger-ny-drenering` into the "når bør man drenere / levetid" page: signs, lifetime (sourced), how to check, SVG. Remove emoji bullets.
- [ ] Article: fukt i kjeller (damp, smell, mould: causes, how to tell drainage from condensation, what to do first). Must not cannibalise `/drenering/vanninntrenging`; cross-link.
- [ ] City data: Oslo (238 impressions for "drenering oslo" but position 49: needs the strongest page), Bergen.
- [ ] `/tjenester/boligdrenering`: expand to a real service page (what's included, process, price drivers, how to compare quotes, FAQ, SVG).
- [ ] Rewrite `/blog/hvordan-velge-riktig-dreneringsfirma`: checklist, questions to ask, what the contract should say (håndverkertjenesteloven, verify at lovdata.no), red flags. Make the checklist printable/shareable.
- [ ] Article: drenering og etterisolering av grunnmur (do both at once, sourced SINTEF/Huseierne guidance).
- [ ] Refresh: check internal links across all pages; every page linked from at least 2 others with descriptive anchors; update the keyword map in STRATEGY.md.
- [ ] Article: grunnmursplate / knotteplast (what it does, correct installation, common mistakes, SVG detail).
- [ ] Rewrite `/blog/drenering-uten-graving`: verify every method claimed (the current text mentions electro-osmosis; keep it only if a credible source describes it for Norwegian homes) and be honest about limitations.
- [ ] City data: Bærum and Asker (new city pages: add to `KOMMUNER` only with real data), Larvik, Lillehammer.
- [ ] Article: dekker forsikringen vann i kjeller eller ny drenering? (homeowner's insurance vs eierskifteforsikring; cite Finansklagenemnda rulings and insurers' public terms).
- [ ] Article: drenering på leirgrunn (NGU marine clay map, why clay matters, what contractors do differently).
- [ ] Tech: PNG Open Graph images via `next/og` for blog posts and pillars (Facebook doesn't render SVG og:image).

### Expansion
- [ ] Article: vann i kjeller ved snøsmelting og vårflom (MUST be live by 2027-02-01; move up if needed).
- [ ] Article: takrenner, nedløp og overvann (connection to drainage, simple fixes first).
- [ ] Article: pumpekum og pumpesump.
- [ ] Fact-audit pass 3: `/drenering/baerekraftig`, `/drenering/klimaendringer`, `/hvordan-funker-det`. Merge the first two into one stronger page if they're thin (301 the other).
- [ ] City data: Sarpsborg, Ålesund, Sandefjord.
- [ ] Article: spyling og inspeksjon av drensrør (kamera-inspeksjon, when it's worth it).
- [ ] `/tjenester/drensror-installasjon`: expand.
- [ ] Article: drenering med egeninnsats (what's realistic to do yourself, what isn't).
- [ ] Article: søknadsplikt for drenering (only what dibk.no / the municipality states).
- [ ] Linkable asset: data story from SSB, e.g. detached houses by building year per county vs typical drainage lifetime. Every number from statbank, with table IDs cited.
- [ ] Article: saltutslag på grunnmur.
- [ ] City data: remaining cities in `KOMMUNER`, in batches of three.
- [ ] `/tjenester/industriell-drenering`: expand or merge (low priority for homeowner leads).
- [ ] Article: drenering av hage og plen.
- [ ] Tech: IndexNow ping on deploy; monthly PageSpeed Insights check of home, pris, a city page and a blog post.

### BLOCKED (waiting on owner)
- [ ] "Faglig gjennomgått av …" badges on articles, once a partner contractor reviews them.
- [ ] Price index from partner quote data (STRATEGY.md section 6).

## Done
- 2026-10-28: Rebuilt `/drenering/pris`. Removed the invented price tiers (150–300k etc.), the "1–3 uker" claim and the "30–50 år" claim, and the same 150–300k line on `hva-er-drenering`. Added a driver table, "pris per meter" section on why meter prices are not comparable, how to calculate meters of wall, drenering + isolering section, a 10-point checklist of what a quote must itemise, FAQ (5 questions) and an inline SVG plan view. Inbound links added from two blog articles. Info gain: quote checklist + meter calculation + honest no-number stance. Sources: none cited (no kroner or rules stated) because the sites needed were unreachable; see follow-up item.
- 2026-10-27: Phase 1 technical fixes. Blog moved to Markdown, city URL slugs + 301s, canonicals, sitemap cleanup, removed invented per-city price from city FAQ.
- 2026-10-27: The quote and partner forms were broken (the HubSpot token is invalid), so they moved to Netlify Forms (`public/__forms.html` + `src/utils/netlifyForms.ts`). Wrote the privacy policy, terms and contact pages (owner details in `OWNER`), added the owner's name to the team page, and made PostHog cookieless (persistence: memory). Removed invented claims site-wide: the 8500 kr savings badge, "#1", a fake quote comparison with made-up companies, stars and prices, 24/7, "verifisert/lisensiert", "tusenvis av kunder", 24–48 h promises, and the city FAQ's "1–3 uker".
- 2026-10-27: The owner runs the site alone. `/om-oss/team` (was a placeholder with 3 invented names in dead code) rewritten as an honest "Hvem står bak" page (one person, not a contractor, lead model, how content is made); `/om-oss/visjon` placeholder 301s to it; removed "Våre eksperter" claims; fixed the broken `/quote` link on drenerings-renne.
- 2026-10-27: Optimisation run on GSC export `content/data/gsc/2026-10/` (last 3 months: 18 clicks, 3 744 impressions, average position ~45). Backlog reordered: price pillar first, striking-distance city pages, overvann cluster, head term via hva-er-drenering. Added drenerende masser + kalkulator items.
- 2026-10-27: Wrote STRATEGY.md; canonical host switched to www (Netlify serves www; apex 301s).
