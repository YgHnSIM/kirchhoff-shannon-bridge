/**
 * Convert TeX-style \( \) / \[ \] delimiters to $ / $$ before remark-math.
 * remark-math only tokenizes dollar delimiters. Wrap `this.parser` (set by
 * remark-parse, which Astro attaches first) so the source is rewritten on
 * every parse, including the first `process()` call.
 *
 * @type {import('unified').Plugin<[], import('mdast').Root>}
 */
export default function remarkTexDelimiters() {
  const originalParser = this.parser;
  if (typeof originalParser !== 'function') {
    throw new Error(
      'remarkTexDelimiters requires remark-parse to be attached first (this.parser).'
    );
  }

  this.parser = function parseWithTexCompat(doc, file) {
    const raw = typeof doc === 'string' ? doc : String(doc ?? '');
    const converted = convertDelimiters(raw);
    if (file && typeof file === 'object') {
      file.value = converted;
    }
    return originalParser(converted, file);
  };
}

/**
 * Replace \( … \) with $…$ and \[ … \] with a standalone $$ fence.
 * Blockquote `>` prefixes inside the display body are stripped so
 * remark-math sees a real math-flow fence, not `> $$`.
 *
 * @param {string} src
 * @returns {string}
 */
function convertDelimiters(src) {
  const parts = src.split(/(```[\s\S]*?```|~~~[\s\S]*?~~~|`[^`\n]+`)/g);

  return parts
    .map((part, i) => {
      if (i % 2 === 1) return part;

      return part
        .replace(/\\\[(\s*[\s\S]*?\s*)\\\]/g, (_, tex) => {
          const cleaned = String(tex).replace(/^\s*> ?/gm, '').trim();
          return `\n\n$$\n${cleaned}\n$$\n\n`;
        })
        .replace(/\\\(([^]*?)\\\)/g, (_, tex) => `$${tex}$`);
    })
    .join('');
}
