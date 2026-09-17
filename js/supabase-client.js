/**
 * AGRO DEMETRA — Supabase Client Connector
 * Seamless bridge between static frontend and PostgreSQL database
 */

window.AGRO_SUPABASE = {
  // Replace these with your project credentials from Supabase Dashboard -> Project Settings -> API
  url: window.SUPABASE_URL || 'https://your-project.supabase.co',
  anonKey: window.SUPABASE_ANON_KEY || 'your-anon-public-key',
  client: null,

  init() {
    if (window.supabase && this.url && !this.url.includes('your-project')) {
      try {
        this.client = window.supabase.createClient(this.url, this.anonKey);
        console.log('✅ Supabase connected successfully');
      } catch (err) {
        console.warn('⚠️ Supabase init error, using local database fallback:', err);
      }
    }
  },

  // Fetch products live from PostgreSQL (with fallback to window.AGRO_PRODUCTS)
  async getProducts() {
    if (this.client) {
      try {
        const { data, error } = await this.client
          .from('products')
          .select('*, categories(*), brands(*)')
          .order('name');
        if (!error && data && data.length > 0) {
          return data;
        }
      } catch (err) {
        console.warn('Fallback to local AGRO_PRODUCTS:', err);
      }
    }
    return window.AGRO_PRODUCTS || [];
  },

  // Submit order live into PostgreSQL
  async submitOrder(orderData) {
    if (this.client) {
      try {
        const { data, error } = await this.client
          .from('orders')
          .insert([orderData])
          .select();
        if (error) throw error;
        return { success: true, order: data[0] };
      } catch (err) {
        console.error('Error submitting order to Supabase:', err);
        return { success: false, error: err.message };
      }
    }
    // Simulation / local fallback
    console.log('Order created locally:', orderData);
    return { success: true, order: orderData, simulated: true };
  }
};
