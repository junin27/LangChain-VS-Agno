import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Gerar sitemap.xml básico
const baseUrl = 'https://comparativo-langchain-agno.vercel.app';

const routes = [
  '/',
  '/construtor',
  '/admin',
  '/langchain',
  '/langchain/arquitetura',
  '/langchain/agentes',
  '/langchain/memoria',
  '/langchain/rag',
  '/langchain/ecossistema',
  '/langchain/observabilidade',
  '/langchain/desempenho',
  '/langchain/implantacao',
  '/langchain/maturidade',
  '/agno',
  '/agno/filosofia',
  '/agno/simplicidade',
  '/agno/agentes',
  '/agno/memoria',
  '/agno/rag',
  '/agno/ecossistema',
  '/agno/observabilidade',
  '/agno/desempenho',
  '/agno/implantacao',
  '/agno/maturidade',
  '/comparacao',
  '/comparacao/recursos',
  '/comparacao/benchmarks',
  '/comparacao/casos-de-uso',
  '/diferencas',
  '/diferencas/filosofia',
  '/diferencas/orquestracao',
  '/diferencas/performance',
  '/diferencas/ecossistema',
  '/diferencas/multimodal',
  '/recomendacoes'
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
console.log('✅ Generated sitemap.xml');
