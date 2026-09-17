/**
 * Programmatic Seeder for Supabase
 * Usage: node scripts/seed-supabase.js <SUPABASE_URL> <SUPABASE_SERVICE_KEY>
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const SUPABASE_URL = process.argv[2] || process.env.SUPABASE_URL;
const SUPABASE_KEY = process.argv[3] || process.env.SUPABASE_SERVICE_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.log(`
ℹ️ Забележка:
За директно пълнене на базата е най-лесно да отворите SQL Editor в Supabase:
1. Влезте в https://app.supabase.com -> Вашият проект
2. Отворете таб 'SQL Editor'
3. Копирайте и поставете съдържанието на файла 'supabase-schema-and-data.sql'
4. Натиснете 'Run'

Всички 230 продукта и таблици ще се създадат мигновено!
  `);
  process.exit(0);
}

console.log('Seeding Supabase via API at:', SUPABASE_URL);
