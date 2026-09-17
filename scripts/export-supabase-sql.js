const fs = require('fs');
const path = require('path');

const products = JSON.parse(fs.readFileSync(path.join(__dirname, '../products.json'), 'utf8'));

let sql = `-- =====================================================================
-- AGRO DEMETRA — Supabase (PostgreSQL) Master Database Schema & 230 Seed Products
-- Ready to run directly in Supabase SQL Editor: https://app.supabase.com
-- =====================================================================

-- 1. EXTENSIONS
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. TABLES CLEANUP (IF RE-RUNNING)
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS brands CASCADE;
DROP TABLE IF EXISTS categories CASCADE;

-- 3. CATEGORIES TABLE
CREATE TABLE categories (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    icon VARCHAR(50),
    display_order INT DEFAULT 0
);

-- 4. BRANDS TABLE
CREATE TABLE brands (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    country VARCHAR(100)
);

-- 5. PRODUCTS TABLE (FULL AGRO-PHARMACY DOSSIER)
CREATE TABLE products (
    id VARCHAR(100) PRIMARY KEY, -- Unique URL slug
    name VARCHAR(255) NOT NULL,
    title VARCHAR(255),
    category_id VARCHAR(50) REFERENCES categories(id) ON DELETE SET NULL,
    brand_id VARCHAR(50) REFERENCES brands(id) ON DELETE SET NULL,
    use_category VARCHAR(20) NOT NULL DEFAULT 'nonprof', -- 'nonprof' or 'prof'
    use_category_name VARCHAR(100),
    price_eur NUMERIC(10,2) NOT NULL,
    price_bgn NUMERIC(10,2) NOT NULL,
    unit VARCHAR(50) NOT NULL,
    crops TEXT[],
    active_substance TEXT,
    formulation VARCHAR(50),
    quarantine VARCHAR(100),
    babh_reg VARCHAR(100),
    badge VARCHAR(50),
    image_url TEXT,
    description TEXT,
    dose VARCHAR(100),
    rating NUMERIC(3,2) DEFAULT 5.0,
    reviews_count INT DEFAULT 0,
    in_stock BOOLEAN DEFAULT TRUE,
    rates JSONB DEFAULT '[]'::jsonb,
    pack_sizes JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. ORDERS TABLE (WOOCOMMERCE / CHECKOUT READY)
CREATE TABLE orders (
    id BIGSERIAL PRIMARY KEY,
    order_number VARCHAR(50) UNIQUE NOT NULL,
    customer_name VARCHAR(255) NOT NULL,
    customer_phone VARCHAR(50) NOT NULL,
    customer_email VARCHAR(255),
    delivery_method VARCHAR(50) NOT NULL DEFAULT 'econt', -- 'econt', 'speedy', 'pickup'
    delivery_address TEXT NOT NULL,
    payment_method VARCHAR(50) NOT NULL DEFAULT 'cod', -- 'cod' (наложен платеж), 'card'
    total_eur NUMERIC(10,2) NOT NULL,
    total_bgn NUMERIC(10,2) NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'pending', -- 'pending', 'confirmed', 'shipped', 'completed', 'cancelled'
    items JSONB NOT NULL DEFAULT '[]'::jsonb,
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. ROW LEVEL SECURITY (RLS) POLICIES
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE brands ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Allow public read access to catalog
CREATE POLICY "Public read categories" ON categories FOR SELECT USING (true);
CREATE POLICY "Public read brands" ON brands FOR SELECT USING (true);
CREATE POLICY "Public read products" ON products FOR SELECT USING (true);

-- Allow public checkout (creating orders)
CREATE POLICY "Public create orders" ON orders FOR INSERT WITH CHECK (true);

-- =====================================================================
-- 8. SEED DATA: CATEGORIES & BRANDS
-- =====================================================================
INSERT INTO categories (id, name, icon, display_order) VALUES
('fungicides', 'Фунгициди', 'shield', 1),
('insecticides', 'Инсектициди & Акарициди', 'bug', 2),
('herbicides', 'Хербициди', 'scissors', 3),
('biocides', 'Биоциди & ДДД Препарати', 'shield-alert', 4),
('fertilizers', 'Торове & Биостимулатори', 'sprout', 5),
('seeds', 'Зеленчукови & Цветни Семена', 'flower', 6),
('wine', 'Вино & Ракия (Енология)', 'wine', 7);

INSERT INTO brands (id, name, country) VALUES
('bayer', 'Bayer Crop Science AG', 'Германия'),
('syngenta', 'Syngenta AG', 'Швейцария'),
('basf', 'BASF SE', 'Германия'),
('corteva', 'Corteva Agriscience', 'САЩ'),
('nippon', 'Nippon Soda', 'Япония'),
('manica', 'Manica SpA / Агрия', 'Италия / България'),
('adama', 'ADAMA Solutions', 'Израел'),
('yara', 'Yara International', 'Норвегия'),
('amitica', 'Амитица / Био', 'България'),
('sortovi', 'Сортови Семена', 'България'),
('lalvin', 'Lallemand (Lalvin)', 'Канада / Франция');

-- =====================================================================
-- 9. SEED DATA: 230 REAL REGISTERED PRODUCTS
-- =====================================================================
`;

function esc(val) {
  if (val === null || val === undefined) return 'NULL';
  if (typeof val === 'number' || typeof val === 'boolean') return val;
  return "'" + String(val).replace(/'/g, "''") + "'";
}

function escArr(arr) {
  if (!arr || !Array.isArray(arr) || arr.length === 0) return "'{}'";
  const items = arr.map(x => '"' + String(x).replace(/"/g, '\\"') + '"').join(',');
  return "'{" + items + "}'";
}

function escJson(obj) {
  if (!obj) return "'[]'::jsonb";
  return esc(JSON.stringify(obj)) + '::jsonb';
}

const productInserts = products.map(p => {
  return `INSERT INTO products (id, name, title, category_id, brand_id, use_category, use_category_name, price_eur, price_bgn, unit, crops, active_substance, formulation, quarantine, babh_reg, badge, image_url, description, dose, rating, reviews_count, in_stock, rates, pack_sizes) VALUES (
  ${esc(p.id)},
  ${esc(p.name)},
  ${esc(p.title)},
  ${esc(p.category)},
  ${esc(p.brand)},
  ${esc(p.useCategory)},
  ${esc(p.useCategoryName)},
  ${p.price},
  ${p.bgnPrice},
  ${esc(p.unit)},
  ${escArr(p.crops)},
  ${esc(p.active)},
  ${esc(p.formulation)},
  ${esc(p.quarantine)},
  ${esc(p.reg)},
  ${esc(p.badge)},
  ${esc(p.image)},
  ${esc(p.desc)},
  ${esc(p.dose)},
  ${p.rating || 5.0},
  ${p.reviewsCount || 0},
  ${p.inStock !== false ? 'TRUE' : 'FALSE'},
  ${escJson(p.rates)},
  ${escJson(p.packSizes)}
);`;
}).join('\n');

sql += productInserts + '\n';

const outPath = path.join(__dirname, '../supabase-schema-and-data.sql');
fs.writeFileSync(outPath, sql, 'utf8');
console.log(`Successfully generated ${outPath} (${(sql.length / 1024).toFixed(1)} KB)`);
