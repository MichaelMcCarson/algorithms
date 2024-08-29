function boyerMoore(text: string, pattern: string): number[] {
  const m = pattern.length;
  const n = text.length;
  const result: number[] = [];

  if (m === 0 || n === 0 || m > n) {
    return result;
  }

  const badCharTable = buildBadCharTable(pattern);
  const goodSuffixTable = buildGoodSuffixTable(pattern);

  let s = 0; // s is the shift of the pattern with respect to text
  while (s <= n - m) {
    let j = m - 1;

    // Keep reducing j while characters of pattern and text are matching
    while (j >= 0 && pattern[j] === text[s + j]) {
      j--;
    }

    // If the pattern is present at current shift
    if (j < 0) {
      result.push(s);
      s += s + m < n ? m - badCharTable[text.charCodeAt(s + m)] : 1;
    } else {
      s += Math.max(
        1,
        j - badCharTable[text.charCodeAt(s + j)],
        goodSuffixTable[j]
      );
    }
  }

  return result;
}

function buildBadCharTable(pattern: string): number[] {
  const size = 256; // Size of the ASCII character set
  const table = new Array(size).fill(-1);

  for (let i = 0; i < pattern.length; i++) {
    table[pattern.charCodeAt(i)] = i;
  }

  return table;
}

function buildGoodSuffixTable(pattern: string): number[] {
  const m = pattern.length;
  const table = new Array(m).fill(m);
  let lastPrefixPosition = m;

  for (let i = m - 1; i >= 0; i--) {
    if (isPrefix(pattern, i + 1)) {
      lastPrefixPosition = i + 1;
    }
    table[m - 1 - i] = lastPrefixPosition - i + m - 1;
  }

  for (let i = 0; i < m - 1; i++) {
    const slen = suffixLength(pattern, i);
    table[slen] = m - 1 - i + slen;
  }

  return table;
}

function isPrefix(pattern: string, p: number): boolean {
  const m = pattern.length;
  for (let i = p, j = 0; i < m; i++, j++) {
    if (pattern[i] !== pattern[j]) {
      return false;
    }
  }
  return true;
}

function suffixLength(pattern: string, p: number): number {
  const m = pattern.length;
  let len = 0;

  for (let i = p, j = m - 1; i >= 0 && pattern[i] === pattern[j]; i--, j--) {
    len++;
  }

  return len;
}

// Example usage:
const text = "ABAAABCD";
const pattern = "ABC";
const occurrences = boyerMoore(text, pattern);

console.log(`Pattern found at indices: ${occurrences}`); // Output: Pattern found at indices: 4
