# PAWROAM — single-product demo store

An English-language, responsive concept storefront for a Hard Bottom Dog Car Seat Extender. Plain HTML, CSS and JavaScript; no build, packages, external fonts, trackers or image downloads. PAWROAM is a working name. No trademark registration is claimed.

## Demo status

**Demo Store — Not Accepting Orders.** No checkout, payments, cart, email collection or backend. Estimated price: **$89.90 USD**. Availability, specifications, capacity, materials, cleaning guidance, shipping destinations and timelines remain unverified. No reviews, crash-protection claims or certifications are included.

Supplier candidate only: **Taizhou Aodelai Industry And Trade Co., Ltd., Alibaba model HP89**. Cooperation, inventory and delivery are not confirmed. All visuals are original inline SVG concept placeholders, not supplier photos or representations of a verified sample. Replace with permission-cleared photography after sample approval.

## Files

- `index.html`: all eight sections, accessible navigation, native FAQ disclosures, original SVG illustrations and disabled waitlist form.
- `styles.css`: warm neutral visual system, responsive layouts, focus states and reduced-motion support.
- `script.js`: mobile menu, illustration detail views, progressive reveal animations and an explicit disconnected-form guard.
- `README.md`: preview, GitHub and integration guidance.

## Preview

Open `index.html` in any modern browser. No installation or internet connection is required. Alternatively, from the repository directory:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000` on the same computer. For a cloud workspace, use its supported port preview/forwarding; a local localhost address does not point to the cloud server. Stop with Ctrl+C.

## Save on GitHub without publishing

Work is isolated on `feat/pawroam-demo`, based on GitHub main commit `a338b84c88fd0ed85ae48b559ee2356c132324fb` (verified via GitHub connector). Main was not edited. In a normal local clone with GitHub access:

```bash
git switch feat/pawroam-demo
git status
git add index.html styles.css script.js README.md
git commit -m "Create PAWROAM premium demo storefront"
git push -u origin feat/pawroam-demo
```

If the changes have already been committed, skip `git add` and `git commit`. You can create a **draft** pull request from this branch into main for review. Do not merge or enable hosting until you decide to launch. No deployment configuration or publication is added by this change. Review existing GitHub Actions/hosting settings before pushing if your account has separate branch-triggered automation.

## Connect a real waitlist later

The email field and submit button are disabled intentionally, with a visible disconnected status. No addresses are stored, logged or transmitted. Choose Shopify customer marketing signup or a real email platform/backend; add a privacy policy and clear consent language appropriate to your audience. Then enable the fields and replace the disconnected submit handler with the actual integration. Validate on the server, use appropriate abuse protection, and show success only after a confirmed successful response. Provide truthful error states and unsubscribe support. Never put private API keys in browser JavaScript.

## Prepare for Shopify

1. Verify supplier agreement, stock, sample quality, exact dimensions, fit, load capacity, care and supported shipping markets. Approve image rights and final pricing. Check the brand name/trademark; use no registration mark without proof.
2. Create an unpublished Shopify theme and draft product. Port the eight HTML sections to Online Store 2.0 Liquid sections, with editable theme settings. Move CSS/JS and approved media into theme assets; replace fixed copy/specifications with product data and metafields.
3. Use Shopify's product/variant data and native cart/checkout only after sales are authorized. Keep this demo in pre-launch mode until then. Avoid embedding Admin API tokens in frontend code.
4. Connect Shopify's real customer/newsletter form or an approved email integration, with consent, privacy policy and verified submission feedback.
5. Configure confirmed markets, shipping rates, taxes, returns, contact details and payment methods. Test using Shopify's test mode, review mobile accessibility and performance, and publish manually only when approved.

## Verification

Chromium checks passed at viewport widths 375, 390, 720, 768, 1024 and 1440 px: no horizontal overflow or JavaScript errors; menu, Escape, navigation-link close, desktop resize, illustration views, FAQ and disabled form passed. JavaScript-disabled navigation and reduced-motion behavior passed; no external requests occurred. Desktop and mobile screenshots were visually reviewed. These are browser viewport tests, not physical-device tests. The browser received the same local HTML, CSS and JavaScript through Playwright because this environment blocks file URLs. Recommended checks: desktop and mobile layout, navigation via keyboard, Escape and resize behavior, illustration views, FAQ, no horizontal overflow, reduced motion, and JavaScript-disabled content access. The disabled form must remain incapable of submitting data until a real integration is implemented.
