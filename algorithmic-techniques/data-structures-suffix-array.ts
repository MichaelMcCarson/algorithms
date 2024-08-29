class SuffixArray {
  private text: string;
  private suffixes: { index: number; suffix: string }[];

  constructor(text: string) {
    this.text = text;
    this.suffixes = this.buildSuffixArray(text);
  }

  // Build the suffix array
  private buildSuffixArray(text: string): { index: number; suffix: string }[] {
    const suffixes: { index: number; suffix: string }[] = [];

    // Generate all suffixes
    for (let i = 0; i < text.length; i++) {
      suffixes.push({ index: i, suffix: text.substring(i) });
    }

    // Sort suffixes lexicographically
    suffixes.sort((a, b) => a.suffix.localeCompare(b.suffix));

    return suffixes;
  }

  // Search for a substring using the suffix array
  public search(substring: string): number[] {
    const results: number[] = [];
    let l = 0;
    let r = this.suffixes.length - 1;

    // Perform binary search to find the substring
    while (l <= r) {
      const mid = Math.floor((l + r) / 2);
      const suffix = this.suffixes[mid].suffix;

      if (suffix.startsWith(substring)) {
        // If the substring is found, collect all matching indices
        let i = mid;
        while (i >= 0 && this.suffixes[i].suffix.startsWith(substring)) {
          results.push(this.suffixes[i].index);
          i--;
        }
        i = mid + 1;
        while (
          i < this.suffixes.length &&
          this.suffixes[i].suffix.startsWith(substring)
        ) {
          results.push(this.suffixes[i].index);
          i++;
        }
        break;
      } else if (suffix < substring) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }

    return results;
  }

  // Print the suffix array
  public print(): void {
    this.suffixes.forEach((suffix) =>
      console.log(`Index: ${suffix.index}, Suffix: ${suffix.suffix}`)
    );
  }
}

// Example usage
const text = "banana";
const suffixArray = new SuffixArray(text);

// Print suffix array
console.log("Suffix Array:");
suffixArray.print();

// Search for a substring
const substring = "ana";
const positions = suffixArray.search(substring);
console.log(`Positions of substring "${substring}":`, positions);

// A Suffix Array is a specialized data structure used primarily in string processing and computational biology. It is designed to efficiently solve various problems related to substrings and string matching. Here’s how you should categorize it:

// --------------------------------------------
// Category: Data Structures
// --------------------------------------------

// Suffix Arrays fall under the category of advanced data structures used for string processing and text manipulation.

// --------------------------------------------
// Applications
// --------------------------------------------

// Suffix Arrays are particularly useful for:

// 1. Substring Search: Quickly finding occurrences of a substring within a larger string.
// 2. Pattern Matching: Efficiently finding patterns within strings, which is crucial for text processing tasks.
// 3. Lexicographical Sorting: Sorting all suffixes of a string in lexicographical order.
// 4. Longest Common Prefix (LCP) Array: Constructing the LCP array, which is useful for various string algorithms.

// --------------------------------------------
// Operations
// --------------------------------------------

// Suffix Arrays support several operations efficiently:

// 1. Construction: Building the suffix array from a string. This can be done in \(O(n \log n)\) or \(O(n)\) time, depending on the algorithm used.
// 2. Query: Finding the position of a substring in the array, which can be done in \(O(\log n)\) time using binary search.
// 3. Rank and LCP Queries: Finding the rank of a suffix or computing the longest common prefix between consecutive suffixes, both of which are facilitated by the suffix array and its associated LCP array.

// --------------------------------------------
// Summary
// --------------------------------------------

// Suffix Arrays are best categorized under advanced data structures and are specifically tailored for string processing and text analysis. They are invaluable for efficiently solving complex problems related to substrings, pattern matching, and text manipulation.
