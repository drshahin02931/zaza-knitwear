/* ==========================================================================
   ZAZA X - APPLICATION LOGIC & PRODUCT DATA (NEON LIME / JET BLACK)
   ========================================================================== */

// --- 1. PRODUCT DATABASE ---
const BASE_PRODUCTS = [
  {
    id: 'zaza-01',
    title: 'ZAZA Signature Cat-Ears Knitted Helmet Cover (Cyber Lime)',
    category: 'helmets',
    categoryName: 'Helmet Covers',
    price: 750,
    oldPrice: 890,
    tag: 'ZAZA ICON 🔥',
    tagType: 'tag-hot',
    rating: 5.0,
    reviewsCount: 76,
    image: 'images/neon_cat_helmet.jpg',
    description: 'The flagship ZAZA piece. Handcrafted chunky knit with high-visibility electric neon lime wool and aerodynamic sharp cat-ears. Fitted with an industrial bottom lock cord engineered to withstand highway speeds on full-face and modular helmets.',
    colors: [
      { name: 'Cyber Lime (Official Logo Colorway)', hex: '#84FF00', img: 'images/neon_cat_helmet.jpg' },
      { name: 'Jet Black with Neon Lime Outlines', hex: '#141416', img: 'images/neon_cat_helmet.jpg' },
      { name: 'Pure Contrast White with Lime Ears', hex: '#FFFFFF', img: 'images/neon_cat_helmet.jpg' }
    ],
    sizes: ['Universal Stretch (Fits all Full-Face, Modular & MX Helmets)']
  },
  {
    id: 'zaza-02',
    title: 'Tactical Cyber Balaclava Ski Hood (Jet Black & Electric Lime)',
    category: 'balaclavas',
    categoryName: 'Balaclavas',
    price: 520,
    oldPrice: 620,
    tag: 'DROP 01 ✨',
    tagType: 'tag-handmade',
    rating: 4.96,
    reviewsCount: 84,
    image: 'images/neon_balaclava.jpg',
    description: 'Cyberpunk inspired knitted tactical ski mask balaclava hood. Knit from premium heavy-gauge breathable wool and cotton blend with glowing neon green runes and ribbed chin section. Windproof and ultra-comfortable.',
    colors: [
      { name: 'Onyx Black & Neon Lime Runes', hex: '#84FF00', img: 'images/neon_balaclava.jpg' },
      { name: 'Stealth All-Black with Lime Hem', hex: '#16161A', img: 'images/neon_balaclava.jpg' }
    ],
    sizes: ['Universal Rider Fit (Free Size)', 'Fitted S/M', 'Oversized L/XL']
  },
  {
    id: 'zaza-03',
    title: 'ZAZA Dragon Devil Horns Moto Helmet Cover',
    category: 'helmets',
    categoryName: 'Helmet Covers',
    price: 780,
    oldPrice: 920,
    tag: 'LIMITED DROP ⚡',
    tagType: 'tag-custom',
    rating: 4.92,
    reviewsCount: 42,
    image: 'images/neon_cat_helmet.jpg',
    description: 'Aggressive street silhouette featuring hand-stuffed and stitched curved horns in electric neon lime. Tested on highway tracks to ensure maximum aerodynamics and road visibility.',
    colors: [
      { name: 'Electric Lime & Carbon Black', hex: '#84FF00', img: 'images/neon_cat_helmet.jpg' },
      { name: 'Matte Black with Neon Horns', hex: '#1C1C22', img: 'images/neon_cat_helmet.jpg' }
    ],
    sizes: ['Universal Stretch (Fits all Full-Face, Modular & MX Helmets)']
  },
  {
    id: 'zaza-04',
    title: 'Chunky Wool Beanie with Teddy Bear Ears',
    category: 'beanies',
    categoryName: 'Beanies',
    price: 380,
    oldPrice: 450,
    tag: 'TOP RATED ⭐',
    tagType: 'tag-hot',
    rating: 4.95,
    reviewsCount: 63,
    image: 'images/beanie_ears.jpg',
    description: 'Chunky cable knit winter beanie with rounded bear ears. Double-ply yarn construction keeps your head warm during chilly evening rides or winter ski trips.',
    colors: [
      { name: 'Cinnamon Melange', hex: '#9E5B37', img: 'images/beanie_ears.jpg' },
      { name: 'Jet Black with Neon Lime Stitching', hex: '#111116', img: 'images/beanie_ears.jpg' },
      { name: 'Warm Cream White', hex: '#F0ECE6', img: 'images/beanie_ears.jpg' }
    ],
    sizes: ['Standard Stretch (Head 52-58 cm)']
  },
  {
    id: 'zaza-05',
    title: 'Oversized Streetwear Chunky Knit Cardigan',
    category: 'cardigans',
    categoryName: 'Streetwear Cardigans',
    price: 1190,
    oldPrice: 1450,
    tag: 'HANDMADE 100% 🎨',
    tagType: 'tag-custom',
    rating: 4.89,
    reviewsCount: 35,
    image: 'images/cardigan.jpg',
    description: 'Heavyweight oversized streetwear cardigan jacket with wooden statement buttons and dual front utility pockets. Relaxed slouchy fit perfect for layering over hoodies and riding jackets.',
    colors: [
      { name: 'Golden Mustard & Cream Patchwork', hex: '#CFA145', img: 'images/cardigan.jpg' },
      { name: 'Jet Black & Neon Lime Accents', hex: '#181820', img: 'images/cardigan.jpg' }
    ],
    sizes: ['S / M (Oversized Streetwear Fit)', 'L / XL (Comfort Fit)', 'Custom Bespoke Fit']
  },
  {
    id: 'zaza-06',
    title: 'Pastel Striped Bunny Ears Helmet Cover',
    category: 'helmets',
    categoryName: 'Helmet Covers',
    price: 680,
    oldPrice: 820,
    tag: 'ORIGINAL CLASSIC 🐰',
    tagType: 'tag-handmade',
    rating: 4.91,
    reviewsCount: 51,
    image: 'images/helmet_cover.jpg',
    description: 'The cheerful classic bunny ears knit cover in soft pastel stripes. Stretchy, protective, and guaranteed to turn heads at every traffic light.',
    colors: [
      { name: 'Pastel Striped Mix', hex: '#D78B75', img: 'images/helmet_cover.jpg' },
      { name: 'Black & Lime Contrast', hex: '#84FF00', img: 'images/helmet_cover.jpg' }
    ],
    sizes: ['Universal Stretch (Fits all Full-Face & Half Helmets)']
  }
];

