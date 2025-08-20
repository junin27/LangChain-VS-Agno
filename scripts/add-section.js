import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Script para adicionar nova seção de conteúdo
const sectionId = process.argv[2];
const sectionTitle = process.argv[3];

if (!sectionId || !sectionTitle) {
  console.error('Usage: npm run add:section <section-id> "<section-title>"');
  console.error('Example: npm run add:section "2.5-rag" "Implementação de RAG"');
  process.exit(1);
}

const template = {
  id: sectionId,
  title: sectionTitle,
  summary: 'Resumo da seção será adicionado aqui...',
  bodyMD: `# ${sectionTitle}\n\n*Conteúdo será inserido pela IA...*`,
  lastUpdated: new Date().toISOString()
};

const contentDir = path.join(__dirname, '..', 'content');
if (!fs.existsSync(contentDir)) {
  fs.mkdirSync(contentDir, { recursive: true });
}

const filePath = path.join(contentDir, `${sectionId}.json`);
fs.writeFileSync(filePath, JSON.stringify(template, null, 2));

console.log(`✅ Created content file: ${filePath}`);
console.log(`📝 Section: ${sectionTitle}`);
console.log(`🆔 ID: ${sectionId}`);
