# PAWROAM — premium editorial product demo

A static, English-language concept storefront for a **Hard Bottom Dog Car Seat Extender**. The redesign uses ivory `#F7F5F0`, warm beige `#DED6C9`, charcoal `#242424`, soft white and restrained olive accents. Large headings, generous spacing and original concept imagery create a quiet, editorial pet travel brand experience. There are no frameworks, packages, remote fonts, trackers or build steps.

## The experience

- **Hero:** “Travel Together. Better.” / “A more comfortable space for every journey.” Large dog-in-car concept image, “Explore the Product” and “Join the Waitlist” links.
- **The Problem:** the footwell gap, everyday mess and awkward setup of soft covers.
- **Meet PAWROAM:** the product concept, interactive detail gallery, proposed charcoal finish and **$89.90 USD — Estimated price**.
- **Product Details:** structure, straps and fabric coverage, with verification status stated clearly.
- **How It Works:** three illustrative setup steps, with a pet-restraint clarification.
- **Lifestyle:** a quiet travel scene and brand story.
- **FAQ:** price, fit, capacity, safety, care, shipping and supplier questions.
- **Join the Waitlist:** a disconnected waitlist preview with disabled fields and a visible status.

## Honest demo status

**Demo Store — Not Accepting Orders** is visible above the navigation and in the footer. No payment, cart, checkout, reservation, email storage or backend is implemented. The CTA links navigate to the product or waitlist section; the email input and submit button are intentionally disabled. The submit handler also blocks submission and never claims success.

Price, dimensions, weight capacity, materials, water resistance, fit, stock and delivery remain unconfirmed. We do not claim universal fit, “fits most SUVs,” crash protection or certifications. A seat extender is not a crash restraint. Use an appropriate, independently verified pet restraint for travel.

Supplier candidate only: **Taizhou Aodelai Industry And Trade Co., Ltd., Alibaba model HP89**. Partnership, inventory and shipping have not been verified. PAWROAM is a working name; no trademark registration is claimed.

## Files and visuals

- `index.html`: English content, navigation, native FAQ, concept illustrations and disabled waitlist.
- `styles.css`: editorial layouts, responsive spacing, keyboard focus and reduced-motion support.
- `script.js`: accessible mobile menu, gallery views and gentle progressive reveals.
- `assets/pawroam-car-concept.webp`: original AI-generated dog-in-car hero concept.
- `assets/pawroam-product-concept.webp`: original AI-generated studio product concept; gallery details use labelled construction studies.
- `assets/pawroam-lifestyle-concept.webp`: original AI-generated coastal travel scene.
- `README.md`: concept, preview, verification and future integration instructions.

No verified product photography is available. The photo-style images are original AI-generated concept placeholders created for this demo; no supplier imagery was downloaded. No third-party product or customer photographs are used. The photographic hero, lifestyle scene and gallery have visible AI-concept captions. They do not depict a confirmed HP89 sample, customer or tested product. Inline SVG construction studies are also original placeholders. Replace all concept visuals with accurate, approved photography after sample validation and image rights review. Keep the three local asset files when copying the site.

## Fast, self-contained loading

All three image assets are locally encoded WebP files at their original 1536×1024 resolution. The hero uses high fetch priority; below-the-fold imagery loads lazily and decodes asynchronously. Explicit image dimensions reserve layout space. There are no external image/CDN/font requests, packages or tracking scripts. The three images total 582,586 bytes (about 0.58 MB), down from 7.85 MB of PNG originals. Compression changes the file encoding without cropping or changing the concept content. Modern Safari supports local WebP images.

## Open on a Mac without a server

Open [feat/pawroam-demo on GitHub](https://github.com/Elys2017/my-first-website/tree/feat/pawroam-demo), then download its ZIP (**Code → Download ZIP**), extract it, and open **index.html with Safari**. Keep `styles.css`, `script.js` and the `assets` folder next to `index.html`. Relative file paths, classic JavaScript and inline SVG allow the page to run without a build, network or server.

`localhost:8000` points to the computer running the browser. A server in a cloud workspace will not appear at your Mac's localhost. For optional local development, run the following **on your Mac**, inside the extracted project folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`. Stop with Ctrl+C. Cloud workspaces require their supported port forwarding/preview.

## Branch and GitHub

Before editing, the latest remote **feat/pawroam-demo** was fetched and verified at commit `37953869ae94ba761c9bb8812b014d2118440fab`. This redesign is committed on that same branch. Main is not changed or merged, and no site hosting or deployment is enabled.

To save future edits from the project directory:

```bash
git switch feat/pawroam-demo
git add index.html styles.css script.js README.md assets/
git commit -m "Refine PAWROAM editorial product demo"
git push -u origin feat/pawroam-demo
```

Skip the add/commit commands if the changes are already committed. A draft pull request can be used for review, without merging. Saving source on GitHub does not itself enable hosting in this repository; no deployment configuration is added here.

## Connect a real waitlist or Shopify later

1. Verify the supplier relationship, sample, measurements, capacity, cleaning instructions and supported delivery markets. Approve final product imagery, pricing, brand name and policies.
2. Create an **unpublished** Shopify theme and draft product. Port the page into editable Online Store 2.0 Liquid sections; use theme assets, product fields and metafields rather than fixed demo data.
3. Connect a real Shopify customer/newsletter form or approved email backend with clear consent, a privacy policy and unsubscribe support. Enable the fields only after replacing the disconnected handler. Show success only after a confirmed response; include meaningful errors. Never put private API keys in frontend code.
4. Add Shopify's native cart and checkout only when sales are authorized. Configure verified shipping markets, taxes, returns and payments, then test in Shopify test mode.
5. Review accessibility, mobile layouts and performance before a separately approved manual publication.

## Verification

The source uses local images/CSS/classic JavaScript, has no API or server dependencies, and keeps core content and FAQ accessible without JavaScript. Browser checks use the actual local source in Chromium through Playwright; images are embedded into the internal test page because this managed browser blocks file URLs. Safari/macOS and physical phones are not available in this environment.

This feat/pawroam-demo version passed Chromium checks at 320, 360, 390, 720, 768, 1024, 1440 and 1920 px: no horizontal overflow, JavaScript errors, external requests, broken images, duplicate IDs or broken internal links. Exact eight-section order, hero text, both CTAs, estimated price and demo banner passed. Mobile menu open/close, Escape focus, resize, WebP images, photograph/construction-study gallery visibility, captions, FAQ and disabled form checks passed. JavaScript-disabled layouts at 390/1440 px and reduced motion at 390 px passed. Desktop/mobile screenshots were visually reviewed. These are browser viewport checks, not tests on physical phones or Safari. No live subscription or checkout is simulated.
