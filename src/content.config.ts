import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const docSchema = z.object({
  id: z.string(),
  title: z.string(),
  track: z.enum(['foundation', 'kirchhoff', 'shannon', 'bridge']),
  level: z.enum(['foundation', 'core', 'advanced']),
  prereq: z.array(z.string()).default([]),
  summary: z.string(),
});

const foundation = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './docs/foundation' }),
  schema: docSchema,
});

const kirchhoff = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './docs/kirchhoff' }),
  schema: docSchema,
});

const shannon = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './docs/shannon' }),
  schema: docSchema,
});

const bridge = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './docs/bridge' }),
  schema: docSchema,
});

const glossary = defineCollection({
  loader: glob({ pattern: 'glossary.md', base: './docs' }),
  schema: z.object({}),
});

export const collections = { foundation, kirchhoff, shannon, bridge, glossary };