// Helper to get all products including admin added ones
function getAllProducts() {
  const custom = JSON.parse(localStorage.getItem('zaza_custom_products')) || [];
  return [...custom, ...BASE_PRODUCTS];
}

// --- 2. SAMPLE ORDERS FOR ADMIN DASHBOARD ---
const INITIAL_SAMPLE_ORDERS = [
  {
    id: 'ZAZA-8412',
    date: '2026-09-24',
    customerName: 'Zeyad Mostafa',
    phone: '01098234120',
    governorate: 'Cairo',
    city: 'Zamalek - 26th July St',
    address: 'Bldg 28, Apt 4 (Yamaha R6 Rider)',
    notes: 'Please call before arrival',
    items: [
      { title: 'ZAZA Signature Cat-Ears Helmet Cover (Cyber Lime)', color: 'Cyber Lime', size: 'Universal Stretch', qty: 1, price: 750 }
    ],
    subtotal: 750,
    discount: 75,
    shipping: 45,
    total: 720,
    status: 'crafting',
    statusLabel: 'In Crafting & Prep'
  },
  {
    id: 'ZAZA-8395',
    date: '2026-09-23',
    customerName: 'Maya El-Gazzar',
    phone: '01123456789',
    governorate: 'Giza',
    city: 'New Zayed - Beverly Hills',
    address: 'Gate 4, Villa 11',
    notes: 'Cash upon delivery inspection',
    items: [
      { title: 'Tactical Cyber Balaclava Hood', color: 'Onyx Black & Neon Lime', size: 'Free Size', qty: 1, price: 520 },
      { title: 'Chunky Wool Beanie Bear Ears', color: 'Cinnamon Melange', size: 'Standard', qty: 1, price: 380 }
    ],
    subtotal: 900,
    discount: 0,
    shipping: 0,
    total: 900,
    status: 'shipping',
    statusLabel: 'Out with Courier'
  },
  {
    id: 'ZAZA-8380',
    date: '2026-09-22',
    customerName: 'Omar Bahaa',
    phone: '01287654321',
    governorate: 'Alexandria',
    city: 'Roushdy - Abu Qir St',
    address: 'Tower 4, 8th Floor (Ninja 400)',
    notes: 'Delivered and collected successfully',
    items: [
      { title: 'Oversized Streetwear Cardigan', color: 'Golden Mustard & Cream', size: 'S / M', qty: 1, price: 1190 }
    ],
    subtotal: 1190,
    discount: 0,
    shipping: 0,
    total: 1190,
    status: 'delivered',
    statusLabel: 'Delivered & Collected'
  }
];

// Initialize orders in storage if missing
if (!localStorage.getItem('zaza_orders')) {
  localStorage.setItem('zaza_orders', JSON.stringify(INITIAL_SAMPLE_ORDERS));
}

// --- 3. STATE MANAGEMENT ---
let cart = JSON.parse(localStorage.getItem('zaza_cart')) || [];
let currentCategory = 'all';
let currentSearch = '';
let currentSort = 'featured';
let appliedPromo = null;
let activeModalProduct = null;

// --- 4. INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartUI();
  setupEventListeners();
  initSpecialOfferCountdown();
});

