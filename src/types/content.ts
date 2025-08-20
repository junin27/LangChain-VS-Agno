import { z } from 'zod';

// Support status for feature comparisons
export type SupportStatus = "suportado" | "parcial" | "plugin" | "desconhecido" | "nao_suportado";

// Content block for sections
export interface SectionBlock {
  id: string;            // ex: "2.4-rag-langchain"
  title: string;         // título exibido
  summary?: string;      // resumo curto
  bodyMD?: string;       // conteúdo em Markdown
  lastUpdated?: string;  // ISO date
}

// Feature comparison row
export interface FeatureComparisonRow {
  criterion: string;     // ex: "RAG"
  langchain: SupportStatus | number | string;
  agno: SupportStatus | number | string;
  notes?: string;        // observações livres
}

// Score by criterion for charts
export interface ScoreByCriterion { 
  criterion: string; 
  langchain: number; 
  agno: number; 
}

// Main content structure
export interface ContentSection {
  id: string;
  title: string;
  sections: SectionBlock[];
  comparisons?: FeatureComparisonRow[];
  scores?: ScoreByCriterion[];
}

// Zod schemas for validation
export const SupportStatusSchema = z.enum(["suportado", "parcial", "plugin", "desconhecido", "nao_suportado"]);

export const SectionBlockSchema = z.object({
  id: z.string(),
  title: z.string(),
  summary: z.string().optional(),
  bodyMD: z.string().optional(),
  lastUpdated: z.string().optional(),
});

export const FeatureComparisonRowSchema = z.object({
  criterion: z.string(),
  langchain: z.union([SupportStatusSchema, z.number(), z.string()]),
  agno: z.union([SupportStatusSchema, z.number(), z.string()]),
  notes: z.string().optional(),
});

export const ScoreByCriterionSchema = z.object({
  criterion: z.string(),
  langchain: z.number().min(0).max(10),
  agno: z.number().min(0).max(10),
});

export const ContentSectionSchema = z.object({
  id: z.string(),
  title: z.string(),
  sections: z.array(SectionBlockSchema),
  comparisons: z.array(FeatureComparisonRowSchema).optional(),
  scores: z.array(ScoreByCriterionSchema).optional(),
});

// Theme types
export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

// Admin/Editor types
export interface EditModeContextType {
  isEditMode: boolean;
  toggleEditMode: () => void;
}

// Navigation types
export interface NavItem {
  id: string;
  title: string;
  path: string;
  children?: NavItem[];
}

// Search types
export interface SearchResult {
  id: string;
  title: string;
  summary?: string;
  section: string;
  path: string;
  score: number;
}

// Export types
export interface ExportOptions {
  format: 'csv' | 'json' | 'png';
  selectedCriteria?: string[];
  includeNotes?: boolean;
}
