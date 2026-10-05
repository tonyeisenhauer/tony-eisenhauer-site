# Site Refresh Summary (for Tony)

Rebuild of tony-eisenhauer.com as a clean Vite + React + Tailwind source tree for Cloudflare Pages project **tony-eisenhauer-site**.

## What stayed the same

- **All primary destinations** from the live site (routes + external URLs).
- Content foundation: SubTo / Pace Morby mentorship, $5M+ closed, 2nd Year Owners Club, buy-box strategies, Peak & Pine copy, testimonials (real names from live site), resources links, community photos.
- External links preserved exactly, including:
  - https://join.nre.ai/mzCwjho (SubTo)
  - https://calendly.com/tonyeisenhauer
  - https://linktr.ee/tonyeisenhauer
  - https://www.instagram.com/tonyeisenhauer/ (+ Facebook, LinkedIn, YouTube)
  - https://www.peakandpineretreat.com
  - Airbnb / Vrbo listing URLs on Peak & Pine
  - Get Creative Podcast, SquadUp IG, SubTo New England IG, Pace YouTube, Breeze lender form
  - mailto:Tony.northeastproperty@gmail.com

## What changed (structure + aesthetics + CTA hierarchy)

1. **Visual system**
   - Deep navy + restrained gold + cream/white space.
   - **One display font (Fraunces) + one body font (DM Sans)** — no three competing typefaces.
   - Calmer spacing, clearer hierarchy, sticky nav, stronger hover states.

2. **CTA hierarchy**
   - Primary everywhere: **Submit a Deal → /submit-deal**
   - Secondary: **Book a Call → Calendly**
   - SubTo / Owners Club treated as **proof/community**, not equal homepage CTAs.
   - SubTo affiliate appears once in footer + About (and Resources).

3. **Navigation**
   - Slim nav: About · Buy Box · Peak & Pine · Submit a Deal · Contact
   - Newsletter + Resources **kept as pages**, linked from **footer** (and Contact), not primary nav.

4. **Homepage flow**
   - Hero (Tony + one sentence + Submit / Book) → proof strip → three buy-box teasers → Peak & Pine teaser → short integrity/about → testimonials → final Submit CTA.

5. **Buy box alignment**
   - Fixed live contradiction (~60% on submit vs 70% on buy-box page).
   - Both pages now say **~60–70% of ARV minus rehab** for Fix & Flips.
   - Multifamily clearly distinguishes **20–200 unit B/C primary markets** vs **also 3+ unit value-add in Windham CT / Worcester MA**.
   - STR markets include live buy-box markets **plus** Florida Panhandle / Indian Rocks / Okaloosa as on the live submit form.

6. **Forms**
   - Multi-step submit UI retained (buy box → contact → property → seller situation).
   - No backend yet — success state + TODO for Cloudflare Forms / Formspree.

7. **Technical**
   - Fresh Git-ready source (previous Pages project had no Git).
   - `public/_redirects` SPA fallback for Cloudflare Pages.
   - Images downloaded into `public/images/` for a self-contained build.
   - Soft 404 page.

## Intentionally not done

- No deploy from this rebuild.
- No Formspree/Cloudflare Forms wiring (placeholder only).
- Peak & Pine YouTube channel was not present as an href in the live JS bundle; booking CTAs use peakandpineretreat.com + Airbnb + Vrbo.
