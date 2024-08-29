// --------------------------------------------
// Fenwick Tree(Binary Indexed Tree (BIT))
// --------------------------------------------

class FenwickTree {
  private tree: number[];

  constructor(size: number) {
    this.tree = new Array(size + 1).fill(0);
  }

  // Update operation: Add 'delta' to index 'i' in the original array
  update(index: number, delta: number): void {
    index++; // Fenwick Tree uses 1-based indexing
    while (index < this.tree.length) {
      this.tree[index] += delta;
      index += index & -index; // Move to the parent in the Fenwick Tree
    }
  }

  // Prefix sum query: Get sum of elements from index 0 to i in the original array
  query(index: number): number {
    index++; // Fenwick Tree uses 1-based indexing
    let sum = 0;
    while (index > 0) {
      sum += this.tree[index];
      index -= index & -index; // Move to the parent in the Fenwick Tree
    }
    return sum;
  }
}

const nums = [1, 3, 5, 2, 6, 8];
const ft = new FenwickTree(nums.length);
// Initialize Fenwick Tree with initial values
for (let i = 0; i < nums.length; i++) {
  ft.update(i, nums[i]);
}

console.log("Prefix sum from 0 to 3:", ft.query(3)); // Output: 11 (1 + 3 + 5 + 2 = 11)

// Update element at index 2 (5) to a new value 7
const oldValue = nums[2];
const newValue = 7;
const delta = newValue - oldValue;
nums[2] = newValue;
ft.update(2, delta);

console.log("Prefix sum from 0 to 3 after update:", ft.query(3)); // Output: 13 (1 + 3 + 7 + 2 = 13)

// The Fenwick Tree, also known as a Binary Indexed Tree (BIT), is a data structure that allows efficient computation of prefix sums and point updates in an array of numbers. It supports two main operations efficiently:

// Prefix Sum Query: Compute the sum of elements from the start of the array up to a given index.
// Update: Modify the value of an element in the array and adjust the Fenwick Tree structure accordingly.

// --------------------------------------------
// Explanation
// --------------------------------------------

// Class FenwickTree
// The constructor initializes a Fenwick Tree of a specified size with an internal array tree of size size + 1 (1-based indexing convention).
// Method update(index, delta):
// Updates the Fenwick Tree by adding delta to the element at index in the original array. It uses the Fenwick Tree's update mechanism to propagate the changes efficiently.
// Method query(index):
// Computes the prefix sum of elements from index 0 to index in the original array using the Fenwick Tree structure. It iterates up the tree, summing the necessary elements to compute the prefix sum.
// Example Usage:
// Demonstrates how to initialize a Fenwick Tree with initial values, perform prefix sum queries, and update values efficiently.

// --------------------------------------------
// Key Operations Complexity
// --------------------------------------------

// Update Operation: O(log n), where n is the size of the Fenwick Tree.
// Query Operation: O(log n), where n is the size of the Fenwick Tree.
// These operations are efficient compared to naive approaches like iterating through arrays, especially when the number of operations is large or when updates and queries need to be performed dynamically. The Fenwick Tree is particularly useful in scenarios where frequent prefix sum queries and point updates are required, such as in dynamic range sum computations or in solving certain algorithmic problems efficiently.
