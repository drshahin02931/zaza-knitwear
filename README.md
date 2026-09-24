# ⚡ ZAZA X | Cyberpunk Handmade Moto & Streetwear Knitwear Store

> High-octane handmade streetwear & motorcycle knitwear inspired by the Etsy shop **BUBOIKNIT**. Featuring custom cat-ear helmet covers, tactical balaclavas, chunky ear beanies, and oversized knit cardigans in the signature **ZAZA X** brand aesthetic: **Matte Jet Black (`#0A0A0C`)**, **Cyber Neon Lime (`#84FF00`)**, and **Crisp White (`#FFFFFF`)**.

---

## 🚀 Key Features

### 🛒 Buyer Experience (`index.html`)
- **Cyberpunk Dark Aesthetic:** Handcrafted UI built with vanilla CSS tokens, glassmorphic cards, glowing borders, and modern typography (`Outfit` & `Plus Jakarta Sans`).
- **Ultra-Lightweight & Blazing Fast:** All product images are compressed under 45KB each, ensuring near-instant loading times on mobile devices and 4G connections.
- **⚡ Flash Deal & Countdown Timer:** Live ticking countdown clock for special limited drops, complete with deal pricing and 1-click cart addition.
- **Interactive Product Catalog:**
  - Real-time search by keyword (e.g., "cat", "helmet", "balaclava").
  - Category filter pills (Helmet Covers, Balaclavas, Beanies, Cardigans).
  - Price and rating sorting.
  - Interactive colorway swatches that swap preview images instantly.
- **Slide-out Cart Drawer:** Real-time quantity adjustments, free shipping progress bar, and promo code system (`ZAZA10` for 10% off).
- **Cash on Delivery (COD) Checkout:** Dedicated Egyptian governorate selector with automated courier fee calculation and instant WhatsApp order confirmation receipts.
- **Bespoke Custom Order Modal:** Direct inquiry generator for riders requesting custom color schemes and tailored helmet sizing.

### 🛡️ Dedicated Admin Portal (`/admin.html`)
- **Separated & Protected:** Accessible strictly via `/admin.html` with a master PIN lock screen (`1234`).
- **Live Business KPIs:** Real-time metrics for total orders, pending COD amounts, active handcrafting queue, and delivered net revenue.
- **Order Fulfillment Pipeline:** Live status switcher (`New Order` ➔ `In Crafting` ➔ `Out with Courier` ➔ `Delivered`) and 1-click WhatsApp customer direct chat links.
- **Flash Deal Manager:** Configure deal title, subtitle, discounted pricing, expiration date/time, and toggle active/inactive status.
- **Client-Side Image Auto-Compression:** Upload new gear photos with automatic canvas resizing to ~35KB before saving.
- **Dynamic Product Publisher:** Publish new knitwear pieces directly into the storefront catalog.

---

## 🎨 Brand Identity & Color Palette

| Token | Color Code | Role |
| :--- | :--- | :--- |
| **Accent Neon** | `#84FF00` | Electric cyber lime glow, badges, CTA buttons |
| **Jet Black** | `#0A0A0C` | Deep matte background |
| **Card Surface** | `#141418` | Elevating product cards & modal surfaces |
| **Primary Text** | `#FFFFFF` | Crisp readable headlines & body |
| **Muted Text** | `#8E8E93` | Secondary labels & specs |

---

## 📁 Project Structure

```
knitwear-store/
├── .gitignore          # Git exclusion rules
├── README.md           # Documentation & project overview
├── index.html          # Main customer storefront (LTR, English)
├── admin.html          # Standalone Admin Portal & fulfillment dashboard
├── style.css           # Custom ZAZA X Cyberpunk design system & responsive layout
├── app.js              # Storefront logic, cart state, orders & timer countdown
└── images/             # Ultra-compressed product photos & logo (< 50KB each)
    ├── zaza_logo.jpg
    ├── neon_cat_helmet.jpg
    ├── neon_balaclava.jpg
    ├── helmet_cover.jpg
    ├── balaclava.jpg
    ├── beanie_ears.jpg
    └── cardigan.jpg
```

---

## 💻 Getting Started Locally

1. **Clone the repository:**
   ```bash
   git clone <YOUR_REPO_URL>
   cd knitwear-store
   ```

2. **Serve the project:**
   You can open `index.html` directly in any web browser, or use a local development server:
   ```bash
   # Using npx serve:
   npx serve -p 4173 .

   # Or using Python:
   python -m http.server 4173
   ```

3. **Access points:**
   - **Storefront:** `http://localhost:4173/`
   - **Admin Portal:** `http://localhost:4173/admin.html` (PIN: `1234`)

---

## 📦 Deployment

This project is built with 100% vanilla HTML5, CSS3, and modern JavaScript. It has zero build steps and zero dependencies.

- **Vercel:** Run `npx vercel` in the project root.
- **Netlify:** Drag and drop the folder into [Netlify Drop](https://app.netlify.com/drop).
- **GitHub Pages:** Enable GitHub Pages in your repository settings under branch `main` / root.

---

## 📄 License
MIT © 2026 ZAZA X Streetwear. All rights reserved.
