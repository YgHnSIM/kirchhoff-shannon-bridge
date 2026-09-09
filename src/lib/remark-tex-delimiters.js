/**
 * Convert TeX-style \( \) / \[ \] delimiters to $ / $$ before remark-parse,
 * so remark-math can see them. Does not modify source files on disk.
 * Skips fenced code blocks.
 *
 * @type {import('unified').Plugin<[], string>}
 */
export default function remarkTexDelimiters() {
  const self = this;
  const originalParse = self.parse?.bind(self);
  if (!originalParse) return;

  self.parse = function parseWithTexCompat(doc, file) {
    const input = typeof doc === 'string' ? doc : String(doc ?? file?.value ?? '');
    const converted = convertDelimiters(input);
    if (file && typeof file.value === 'string') {
      file.value = converted;
    }
    return originalParse(converted, file);
  };
}

function convertDelimiters(src) {
  const parts = src.split(/(```[\s\S]*?```|~~~[\s\S]*?~~~)/g);
  return parts
    .map((part, i) => {
      if (i % 2 === 1) return part; // fenced code
      // Display first (greedy-safe non-greedy across lines), then inline
      return part
        .replace(/\\\[([\s\S]*?)\\\]/g, (_, tex) => `$$\n${tex.trim()}\n$$`)
        .replace(/\\\(([\s\S]*?)\\\)/g, (_, tex) => `$${tex}$`);
    })
    .join('');
}
