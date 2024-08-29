// --------------------------------------------
// Trie (Prefix Tree)
// --------------------------------------------

class TrieNode {
  children: Map<string, TrieNode>;
  isEndOfWord: boolean;

  constructor() {
    this.children = new Map<string, TrieNode>();
    this.isEndOfWord = false;
  }
}

class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  // Insert a word into the Trie
  insert(word: string): void {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char)!;
    }
    node.isEndOfWord = true;
  }

  // Search for a word in the Trie
  search(word: string): boolean {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char)!;
    }
    return node.isEndOfWord;
  }

  // Check if any word in the Trie starts with the given prefix
  startsWith(prefix: string): boolean {
    let node = this.root;
    for (const char of prefix) {
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char)!;
    }
    return true;
  }
}

// Example

const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple")); // Output: true
console.log(trie.search("app")); // Output: false
console.log(trie.startsWith("app")); // Output: true
trie.insert("app");
console.log(trie.search("app")); // Output: true

// A Trie, also known as a Prefix Tree, is a tree-like data structure used to efficiently store and retrieve keys in a dataset of strings. It is particularly useful for implementing dictionary-like structures and solving problems involving prefix search, auto-completion, and spell-checking.

// Tries are an efficient data structure for prefix-based searches and provide a good alternative to hash tables for storing strings, especially when dealing with dynamic sets of strings where frequent insertions and deletions occur.

// --------------------------------------------
// Time Complexity
// --------------------------------------------

// Insert: O(m), where m is the length of the word.
// Search: O(m)
// StartsWith: O(m)

// --------------------------------------------
// Use Cases
// --------------------------------------------

// Dictionary and Spell Checking: Efficiently store and check if words exist in a large dictionary.
// Auto-Completion: Quickly find all words with a given prefix for auto-complete features.
// IP Routing: Used in networking to store and search IP prefixes efficiently.
// Genome Sequencing: Store and search DNA sequences.

// --------------------------------------------
// Explanation
// --------------------------------------------

// TrieNode Class

// children: A map storing the child nodes for each character.
// isEndOfWord: A boolean flag indicating whether the node represents the end of a word.

// Trie Class

// insert: Adds a word to the Trie. For each character in the word, it checks if the character is already a child of the current node. If not, it adds a new TrieNode. Finally, it marks the last node as the end of the word.
// search: Checks if a word exists in the Trie. It traverses the Trie following the characters of the word. If it reaches a node that does not have the required child, it returns false. If it successfully traverses the word and reaches a node marked as the end of the word, it returns true.
// startsWith: Checks if there is any word in the Trie that starts with the given prefix. It traverses the Trie following the characters of the prefix. If it reaches a node that does not have the required child, it returns false. If it successfully traverses the prefix, it returns true.