// --- 5. RENDER PRODUCTS GRID ---
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  const productsList = getAllProducts();

  // Filter
  let filtered = productsList.filter(p => {
    const matchCat = currentCategory === 'all' || p.category === currentCategory;
    const matchSearch = p.title.toLowerCase().includes(currentSearch.toLowerCase()) || 
                        p.description.toLowerCase().includes(currentSearch.toLowerCase());
    return matchCat && matchSearch;
  });

  // Sort
  if (currentSort === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentSort === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
        <i class="fa-solid fa-magnifying-glass" style="font-size: 3rem; margin-bottom: 14px; opacity: 0.5; color: var(--accent-neon);"></i>
        <h3 style="font-size: 1.25rem; color: #FFFFFF; margin-bottom: 8px;">No matching ZAZA gear found</h3>
        <p>Try searching for "cat", "helmet", "balaclava", or "cardigan".</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(product => {
    const swatchesHtml = product.colors.map(c => `
      <span class="swatch-dot" style="background-color: ${c.hex};" title="${c.name}" onclick="event.stopPropagation(); previewProductColor('${product.id}', '${c.img}')"></span>
    `).join('');

    return `
      <article class="product-card" id="card-${product.id}">
        <div class="product-image-wrap" onclick="openProductModal('${product.id}')">
          <span class="badge-tag ${product.tagType}">${product.tag}</span>
          <img src="${product.image}" alt="${product.title}" id="img-${product.id}" loading="lazy">
          <button class="quick-view-btn" onclick="event.stopPropagation(); openProductModal('${product.id}')">
            <i class="fa-solid fa-bolt"></i> Quick Specs & Fit
          </button>
        </div>

        <div class="product-info">
          <span class="product-category-text">${product.categoryName}</span>
          <h3 class="product-title" onclick="openProductModal('${product.id}')" style="cursor:pointer;">${product.title}</h3>
          
          <div class="rating-stars">
            ${'<i class="fa-solid fa-star"></i>'.repeat(Math.floor(product.rating))}
            <span class="rating-count">(${product.reviewsCount})</span>
          </div>

          <div class="card-swatches">
            ${swatchesHtml}
          </div>

          <div class="product-footer">
            <div class="price-wrap">
              <span class="current-price">${product.price} EGP</span>
              <span class="old-price">${product.oldPrice} EGP</span>
            </div>
            
            <button class="add-cart-btn" onclick="quickAddToCart('${product.id}')" title="Quick Add to Gear Cart" aria-label="Add to cart">
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// Swatch preview helper
window.previewProductColor = function(productId, imgSrc) {
  const imgEl = document.getElementById(`img-${productId}`);
  if (imgEl) {
    imgEl.style.opacity = '0.5';
    setTimeout(() => {
      imgEl.src = imgSrc;
      imgEl.style.opacity = '1';
    }, 150);
  }
};

// Global Category filter helper
window.filterCategory = function(catKey) {
  currentCategory = catKey;
  document.querySelectorAll('#categoryPills .pill-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === catKey);
  });
  renderProducts();
  const catalogEl = document.getElementById('catalog');
  if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
};

// --- 6. EVENT LISTENERS ---
function setupEventListeners() {
  // Category Pills
  const pills = document.querySelectorAll('#categoryPills .pill-btn');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategory = pill.dataset.category;
      renderProducts();
    });
  });

  // Search input live filtering
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.trim();
      renderProducts();
    });
  }

  // Sort dropdown
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderProducts();
    });
  }

  // Cart Drawer Open/Close
  const openCartBtn = document.getElementById('openCartBtn');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const cartOverlay = document.getElementById('cartOverlay');

  if (openCartBtn) openCartBtn.addEventListener('click', openCartDrawer);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCartDrawer);
  if (cartOverlay) {
    cartOverlay.addEventListener('click', (e) => {
      if (e.target === cartOverlay) closeCartDrawer();
    });
  }

  // Quick View Modal Close
  const closeQvBtn = document.getElementById('closeQvBtn');
  const quickViewModal = document.getElementById('quickViewModal');
  if (closeQvBtn) closeQvBtn.addEventListener('click', () => quickViewModal.classList.remove('active'));
  if (quickViewModal) {
    quickViewModal.addEventListener('click', (e) => {
      if (e.target === quickViewModal) quickViewModal.classList.remove('active');
    });
  }

  // Quick View Add to Cart & Buy Now
  const qvAddToCartBtn = document.getElementById('qvAddToCartBtn');
  const qvDirectBuyBtn = document.getElementById('qvDirectBuyBtn');
  if (qvAddToCartBtn) {
    qvAddToCartBtn.addEventListener('click', () => {
      if (!activeModalProduct) return;
      const selectedColor = document.querySelector('#qvColors .color-option-btn.selected')?.dataset.color || activeModalProduct.colors[0].name;
      const selectedSize = document.querySelector('#qvSizes .size-btn.selected')?.dataset.size || activeModalProduct.sizes[0];
      const customNote = document.getElementById('qvCustomNote')?.value.trim() || '';

      addToCart({
        id: activeModalProduct.id,
        title: activeModalProduct.title,
        price: activeModalProduct.price,
        image: activeModalProduct.image,
        color: selectedColor,
        size: selectedSize,
        note: customNote,
        qty: 1
      });

      quickViewModal.classList.remove('active');
      openCartDrawer();
      showToast('ZAZA gear added to cart! ⚡');
    });
  }

  if (qvDirectBuyBtn) {
    qvDirectBuyBtn.addEventListener('click', () => {
      if (!activeModalProduct) return;
      const selectedColor = document.querySelector('#qvColors .color-option-btn.selected')?.dataset.color || activeModalProduct.colors[0].name;
      const selectedSize = document.querySelector('#qvSizes .size-btn.selected')?.dataset.size || activeModalProduct.sizes[0];
      const customNote = document.getElementById('qvCustomNote')?.value.trim() || '';

      addToCart({
        id: activeModalProduct.id,
        title: activeModalProduct.title,
        price: activeModalProduct.price,
        image: activeModalProduct.image,
        color: selectedColor,
        size: selectedSize,
        note: customNote,
        qty: 1
      });

      quickViewModal.classList.remove('active');
      openCheckoutModal();
    });
  }

  // Promo Code Button
  const applyPromoBtn = document.getElementById('applyPromoBtn');
  if (applyPromoBtn) {
    applyPromoBtn.addEventListener('click', handleApplyPromo);
  }

  // Checkout Modal Open/Close
  const startCheckoutBtn = document.getElementById('startCheckoutBtn');
  const closeCheckoutBtn = document.getElementById('closeCheckoutBtn');
  const checkoutModal = document.getElementById('checkoutModal');

  if (startCheckoutBtn) {
    startCheckoutBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        showToast('Your gear cart is empty!');
        return;
      }
      closeCartDrawer();
      openCheckoutModal();
    });
  }

  if (closeCheckoutBtn) closeCheckoutBtn.addEventListener('click', () => checkoutModal.classList.remove('active'));
  if (checkoutModal) {
    checkoutModal.addEventListener('click', (e) => {
      if (e.target === checkoutModal) checkoutModal.classList.remove('active');
    });
  }

  // Governorate Select Dynamic Shipping
  const orderGovernorate = document.getElementById('orderGovernorate');
  if (orderGovernorate) {
    orderGovernorate.addEventListener('change', updateCheckoutTotals);
  }

  // Checkout Form Submit (COD)
  const checkoutForm = document.getElementById('checkoutForm');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', handleCheckoutSubmit);
  }

  // Success Modal Close
  const successCloseBtn = document.getElementById('successCloseBtn');
  const orderSuccessModal = document.getElementById('orderSuccessModal');
  if (successCloseBtn) successCloseBtn.addEventListener('click', () => orderSuccessModal.classList.remove('active'));

  // Custom Bespoke Modal
  const heroCustomBtn = document.getElementById('heroCustomBtn');
  const openCustomOrderModalBtn = document.getElementById('openCustomOrderModalBtn');
  const closeCustomModalBtn = document.getElementById('closeCustomModalBtn');
  const customOrderModal = document.getElementById('customOrderModal');

  if (heroCustomBtn) heroCustomBtn.addEventListener('click', () => customOrderModal.classList.add('active'));
  if (openCustomOrderModalBtn) openCustomOrderModalBtn.addEventListener('click', () => customOrderModal.classList.add('active'));
  if (closeCustomModalBtn) closeCustomModalBtn.addEventListener('click', () => customOrderModal.classList.remove('active'));
  if (customOrderModal) {
    customOrderModal.addEventListener('click', (e) => {
      if (e.target === customOrderModal) customOrderModal.classList.remove('active');
    });
  }

  // Custom Bespoke Form Submit
  const customBespokeForm = document.getElementById('customBespokeForm');
  if (customBespokeForm) {
    customBespokeForm.addEventListener('submit', handleCustomBespokeSubmit);
  }

  // Size Guide trigger in quick view
  const qvSizeGuideBtn = document.getElementById('qvSizeGuideBtn');
  const footerSizeGuideBtn = document.getElementById('footerSizeGuideBtn');
  const sizeGuideHandler = () => {
    alert('📏 ZAZA X Helmet & Gear Fit Guide:\n\n• Helmet Covers: Heavy-gauge high-stretch knit with an adjustable bottom lock cinch string. Universally fits all full-face, dual-sport, modular, and off-road motocross helmets (AGV, Shoei, HJC, Scorpion, Bell, Arai).\n• Balaclavas: Engineered with an ergonomic eye-port that works seamlessly with motorcycle goggles and helmet visors.\n• Custom Sizing: Mention your helmet model in the custom note field and we will tailor the fit precisely.');
  };
  if (qvSizeGuideBtn) qvSizeGuideBtn.addEventListener('click', sizeGuideHandler);
  if (footerSizeGuideBtn) footerSizeGuideBtn.addEventListener('click', sizeGuideHandler);

  // Footer Shipping & COD info
  const footerShippingBtn = document.getElementById('footerShippingBtn');
  const footerTrackBtn = document.getElementById('footerTrackBtn');
  const codInfoHandler = () => {
    alert('📦 Cash on Delivery (COD) & Rider Delivery:\n\n• 100% Cash on Delivery: Inspect your knitwear gear with the courier before paying.\n• Handcrafting Time: 3 to 5 business days per piece.\n• Free Shipping on all orders of 600 EGP or more!');
  };
  if (footerShippingBtn) footerShippingBtn.addEventListener('click', codInfoHandler);
  if (footerTrackBtn) footerTrackBtn.addEventListener('click', codInfoHandler);
}

// --- 7. CART FUNCTIONALITY ---
function quickAddToCart(productId) {
  const prod = getAllProducts().find(p => p.id === productId);
  if (!prod) return;

  addToCart({
    id: prod.id,
    title: prod.title,
    price: prod.price,
    image: prod.image,
    color: prod.colors[0].name,
    size: prod.sizes[0],
    note: '',
    qty: 1
  });

  openCartDrawer();
  showToast(`Added "${prod.title.slice(0, 24)}..." to cart! ⚡`);
}

function addToCart(newItem) {
  const existingIndex = cart.findIndex(item => 
    item.id === newItem.id && item.color === newItem.color && item.size === newItem.size && item.note === newItem.note
  );

  if (existingIndex > -1) {
    cart[existingIndex].qty += newItem.qty;
  } else {
    cart.push(newItem);
  }

  saveCart();
  updateCartUI();
}

function updateCartQuantity(index, delta) {
  if (cart[index]) {
    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
      cart.splice(index, 1);
    }
    saveCart();
    updateCartUI();
  }
}

function removeCartItem(index) {
  cart.splice(index, 1);
  saveCart();
  updateCartUI();
  showToast('Item removed from gear cart');
}

function saveCart() {
  localStorage.setItem('zaza_cart', JSON.stringify(cart));
}

function updateCartUI() {
  const cartCountEl = document.getElementById('cartCount');
  const drawerCartCountEl = document.getElementById('drawerCartCount');
  const cartItemsContainer = document.getElementById('cartItemsContainer');
  const cartSubtotalEl = document.getElementById('cartSubtotal');
  const cartDiscountEl = document.getElementById('cartDiscount');
  const discountRow = document.getElementById('discountRow');
  const cartShippingEstimateEl = document.getElementById('cartShippingEstimate');
  const cartTotalEl = document.getElementById('cartTotal');
  const freeShippingNotice = document.getElementById('freeShippingNotice');
  const shippingMeterFill = document.getElementById('shippingMeterFill');

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  if (cartCountEl) cartCountEl.textContent = totalItems;
  if (drawerCartCountEl) drawerCartCountEl.textContent = totalItems;

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  
  // Free Shipping Calculation (Threshold: 600 EGP)
  const freeThreshold = 600;
  const progress = Math.min(100, Math.round((subtotal / freeThreshold) * 100));
  if (shippingMeterFill) shippingMeterFill.style.width = `${progress}%`;

  if (subtotal >= freeThreshold) {
    if (freeShippingNotice) freeShippingNotice.innerHTML = `⚡ You unlocked <strong>FREE Shipping</strong>!`;
  } else {
    const diff = freeThreshold - subtotal;
    if (freeShippingNotice) freeShippingNotice.innerHTML = `Add <strong>${diff} EGP</strong> more for FREE Shipping! ⚡`;
  }

  // Promo Calculation
  let discountAmount = 0;
  if (appliedPromo && subtotal > 0) {
    discountAmount = Math.round((subtotal * appliedPromo.discountPercent) / 100);
    if (discountRow) discountRow.style.display = 'flex';
    if (cartDiscountEl) cartDiscountEl.textContent = `- ${discountAmount} EGP`;
  } else {
    if (discountRow) discountRow.style.display = 'none';
  }

  const shippingCost = subtotal >= freeThreshold || subtotal === 0 ? 0 : 45;
  const finalTotal = Math.max(0, subtotal - discountAmount + shippingCost);

  if (cartSubtotalEl) cartSubtotalEl.textContent = `${subtotal} EGP`;
  if (cartShippingEstimateEl) cartShippingEstimateEl.textContent = shippingCost === 0 ? 'FREE ⚡' : `${shippingCost} EGP`;
  if (cartTotalEl) cartTotalEl.textContent = `${finalTotal} EGP`;

  // Render items
  if (!cartItemsContainer) return;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="empty-cart-state">
        <span style="color:var(--accent-neon);">⚡</span>
        <h4 style="color:#FFFFFF; margin-bottom:6px;">Your ZAZA cart is empty</h4>
        <p style="font-size:0.85rem;">Discover our high-vis tactical knitwear gear.</p>
        <button class="btn-primary" style="margin-top:20px; font-size:0.88rem; padding:10px 22px;" onclick="closeCartDrawer()">
          Explore Gear
        </button>
      </div>
    `;
    return;
  }

  cartItemsContainer.innerHTML = cart.map((item, index) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.title}">
      <div class="cart-item-details">
        <h4>${item.title}</h4>
        <div class="cart-item-meta">
          <span>Colorway: <strong style="color:var(--accent-neon);">${item.color}</strong></span> • <span>Fit: <strong>${item.size}</strong></span>
          ${item.note ? `<div style="color:var(--accent-neon); font-size:0.75rem; margin-top:2px;">Note: ${item.note}</div>` : ''}
        </div>
        
        <div class="qty-control">
          <button class="qty-btn" onclick="updateCartQuantity(${index}, -1)" aria-label="Decrease quantity">-</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn" onclick="updateCartQuantity(${index}, 1)" aria-label="Increase quantity">+</button>
        </div>
      </div>

      <div class="cart-item-actions">
        <span class="cart-item-price">${item.price * item.qty} EGP</span>
        <button class="remove-item-btn" onclick="removeCartItem(${index})" title="Remove item">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  `).join('');
}

function handleApplyPromo() {
  const input = document.getElementById('promoInput');
  const msgEl = document.getElementById('promoMessage');
  if (!input || !msgEl) return;

  const code = input.value.trim().toUpperCase();
  if (code === 'ZAZA10' || code === 'BUBOI10') {
    appliedPromo = { code: code, discountPercent: 10 };
    msgEl.innerHTML = `<span style="color:var(--accent-neon); font-weight:800;">✓ 10% ZAZA VIP discount applied!</span>`;
    updateCartUI();
    showToast('Promo code activated! ⚡');
  } else if (code === '') {
    msgEl.textContent = '';
  } else {
    msgEl.innerHTML = `<span style="color:#FF4D4D;">Invalid code. Try ZAZA10</span>`;
  }
}

function openCartDrawer() {
  document.getElementById('cartOverlay')?.classList.add('active');
}

function closeCartDrawer() {
  document.getElementById('cartOverlay')?.classList.remove('active');
}

// --- 8. QUICK VIEW / PRODUCT DETAILS MODAL ---
window.openProductModal = function(productId) {
  const prod = getAllProducts().find(p => p.id === productId);
  if (!prod) return;

  activeModalProduct = prod;

  document.getElementById('qvImage').src = prod.image;
  document.getElementById('qvCategory').textContent = prod.categoryName;
  document.getElementById('qvTitle').textContent = prod.title;
  document.getElementById('qvPrice').textContent = `${prod.price} EGP`;
  document.getElementById('qvReviews').textContent = `(${prod.reviewsCount} verified reviews)`;
  document.getElementById('qvDesc').textContent = prod.description;
  document.getElementById('selectedColorName').textContent = prod.colors[0].name;

  // Render colors
  const colorsContainer = document.getElementById('qvColors');
  colorsContainer.innerHTML = prod.colors.map((c, i) => `
    <button class="color-option-btn ${i === 0 ? 'selected' : ''}" 
            style="background-color: ${c.hex};" 
            title="${c.name}" 
            data-color="${c.name}"
            data-img="${c.img}"
            onclick="selectModalColor(this, '${c.name}', '${c.img}')">
    </button>
  `).join('');

  // Render sizes
  const sizesContainer = document.getElementById('qvSizes');
  sizesContainer.innerHTML = prod.sizes.map((s, i) => `
    <button class="size-btn ${i === 0 ? 'selected' : ''}" 
            data-size="${s}" 
            onclick="selectModalSize(this, '${s}')">
      ${s}
    </button>
  `).join('');

  const noteInput = document.getElementById('qvCustomNote');
  if (noteInput) noteInput.value = '';

  document.getElementById('quickViewModal')?.classList.add('active');
};

window.selectModalColor = function(btn, colorName, imgSrc) {
  document.querySelectorAll('#qvColors .color-option-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  document.getElementById('selectedColorName').textContent = colorName;
  const qvImg = document.getElementById('qvImage');
  if (qvImg && imgSrc) qvImg.src = imgSrc;
};

window.selectModalSize = function(btn, sizeName) {
  document.querySelectorAll('#qvSizes .size-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
};

// --- 9. CHECKOUT & CASH ON DELIVERY (COD) ---
function openCheckoutModal() {
  updateCheckoutTotals();
  document.getElementById('checkoutModal')?.classList.add('active');
}

function updateCheckoutTotals() {
  const govSelect = document.getElementById('orderGovernorate');
  const coSubtotalEl = document.getElementById('coSubtotal');
  const coDiscountEl = document.getElementById('coDiscount');
  const coDiscountRow = document.getElementById('coDiscountRow');
  const coShippingEl = document.getElementById('coShipping');
  const coTotalEl = document.getElementById('coTotal');

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  let discountAmount = 0;
  if (appliedPromo) {
    discountAmount = Math.round((subtotal * appliedPromo.discountPercent) / 100);
    if (coDiscountRow) coDiscountRow.style.display = 'flex';
    if (coDiscountEl) coDiscountEl.textContent = `- ${discountAmount} EGP`;
  } else {
    if (coDiscountRow) coDiscountRow.style.display = 'none';
  }

  let shippingCost = 45;
  if (govSelect) {
    const parts = govSelect.value.split('|');
    shippingCost = parseInt(parts[0], 10) || 45;
  }

  if (subtotal >= 600) {
    shippingCost = 0;
  }

  const finalTotal = Math.max(0, subtotal - discountAmount + shippingCost);

  if (coSubtotalEl) coSubtotalEl.textContent = `${subtotal} EGP`;
  if (coShippingEl) coShippingEl.textContent = shippingCost === 0 ? 'FREE ⚡' : `${shippingCost} EGP`;
  if (coTotalEl) coTotalEl.textContent = `${finalTotal} EGP`;
}

function handleCheckoutSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('orderName')?.value.trim();
  const phone = document.getElementById('orderPhone')?.value.trim();
  const govVal = document.getElementById('orderGovernorate')?.value || '';
  const city = document.getElementById('orderCity')?.value.trim();
  const address = document.getElementById('orderAddress')?.value.trim();
  const notes = document.getElementById('orderNotes')?.value.trim() || '';

  const govParts = govVal.split('|');
  const govName = govParts[1] || 'Cairo';
  let shippingRate = parseInt(govParts[0], 10) || 45;

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  let discountAmount = appliedPromo ? Math.round((subtotal * appliedPromo.discountPercent) / 100) : 0;
  if (subtotal >= 600) shippingRate = 0;
  const total = Math.max(0, subtotal - discountAmount + shippingRate);

  const orderId = 'ZAZA-' + Math.floor(1000 + Math.random() * 9000);

  const newOrder = {
    id: orderId,
    date: new Date().toISOString().split('T')[0],
    customerName: name,
    phone: phone,
    governorate: govName,
    city: city,
    address: address,
    notes: notes,
    items: [...cart],
    subtotal: subtotal,
    discount: discountAmount,
    shipping: shippingRate,
    total: total,
    status: 'new',
    statusLabel: 'New Order (Pending Review)'
  };

  // Save order to shared localStorage
  let orders = JSON.parse(localStorage.getItem('zaza_orders')) || [];
  orders.unshift(newOrder);
  localStorage.setItem('zaza_orders', JSON.stringify(orders));

  // Clear cart
  cart = [];
  saveCart();
  updateCartUI();

  // Close Checkout Modal
  document.getElementById('checkoutModal')?.classList.remove('active');

  // Populate Success Modal
  document.getElementById('successOrderNumber').textContent = `#${orderId}`;
  document.getElementById('successCustomerName').textContent = name;
  document.getElementById('successCustomerPhone').textContent = phone;
  document.getElementById('successCustomerAddress').textContent = `${govName}, ${city}, ${address}`;
  document.getElementById('successTotalAmount').textContent = `${total} EGP (Pay Courier on Delivery)`;

  // Generate WhatsApp confirmation link
  const itemsSummary = newOrder.items.map(it => `• ${it.title} (${it.color} - ${it.size}) × ${it.qty}`).join('%0A');
  const waMessage = `Hello ZAZA X Team ⚡%0AI would like to confirm my order:%0AOrder Number: *${orderId}*%0ARider: *${name}*%0APhone: *${phone}*%0AAddress: *${govName} - ${city} - ${address}*%0A%0AGear Ordered:%0A${itemsSummary}%0A%0ATotal Due upon Delivery: *${total} EGP*`;
  
  const waBtn = document.getElementById('successWhatsappBtn');
  if (waBtn) {
    waBtn.href = `https://wa.me/201000000000?text=${waMessage}`;
  }

  document.getElementById('orderSuccessModal')?.classList.add('active');
  showToast('Order confirmed! ZAZA gear is being crafted ⚡');
}

// --- 10. CUSTOM BESPOKE SUBMISSION ---
function handleCustomBespokeSubmit(e) {
  e.preventDefault();

  const pieceType = document.getElementById('customPieceType')?.value;
  const colors = document.getElementById('customColors')?.value;
  const size = document.getElementById('customSize')?.value;
  const notes = document.getElementById('customNotes')?.value;
  const name = document.getElementById('customClientName')?.value;
  const phone = document.getElementById('customClientPhone')?.value;

  const waMessage = `Hello ZAZA X ⚡%0AI want to request a bespoke custom piece:%0A%0APiece Type: *${pieceType}*%0AColors: *${colors}*%0AHelmet/Size: *${size}*%0ADesign Specs: *${notes}*%0ARider Name: *${name}*%0APhone: *${phone}*`;

  window.open(`https://wa.me/201000000000?text=${waMessage}`, '_blank');
  document.getElementById('customOrderModal')?.classList.remove('active');
  showToast('Opening WhatsApp with your ZAZA request! ⚡');
}

// --- 11. TOAST NOTIFICATION UTILITY ---
function showToast(message) {
  const toast = document.getElementById('toastNotification');
  const toastText = document.getElementById('toastText');
  if (!toast || !toastText) return;

  toastText.textContent = message;
  toast.style.display = 'flex';
  toast.style.opacity = '1';

  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => { toast.style.display = 'none'; }, 300);
  }, 3200);
}

