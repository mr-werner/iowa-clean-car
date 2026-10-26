# Iowa Clean Car (Brelsford Properties): Blueprint WebStudio Concept

Independent, non-official redesign concept for http://www.iowacleancar.com (Iowa Clean Car, four car washes west of Des Moines owned and operated by Brelsford Properties, Waukee, Iowa).
Preview: https://icc.blueprintwebstudio.com (noindex; the demo code lives in the Neon `demos` table).

Custom build. Content and layout are in `src/App.jsx`, styles in `src/styles.css`, and the Blueprint WebStudio concept widget in `src/concept.jsx`.

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

Vercel project `iowa-clean-car` (framework: Vite, team mrwerner-s-projects). Pushes to `main` deploy automatically.
Domain `icc.blueprintwebstudio.com` is a CNAME at Porkbun pointing to the target Vercel shows for this project.

Environment variables (all optional): `VITE_CONCEPT_END_DATE` (countdown end, defaults to 2026-11-30), `RESEND_API_KEY` / `CONTACT_TO_EMAIL` / `CONTACT_FROM_EMAIL` for the comment form (`api/contact.js`; without them the form answers in demo mode). The "I'm Interested" form posts to `api/demo-interest.js`, which proxies to the main studio site.

**VIP Wash Card payments are not wired up.** The current site sells and recharges cards with two PayPal hosted buttons (new activation and recharge, with a package dropdown, a "site location" field and an 8-digit account number for recharges). In this concept the "Buy this card" / "Recharge my card" button only shows a demo message pointing to the office phone and colby@iowacleancar.com. Before launch, connect the form to the real payment flow (their existing PayPal buttons, or Stripe/Square checkout) and pass the package, home location and account number through.

## Design

- Their Brelsford Properties logo (the glossy red bar and black wordmark) in a white header, and on a white plate in the dark footer. Favicon is a white water drop on their red.
- Colors start from the site's red (#D21B1B, its page background and form panels) with a deeper red, an ink black, and a rinse blue plus a savings yellow taken from their own VIP pricing table graphic.
- Bricolage Grotesque (heavy, tight headings) with Figtree for body text.
- Car wash motif: floating soap bubbles in the hero and VIP section, a wavy suds edge under the hero, red-and-white bay-door striping under each location photo, and bay counts drawn as little roll-up doors (blue for touch-free automatics, red for self-serve bays).
- Section order: top bar with the VIP offer and phone → header → red hero ("Four touch-free car washes, one VIP card.") with a location board (Grimes bays photo, 4 locations / 11 automatics / 9 self-serve bays, quick links) → four location cards with address, bays and directions → VIP Wash Card (card graphic, perks, interactive price table, new/recharge order form) → business fleet accounts band → contact (office, both emails, P.O. box, comment form, Google reviews link) → footer.

## What changed from the current site

- The current site is a fixed 780px table layout with no mobile viewport tag: on a phone it renders 782px wide and has to be pinch-zoomed. The concept is fully responsive (checked at 1280px and 390px with no sideways scrolling).
- Locations were 160×120 thumbnails with the bay counts hidden on a separate Locations page; the concept shows every location with its address, automatic and self-serve bay counts and a one-tap directions link on the home page.
- The VIP pricing was an image (pricingtable.jpg) on one page and two raw PayPal dropdowns on another; the concept merges them into one readable, clickable table (card value, price, savings, discount tier) that feeds the order form, with the program's benefits and business accounts explained alongside.
- The Waukee address on the current site uses ZIP 50613 (a Cedar Falls ZIP); the concept uses Waukee's 50263 (the same ZIP as their own P.O. box). See below.
- Phone number is clickable everywhere (top bar, header, hero, business band, contact, footer). The "Flight Level Technology" vendor badge and dead Flash-era header are gone.

## Owner should confirm

- Waukee Auto Wash address: the site says "440 Hickman Ave, Waukee, IA 50613". 50613 is not a Waukee ZIP, so the concept shows 50263. Confirm the street address and ZIP.
- Hours: the site lists no hours for any location. Nothing about hours is shown on the page; add them (or "open 24/7") if that is accurate.
- Bay counts (from the Locations page): Waukee 2 touch-free automatics + 6 self-serve bays with credit cards; Grimes 3 + 3; Adel 2 automatics; 156th 4 automatics. Confirm they are current and whether Adel and 156th have any self-serve bays.
- VIP packages and prices ($25/$23 up to $350/$287, savings tiers 8%, 10%, 15%, 18%) are copied from the current site; confirm they are still current.
- Which email should receive website comments (comments@iowacleancar.com) and which handles VIP accounts (colby@iowacleancar.com, used here for account questions and fleet accounts).
- Whether new cards are still mailed after funding the account ("we will send you your VIP Wash Card once you fund the account").
- Reviews: the current site has no testimonials, so the concept only links to a Google search for the business and shows no rating or quotes.

## Photos

All photos and the logo are their own from iowacleancar.com. The four location photos are only 160×120 (213×120 for Adel) on the current site and the hero strip is the 640×130 Grimes header; they were upscaled 2× for this concept and look soft. New, full-resolution photos of each location should replace them before launch. No stock photos are used.
