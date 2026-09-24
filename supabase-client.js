/* ==========================================================================
   ZAZA X - SUPABASE CLOUD DATABASE CLIENT (DIRECT REAL-TIME SYNC)
   ========================================================================== */

const SUPABASE_CONFIG = {
  url: 'https://ytpgmeutvfhghkjakxzs.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0cGdtZXV0dmZoZ2hramFreHpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAyNTYwOTksImV4cCI6MjEwNTgzMjA5OX0.2Fg_Itt22eGkDLkISB0dEq-2l-31QcvVlhNyalSkGnw'
};

const ZAZA_DB = {
  // Helper for REST headers
  getHeaders(isPost = false) {
    const h = {
      'apikey': SUPABASE_CONFIG.anonKey,
      'Authorization': 'Bearer ' + SUPABASE_CONFIG.anonKey
    };
    if (isPost) {
      h['Content-Type'] = 'application/json';
      h['Prefer'] = 'return=representation';
    }
    return h;
  },

  // 1. PRODUCTS
  async getProducts() {
    try {
      const res = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/products?select=*&order=created_at.desc`, {
        headers: this.getHeaders()
      });
      if (!res.ok) throw new Error('Failed to fetch from cloud');
      const rows = await res.json();
      return rows.map(r => ({
        id: r.id,
        title: r.title,
        category: r.category,
        categoryName: r.category_name,
        price: parseFloat(r.price),
        oldPrice: parseFloat(r.old_price || r.price),
        tag: r.tag,
        tagType: r.tag_type,
        rating: parseFloat(r.rating || 5.0),
        reviewsCount: parseInt(r.reviews_count || 0, 10),
        image: r.image,
        description: r.description,
        costPrice: r.cost_price ? parseFloat(r.cost_price) : 0,
        isSpecialOffer: r.is_special_offer || false,
        offerPrice: r.offer_price ? parseFloat(r.offer_price) : null,
        offerEndTime: r.offer_end_time || null,
        offerTitle: r.offer_title || null,
        colors: typeof r.colors === 'string' ? JSON.parse(r.colors) : (r.colors || []),
        sizes: typeof r.sizes === 'string' ? JSON.parse(r.sizes) : (r.sizes || [])
      }));
    } catch (err) {
      console.warn('Using local products fallback:', err.message);
      return null;
    }
  },

  async addProduct(product) {
    try {
      const payload = {
        id: product.id,
        title: product.title,
        category: product.category,
        category_name: product.categoryName,
        price: product.price,
        cost_price: product.costPrice !== undefined ? product.costPrice : 0,
        old_price: product.oldPrice,
        tag: product.tag,
        tag_type: product.tagType,
        rating: product.rating,
        reviews_count: product.reviewsCount,
        image: product.image,
        description: product.description,
        is_special_offer: product.isSpecialOffer || false,
        offer_price: product.offerPrice || null,
        offer_end_time: product.offerEndTime || null,
        offer_title: product.offerTitle || null,
        colors: product.colors,
        sizes: product.sizes
      };

      const res = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/products`, {
        method: 'POST',
        headers: this.getHeaders(true),
        body: JSON.stringify(payload)
      });
      return res.ok;
    } catch (err) {
      console.error('Failed to add product to Supabase:', err);
      return false;
    }
  },

  async updateProduct(productId, product) {
    try {
      const payload = {};
      if (product.title !== undefined) payload.title = product.title;
      if (product.category !== undefined) payload.category = product.category;
      if (product.categoryName !== undefined) payload.category_name = product.categoryName;
      if (product.price !== undefined) payload.price = product.price;
      if (product.costPrice !== undefined) payload.cost_price = product.costPrice;
      if (product.oldPrice !== undefined) payload.old_price = product.oldPrice;
      if (product.tag !== undefined) payload.tag = product.tag;
      if (product.image !== undefined) payload.image = product.image;
      if (product.description !== undefined) payload.description = product.description;
      if (product.colors !== undefined) payload.colors = product.colors;
      if (product.sizes !== undefined) payload.sizes = product.sizes;

      const res = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/products?id=eq.${productId}`, {
        method: 'PATCH',
        headers: this.getHeaders(true),
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        // If product was an original base product not yet stored in Supabase, insert it
        const check = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/products?id=eq.${productId}&select=id`, {
          headers: this.getHeaders()
        });
        if (check.ok) {
          const rows = await check.json();
          if (!rows || rows.length === 0) {
            return await this.addProduct({ id: productId, ...product });
          }
        }
      }
      return res.ok;
    } catch (err) {
      console.error('Failed to update product in Supabase:', err);
      return false;
    }
  },

  async setProductSpecialOffer(productId, offerData) {
    try {
      const payload = {
        is_special_offer: offerData.isSpecialOffer,
        offer_price: offerData.offerPrice,
        offer_end_time: offerData.offerEndTime || null,
        offer_title: offerData.offerTitle || null
      };

      const res = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/products?id=eq.${productId}`, {
        method: 'PATCH',
        headers: this.getHeaders(true),
        body: JSON.stringify(payload)
      });
      return res.ok;
    } catch (err) {
      console.error('Failed to update special offer in Supabase:', err);
      return false;
    }
  },

  async deleteProduct(productId) {
    try {
      const res = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/products?id=eq.${productId}`, {
        method: 'DELETE',
        headers: this.getHeaders()
      });
      return res.ok;
    } catch (err) {
      console.error('Failed to delete product from Supabase:', err);
      return false;
    }
  },

  // 2. ORDERS
  async getOrders() {
    try {
      const res = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/orders?select=*&order=created_at.desc`, {
        headers: this.getHeaders()
      });
      if (!res.ok) throw new Error('Cloud orders error');
      const rows = await res.json();
      return rows.map(r => ({
        id: r.id,
        date: r.date,
        customerName: r.customer_name,
        phone: r.phone,
        governorate: r.governorate,
        city: r.city,
        address: r.address,
        notes: r.notes,
        items: typeof r.items === 'string' ? JSON.parse(r.items) : (r.items || []),
        subtotal: parseFloat(r.subtotal),
        discount: parseFloat(r.discount || 0),
        shipping: parseFloat(r.shipping || 0),
        total: parseFloat(r.total),
        status: r.status,
        statusLabel: r.status_label
      }));
    } catch (err) {
      console.warn('Orders cloud fetch error:', err.message);
      return null;
    }
  },

  async createOrder(order) {
    try {
      const payload = {
        id: order.id,
        customer_name: order.customerName,
        phone: order.phone,
        governorate: order.governorate,
        city: order.city,
        address: order.address,
        notes: order.notes || '',
        items: order.items,
        subtotal: order.subtotal,
        discount: order.discount || 0,
        shipping: order.shipping || 0,
        total: order.total,
        status: order.status || 'new',
        status_label: order.statusLabel || 'New Order'
      };

      const res = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/orders`, {
        method: 'POST',
        headers: this.getHeaders(true),
        body: JSON.stringify(payload)
      });
      return res.ok;
    } catch (err) {
      console.error('Failed to save order to Supabase:', err);
      return false;
    }
  },

  async updateOrderStatus(orderId, newStatus) {
    try {
      const labels = {
        new: 'New Order',
        crafting: 'In Crafting & Prep',
        shipping: 'Out with Courier',
        delivered: 'Delivered & Collected',
        cancelled: 'Cancelled'
      };
      const res = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/orders?id=eq.${orderId}`, {
        method: 'PATCH',
        headers: this.getHeaders(true),
        body: JSON.stringify({ status: newStatus, status_label: labels[newStatus] || newStatus })
      });
      return res.ok;
    } catch (err) {
      return false;
    }
  },

  async deleteOrder(orderId) {
    try {
      const res = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/orders?id=eq.${orderId}`, {
        method: 'DELETE',
        headers: this.getHeaders()
      });
      return res.ok;
    } catch (err) {
      return false;
    }
  },

  async clearAllOrders() {
    try {
      const res = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/orders?id=neq.placeholder`, {
        method: 'DELETE',
        headers: this.getHeaders()
      });
      return res.ok;
    } catch (err) {
      return false;
    }
  },

  // 3. SPECIAL OFFERS
  async getSpecialOffer() {
    try {
      const res = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/special_offers?id=eq.1`, {
        headers: this.getHeaders()
      });
      if (!res.ok) return null;
      const rows = await res.json();
      if (!rows || rows.length === 0) return null;
      const r = rows[0];
      return {
        active: r.active,
        title: r.title,
        subtitle: r.subtitle,
        price: parseFloat(r.price),
        oldPrice: parseFloat(r.old_price),
        endTime: r.end_time,
        badge: r.badge,
        discountBadge: r.discount_badge,
        image: r.image
      };
    } catch (err) {
      return null;
    }
  },

  async saveSpecialOffer(offer) {
    try {
      const payload = {
        id: 1,
        active: offer.active !== false,
        title: offer.title,
        subtitle: offer.subtitle,
        price: offer.price,
        old_price: offer.oldPrice,
        end_time: offer.endTime,
        badge: offer.badge,
        discount_badge: offer.discountBadge || 'SAVE 34%',
        image: offer.image,
        updated_at: new Date().toISOString()
      };

      const res = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/special_offers?id=eq.1`, {
        method: 'PATCH',
        headers: this.getHeaders(true),
        body: JSON.stringify(payload)
      });
      return res.ok;
    } catch (err) {
      return false;
    }
  }
};

window.ZAZA_DB = ZAZA_DB;