// --- 12. SPECIAL OFFER & FLASH DEAL LOGIC ---
let countdownInterval = null;

function initSpecialOfferCountdown() {
  const offerSection = document.getElementById('specialOfferSection');
  if (!offerSection) return;

  const defaultEndTime = new Date(Date.now() + 48 * 3600 * 1000).toISOString().slice(0, 16);
  const offer = JSON.parse(localStorage.getItem('zaza_special_offer')) || {
    active: true,
    title: 'MIDNIGHT CYBER RIDER FLASH SALE',
    subtitle: 'Get the Signature Neon Cat-Ears Cover with Instant Free Shipping!',
    price: 590,
    oldPrice: 890,
    endTime: defaultEndTime,
    badge: '⚡ FLASH RIDER DEAL • LIMITED DROP',
    discountBadge: 'SAVE 34%',
    image: 'images/neon_cat_helmet.jpg'
  };

  // If disabled by admin
  if (offer.active === false) {
    offerSection.style.display = 'none';
    return;
  }

  offerSection.style.display = 'block';

  // Populate data
  if (document.getElementById('offerTitleDisplay')) document.getElementById('offerTitleDisplay').textContent = offer.title;
  if (document.getElementById('offerSubtitleDisplay')) document.getElementById('offerSubtitleDisplay').textContent = offer.subtitle;
  if (document.getElementById('offerPriceDisplay')) document.getElementById('offerPriceDisplay').textContent = `${offer.price} EGP`;
  if (document.getElementById('offerOldPriceDisplay')) document.getElementById('offerOldPriceDisplay').textContent = `${offer.oldPrice} EGP`;
  if (document.getElementById('offerStickerBadge') && offer.badge) document.getElementById('offerStickerBadge').textContent = offer.badge;
  if (document.getElementById('offerImageDisplay') && offer.image) document.getElementById('offerImageDisplay').src = offer.image;

  if (document.getElementById('offerStickerDiscount')) {
    if (offer.oldPrice > offer.price) {
      const pct = Math.round(((offer.oldPrice - offer.price) / offer.oldPrice) * 100);
      document.getElementById('offerStickerDiscount').textContent = `SAVE ${pct}%`;
    }
  }

  // Ticking countdown clock
  if (countdownInterval) clearInterval(countdownInterval);

  function updateClock() {
    const end = new Date(offer.endTime).getTime();
    const now = new Date().getTime();
    const diff = end - now;

    if (diff <= 0) {
      if (document.getElementById('timerDays')) document.getElementById('timerDays').textContent = '00';
      if (document.getElementById('timerHours')) document.getElementById('timerHours').textContent = '00';
      if (document.getElementById('timerMins')) document.getElementById('timerMins').textContent = '00';
      if (document.getElementById('timerSecs')) document.getElementById('timerSecs').textContent = '00';
      clearInterval(countdownInterval);
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    const pad = (n) => String(n).padStart(2, '0');

    if (document.getElementById('timerDays')) document.getElementById('timerDays').textContent = pad(days);
    if (document.getElementById('timerHours')) document.getElementById('timerHours').textContent = pad(hours);
    if (document.getElementById('timerMins')) document.getElementById('timerMins').textContent = pad(mins);
    if (document.getElementById('timerSecs')) document.getElementById('timerSecs').textContent = pad(secs);
  }

  updateClock();
  countdownInterval = setInterval(updateClock, 1000);
}

function claimSpecialOfferDeal() {
  const offer = JSON.parse(localStorage.getItem('zaza_special_offer')) || {
    title: 'Signature Neon Cat-Ears Helmet Cover (Flash Deal)',
    price: 590,
    image: 'images/neon_cat_helmet.jpg'
  };

  const dealItem = {
    id: 'zaza-flash-deal',
    title: offer.title || 'Signature Neon Cat-Ears Helmet Cover (Flash Deal)',
    price: offer.price || 590,
    image: offer.image || 'images/neon_cat_helmet.jpg',
    color: 'Cyber Neon Lime',
    size: 'Universal Stretch Fit',
    qty: 1
  };

  const existingIdx = cart.findIndex(i => i.id === dealItem.id);
  if (existingIdx > -1) {
    cart[existingIdx].qty += 1;
  } else {
    cart.push(dealItem);
  }

  saveCart();
  updateCartUI();
  toggleCartDrawer(true);
  showToast('Flash Deal claimed and added to cart! ⚡');
}

