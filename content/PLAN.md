# Content plan

Work top to bottom. One item per daily run: do it properly, move it to "Done"
with the date and what changed, and add new ideas to the backlog when you spot
real gaps. Rules for writing, facts and images are in `CLAUDE.md`.

## Backlog

### Improve thin existing pages (each has only ~80 words of real copy)
- [ ] `/tjenester/boligdrenering`: expand to 800–1 200 words (what the job involves, process step by step, what affects price, how long it takes, warning signs, FAQ), with an SVG header illustration
- [ ] `/tjenester/drensror-installasjon`: same treatment
- [ ] `/tjenester/overvannshandtering`: same treatment
- [ ] `/tjenester/industriell-drenering`: same treatment
- [ ] City pages: add a short, verifiable local section per city (ground conditions, climate) to `src/components/features/city/*`, data-driven from a per-city object. Start with Oslo, Bergen, Trondheim, Stavanger, Kristiansand and Tromsø. Facts must be well established; leave a city generic rather than guess.
- [ ] `/drenering/fordeler`, `/drenering/baerekraftig`, `/drenering/klimaendringer`: expand, or merge into stronger pages with redirects
- [ ] Rewrite the 3 old blog posts in `content/blog` to the CLAUDE.md standard (remove emoji bullets, add internal links, SVG header, bump `updated`)

### New articles (one search intent each)
- [ ] drenering pris per meter
- [ ] drenering og isolering av grunnmur (etterisolering samtidig med drenering)
- [ ] drenering på leirgrunn
- [ ] når bør man drenere huset? (alder på drenering, levetid)
- [ ] dekker forsikringen drenering eller fuktskader i kjeller?
- [ ] grunnmursplate / knotteplast: hva den gjør og hvordan den monteres
- [ ] pumpekum og pumpesump: når trenger man det?
- [ ] drenering med egeninnsats: hva kan du gjøre selv?
- [ ] takrenner, nedløp og overvann: koblingen til drenering
- [ ] fukt i kjeller: årsaker og hva du gjør først
- [ ] spyling og inspeksjon av drensrør (rørinspeksjon med kamera)
- [ ] drenering av hage og plen
- [ ] søknadsplikt og regler for drenering (only facts verified against dibk.no / TEK17)
- [ ] hvor lang tid tar drenering av en enebolig?
- [ ] drenering av gammelt hus / murhus

## Done
- 2026-10-27: Phase 1 technical fixes: blog moved to Markdown, city URL slugs + 301s, canonicals, sitemap cleanup, removed invented per-city price from city FAQ.
