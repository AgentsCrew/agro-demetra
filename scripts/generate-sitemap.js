const fs = require('fs');
const path = require('path');

const products = JSON.parse(fs.readFileSync(path.join(__dirname, '../products.json'), 'utf8'));

const baseUrl = 'https://agrodemetra.bg';
const today = new Date().toISOString().split('T')[0];

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

// Static pages
const staticPages = [
  { loc: '/', priority: '1.0', changefreq: 'daily' },
  { loc: '/home-2', priority: '0.9', changefreq: 'weekly' },
  { loc: '/home-3', priority: '0.9', changefreq: 'weekly' },
  { loc: '/category.html', priority: '0.95', changefreq: 'daily' },
  { loc: '/news.html', priority: '0.8', changefreq: 'weekly' }
];

staticPages.forEach(p => {
  xml += '  <url>\n';
  xml += `    <loc>${baseUrl}${p.loc}</loc>\n`;
  xml += `    <lastmod>${today}</lastmod>\n`;
  xml += `    <changefreq>${p.changefreq}</changefreq>\n`;
  xml += `    <priority>${p.priority}</priority>\n`;
  xml += '  </url>\n';
});

// Categories
const categories = ['fungicides', 'insecticides', 'herbicides', 'biocides', 'fertilizers', 'seeds', 'wine'];
categories.forEach(c => {
  xml += '  <url>\n';
  xml += `    <loc>${baseUrl}/category.html?cat=${c}</loc>\n`;
  xml += `    <lastmod>${today}</lastmod>\n`;
  xml += `    <changefreq>daily</changefreq>\n`;
  xml += `    <priority>0.85</priority>\n`;
  xml += '  </url>\n';
});

// All 230 Products
products.forEach(prod => {
  xml += '  <url>\n';
  xml += `    <loc>${baseUrl}/product.html?prod=${encodeURIComponent(prod.id)}</loc>\n`;
  xml += `    <lastmod>${today}</lastmod>\n`;
  xml += `    <changefreq>weekly</changefreq>\n`;
  xml += `    <priority>0.75</priority>\n`;
  xml += '  </url>\n';
});

xml += '</urlset>\n';

fs.writeFileSync(path.join(__dirname, '../sitemap.xml'), xml, 'utf8');
console.log(`Generated sitemap.xml with ${staticPages.length + categories.length + products.length} URLs.`);
