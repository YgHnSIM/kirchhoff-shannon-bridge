import { getCollection, type CollectionEntry } from 'astro:content';

export type Track = 'foundation' | 'kirchhoff' | 'shannon' | 'bridge';

export const TRACK_META: Record<
  Track,
  { label: string; labelKo: string; rail: 'kirchhoff' | 'shannon' | 'both' | 'none'; color: string }
> = {
  foundation: { label: 'Foundation', labelKo: '기초', rail: 'none', color: 'var(--ink)' },
  kirchhoff: { label: 'Kirchhoff', labelKo: '키르히호프', rail: 'kirchhoff', color: 'var(--copper)' },
  shannon: { label: 'Shannon', labelKo: '섀넌', rail: 'shannon', color: 'var(--cyan)' },
  bridge: { label: 'Bridge', labelKo: '다리', rail: 'both', color: 'var(--ink)' },
};

export const LEVEL_LABEL: Record<string, string> = {
  foundation: '기초',
  core: '핵심',
  advanced: '심화',
};

/** Stable curriculum order (matches CURRICULUM.md). */
export const TRACK_ORDER: Record<Track, string[]> = {
  foundation: [
    '00-how-to-read',
    '01-measurement-and-abstraction',
    '02-math-primer',
    '03-historical-frame',
    '04-physics-refresh',
    '05-coming-back',
  ],
  kirchhoff: [
    'k-01-circuits-before',
    'k-02-kcl-kvl',
    'k-03-networks',
    'k-04-spectroscopy',
    'k-05-radiation-laws',
    'k-06-to-planck',
    'k-07-life',
  ],
  shannon: [
    's-01-boolean-relays',
    's-02-what-is-information',
    's-03-entropy',
    's-04-source-coding',
    's-05-channel-capacity',
    's-06-secrecy',
    's-07-life',
  ],
  bridge: [
    'b-01-conservation-metaphors',
    'b-02-two-entropies',
    'b-03-from-blackbody-to-bit',
    'b-04-compare-lives',
    'b-05-further-reading',
  ],
};

export function slugOf(entry: CollectionEntry<Track>): string {
  return entry.id.replace(/\.md$/, '');
}

export function hrefOf(track: Track, slug: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${track}/${slug}/`;
}

export async function getOrdered(track: Track) {
  const entries = await getCollection(track);
  const order = TRACK_ORDER[track];
  return [...entries].sort((a, b) => {
    const ia = order.indexOf(slugOf(a));
    const ib = order.indexOf(slugOf(b));
    return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
  });
}

export async function getNeighbors(track: Track, slug: string) {
  const list = await getOrdered(track);
  const idx = list.findIndex((e) => slugOf(e) === slug);
  return {
    prev: idx > 0 ? list[idx - 1] : undefined,
    next: idx >= 0 && idx < list.length - 1 ? list[idx + 1] : undefined,
  };
}

export async function getAllDocs() {
  const tracks: Track[] = ['foundation', 'kirchhoff', 'shannon', 'bridge'];
  const result: { track: Track; entries: Awaited<ReturnType<typeof getOrdered>> }[] = [];
  for (const t of tracks) {
    result.push({ track: t, entries: await getOrdered(t) });
  }
  return result;
}
