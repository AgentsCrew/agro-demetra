/**
 * AGRO DEMETRA — Supabase Live Client Connector
 * Production PostgreSQL database connection
 */

window.AGRO_SUPABASE = {
  url: 'https://tkyqhakqaazoceercygj.supabase.co',
  anonKey: 'sb_publishable_DTSOhfGZJ-rXpSyfBxFQQw_Q5Snra4L',

  getHeaders(customKey) {
    const key = customKey || this.anonKey;
    return {
      'apikey': key,
      'Authorization': `Bearer ${key}`,
      'Content-Type': 'application/json'
    };
  },

  // Fetch products live from PostgreSQL (with fallback to window.AGRO_PRODUCTS)
  async getProducts() {
    try {
      const res = await fetch(`${this.url}/rest/v1/products?select=*&order=name.asc`, {
        headers: this.getHeaders()
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        return data;
      }
    } catch (err) {
      console.warn('⚠️ Supabase fetch warning, using local AGRO_PRODUCTS fallback:', err);
    }
    return window.AGRO_PRODUCTS || [];
  },

  // Fetch single product by slug ID
  async getProductById(id) {
    try {
      const cleanId = encodeURIComponent(id.toLowerCase().trim());
      const res = await fetch(`${this.url}/rest/v1/products?id=eq.${cleanId}&select=*`, {
        headers: this.getHeaders()
      });
      if (res.ok) {
        const data = await res.json();
        if (data && data.length > 0) return data[0];
      }
    } catch (err) {
      console.warn('⚠️ Supabase single product fetch warning:', err);
    }
    if (window.getProductById) {
      return window.getProductById(id);
    }
    return null;
  },

  // Submit new customer order into PostgreSQL
  async submitOrder(orderData) {
    try {
      const res = await fetch(`${this.url}/rest/v1/orders`, {
        method: 'POST',
        headers: {
          ...this.getHeaders(),
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify({
          order_number: orderData.order_number || `AD-${Date.now().toString().slice(-6)}`,
          customer_name: orderData.customer_name || 'Клиент',
          customer_phone: orderData.customer_phone || '',
          customer_email: orderData.customer_email || '',
          delivery_method: orderData.delivery_method || 'econt',
          delivery_address: orderData.delivery_address || 'Доставка до офис',
          payment_method: orderData.payment_method || 'cod',
          total_eur: parseFloat(orderData.total_eur) || 0,
          total_bgn: parseFloat(orderData.total_bgn) || (parseFloat(orderData.total_eur) * 1.95583),
          status: 'pending',
          items: orderData.items || [],
          notes: orderData.notes || ''
        })
      });

      if (res.status === 201 || res.status === 200) {
        return { success: true, order_number: orderData.order_number };
      }
      const errText = await res.text();
      console.warn('Supabase order submit returned:', res.status, errText);
    } catch (err) {
      console.error('Error submitting order to Supabase:', err);
    }
    return { success: true, simulated: true };
  }
};
