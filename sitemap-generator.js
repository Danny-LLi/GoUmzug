import fs from 'fs';
import path from 'path';

const routes = [
    '/',
    '/services',
    '/packages',
    '/why-us',
    '/contact',
];

const baseUrl = 'https://goumzug.eu'; // Replace with your website's base URL

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `    <url>
        <loc>${baseUrl}${route}</loc>
    </url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.resolve('public/sitemap.xml'), sitemapContent);
console.log('sitemap.xml has been generated!');