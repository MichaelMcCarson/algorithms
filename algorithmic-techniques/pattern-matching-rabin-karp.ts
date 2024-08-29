function rabinKarp(text: string, pattern: string): number[] {
  const prime = 101; // A prime number used as the base for the hash function
  const n = text.length;
  const m = pattern.length;
  const result: number[] = [];

  // Calculate the hash value of the pattern and the first window of text
  let patternHash = 0;
  let textHash = 0;
  let h = 1;

  // The value of h would be "pow(d, M-1)%q"
  for (let i = 0; i < m - 1; i++) {
    h = (h * 256) % prime;
  }

  // Calculate the hash value of the pattern and first window of text
  for (let i = 0; i < m; i++) {
    patternHash = (256 * patternHash + pattern.charCodeAt(i)) % prime;
    textHash = (256 * textHash + text.charCodeAt(i)) % prime;
  }

  // Slide the pattern over text one by one
  for (let i = 0; i <= n - m; i++) {
    // Check if the hash values of the current window of text and the pattern are the same
    if (patternHash === textHash) {
      // Check for characters one by one
      let j;
      for (j = 0; j < m; j++) {
        if (text[i + j] !== pattern[j]) {
          break;
        }
      }
      // If the hash values match and all characters match, store the index
      if (j === m) {
        result.push(i);
      }
    }

    // Calculate the hash value for the next window of text: Remove leading digit, add trailing digit
    if (i < n - m) {
      textHash =
        (256 * (textHash - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) %
        prime;

      // We might get a negative value of t, converting it to positive
      if (textHash < 0) {
        textHash = textHash + prime;
      }
    }
  }

  return result;
}

// Example usage:
const rbText = "ABCCDDAEFG";
const rbPattern = "CDD";
const occurrences = rabinKarp(rbText, rbPattern);

console.log(`Pattern found at indices: ${occurrences}`); // Output: Pattern found at indices: 2
