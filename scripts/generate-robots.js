import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Gerar robots.txt
const robots = `User-agent: *
Allow: /

Sitemap: https://comparativo-langchain-agno.vercel.app/sitemap.xml

# Comparativo LangChain vs Agno
# Site de análise técnica comparativa entre bibliotecas de IA`;

const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots);
console.log('✅ Generated robots.txt');
