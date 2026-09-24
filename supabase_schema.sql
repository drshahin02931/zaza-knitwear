-- =============================================================================
-- ZAZA X | E-COMMERCE POSTGRESQL DATABASE SCHEMA (SUPABASE)
-- Project Ref: ytpgmeutvfhghkjakxzs (eu-central-1)
-- =============================================================================

-- 1. PRODUCTS TABLE
CREATE TABLE IF NOT EXISTS products (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    category_name TEXT NOT NULL,
    price NUMERIC NOT NULL,
    old_price NUMERIC,
    tag TEXT,
    tag_type TEXT,
    rating NUMERIC DEFAULT 5.0,
    reviews_count INT DEFAULT 0,
    image TEXT NOT NULL,
    description TEXT,
    colors JSONB DEFAULT '[]'::jsonb,
    sizes JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. ORDERS TABLE (CASH ON DELIVERY & RIDER INFO)
CREATE TABLE IF NOT EXISTS orders (
    id TEXT PRIMARY KEY,
    date DATE DEFAULT CURRENT_DATE,
    customer_name TEXT NOT NULL,
    phone TEXT NOT NULL,
    governorate TEXT NOT NULL,
    city TEXT NOT NULL,
    address TEXT NOT NULL,
    notes TEXT,
    items JSONB NOT NULL DEFAULT '[]'::jsonb,
    subtotal NUMERIC NOT NULL,
    discount NUMERIC DEFAULT 0,
    shipping NUMERIC DEFAULT 0,
    total NUMERIC NOT NULL,
    status TEXT DEFAULT 'new',
    status_label TEXT DEFAULT 'New Order',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. SPECIAL OFFERS / FLASH DEALS TABLE (COUNTDOWN CLOCK)
CREATE TABLE IF NOT EXISTS special_offers (
    id INT PRIMARY KEY DEFAULT 1,
    active BOOLEAN DEFAULT TRUE,
    title TEXT NOT NULL,
    subtitle TEXT,
    price NUMERIC NOT NULL,
    old_price NUMERIC,
    end_time TIMESTAMPTZ,
    badge TEXT,
    discount_badge TEXT,
    image TEXT,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. PROMO CODES TABLE
CREATE TABLE IF NOT EXISTS promo_codes (
    code TEXT PRIMARY KEY,
    discount_percent INT NOT NULL,
    active BOOLEAN DEFAULT TRUE,
    expires_at TIMESTAMPTZ
);

-- 5. ROW LEVEL SECURITY (RLS) POLICIES
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE special_offers ENABLE ROW LEVEL SECURITY;
ALTER TABLE promo_codes ENABLE ROW LEVEL SECURITY;

DO $$
BEGIN
    DROP POLICY IF EXISTS "Public read products" ON products;
    CREATE POLICY "Public read products" ON products FOR SELECT USING (true);
    
    DROP POLICY IF EXISTS "Public insert products" ON products;
    CREATE POLICY "Public insert products" ON products FOR ALL USING (true);

    DROP POLICY IF EXISTS "Public read orders" ON orders;
    CREATE POLICY "Public read orders" ON orders FOR SELECT USING (true);
    
    DROP POLICY IF EXISTS "Public insert orders" ON orders;
    CREATE POLICY "Public insert orders" ON orders FOR ALL USING (true);

    DROP POLICY IF EXISTS "Public read special_offers" ON special_offers;
    CREATE POLICY "Public read special_offers" ON special_offers FOR SELECT USING (true);
    
    DROP POLICY IF EXISTS "Public update special_offers" ON special_offers;
    CREATE POLICY "Public update special_offers" ON special_offers FOR ALL USING (true);

    DROP POLICY IF EXISTS "Public read promo_codes" ON promo_codes;
    CREATE POLICY "Public read promo_codes" ON promo_codes FOR SELECT USING (true);
END $$;
