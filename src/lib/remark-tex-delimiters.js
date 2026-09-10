/**
 * Convert TeX-style \( \) / \[ \] delimiters to $ / $$ before remark-math,
 * using a reliable unified approach: override the file value via a compiler/attacher.
 * Skips fenced code blocks.
 *
 * @type {import('unified').Plugin<[], import('mdast').Root>}
 */
export default function remarkTexDelimiters() {
  // Instead of patching this.parse (which may fail depending on the
  // unified processor version), we inject a preprocessor via the
  // processor's Parser override — the only reliable hook for raw-text
  // mutation in unified 11+.
  const self = this;

  // Wrap the freeze cycle: by the time freeze() is called, the Parser
  // (remark-parse) has been attached and self.parse is fully formed.
  const originalFreeze = self.freeze.bind(self);

  self.freeze = function wrappedFreeze() {
    // Call the original freeze so all plugins are locked in.
    const result = originalFreeze();

    // Only patch once (freeze can be called multiple times).
    if (self._texDelimitersPatched) return result;
    self._texDelimitersPatched = true;

    const originalParse = self.parse.bind(self);

    self.parse = function parseWithTexCompat(doc, file) {
      // Normalise input to a plain string.
      const raw = typeof doc === 'string' ? doc
        : (file && typeof file.value === 'string') ? file.value
        : String(doc ?? '');

      const converted = convertDelimiters(raw);

      // Keep the VFile in sync so downstream plugins see the converted text.
      if (file && typeof file === 'object') {
        file.value = converted;
      }

      return originalParse(converted, file);
    };

    return result;
  };
}

/**
 * Replace \( … \) with $…$ and \[ … \] with $$\n…\n$$,
 * leaving fenced code blocks untouched.
 *
 * @param {string} src
 * @returns {string}
 */
function convertDelimiters(src) {
  // Split on fenced code blocks (``` or ~~~), keeping them in the array.
  const parts = src.split(/(```[\s\S]*?```|~~~[\s\S]*?~~~)/g);

  return parts
    .map((part, i) => {
      if (i % 2 === 1) return part; // fenced code block — leave untouched

      // Display math first (greedy-safe non-greedy across lines).
      return part
        .replace(/\\\[(\s*[\s\S]*?\s*)\\\]/g, (_, tex) => `$$\n${tex.trim()}\n$$`)
        .replace(/\\\(([^]*?)\\\)/g, (_, tex) => `$${tex}$`);
    })
    .join('');
}
