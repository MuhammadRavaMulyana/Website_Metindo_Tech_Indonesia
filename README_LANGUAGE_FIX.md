# METINDO - Language Fix

This version updates the website language system for English, Indonesian, and Japanese.

## Fixed
- Product descriptions now switch between English, Indonesian, and Japanese.
- All 38 products include `descriptionId` and `descriptionJa`.
- Product category names/descriptions switch with the selected language.
- Product detail page text switches with the selected language.
- Products page title and CTA text switch with the selected language.
- Contact page heading and content use the selected language.
- About page title and content use the selected language.
- Product slideshow category descriptions support English, Indonesian, and Japanese.
- Footer navigation and product category labels support the selected language.
- Header language selector displays one language code only.
- Indonesian special-tools label is `Alat Khusus`.

## Run

```bash
npm install
npm run dev
```

Then open the local Next.js URL shown in the terminal.

If the browser still shows old text, stop the dev server, delete `.next`, run `npm install` again if necessary, then run `npm run dev`.
