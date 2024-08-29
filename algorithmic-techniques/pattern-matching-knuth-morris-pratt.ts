// --------------------------------------------
// Step 1: Compute the Prefix Table
// --------------------------------------------

function computePrefixTable(pattern: string): number[] {
  const prefixTable: number[] = new Array(pattern.length).fill(0);
  let j = 0;

  for (let i = 1; i < pattern.length; i++) {
    while (j > 0 && pattern[i] !== pattern[j]) {
      j = prefixTable[j - 1];
    }
    if (pattern[i] === pattern[j]) {
      j++;
    }
    prefixTable[i] = j;
  }
  return prefixTable;
}

// --------------------------------------------
// Step 2: KMP Search Algorithm
// --------------------------------------------

function kmpSearch(text: string, pattern: string): number[] {
  const prefixTable = computePrefixTable(pattern);
  const result: number[] = [];
  let j = 0;

  for (let i = 0; i < text.length; i++) {
    while (j > 0 && text[i] !== pattern[j]) {
      j = prefixTable[j - 1];
    }
    if (text[i] === pattern[j]) {
      j++;
    }
    if (j === pattern.length) {
      result.push(i - j + 1);
      j = prefixTable[j - 1];
    }
  }
  return result;
}

// Example

const text = "ababcababcabc";
const pattern = "abc";
const matches = kmpSearch(text, pattern);
console.log(matches); // Output: [2, 7, 10]
