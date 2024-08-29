class SegmentTree {
  private tree: number[];
  private n: number;

  constructor(arr: number[]) {
    this.n = arr.length;
    this.tree = new Array(2 * this.n).fill(0);
    this.build(arr);
  }

  // Build the segment tree from the given array
  private build(arr: number[]): void {
    // Initialize leaves in the tree
    for (let i = 0; i < this.n; i++) {
      this.tree[this.n + i] = arr[i];
    }
    // Build the tree by calculating parents
    for (let i = this.n - 1; i > 0; i--) {
      this.tree[i] = this.tree[2 * i] + this.tree[2 * i + 1];
    }
  }

  // Update the value at index `pos` to `value`
  update(pos: number, value: number): void {
    pos += this.n;
    this.tree[pos] = value;

    // Update parents
    while (pos > 1) {
      pos = Math.floor(pos / 2);
      this.tree[pos] = this.tree[2 * pos] + this.tree[2 * pos + 1];
    }
  }

  // Query the sum in the range [left, right)
  query(left: number, right: number): number {
    left += this.n;
    right += this.n;
    let sum = 0;

    while (left < right) {
      if (left % 2 === 1) {
        sum += this.tree[left];
        left++;
      }
      if (right % 2 === 1) {
        right--;
        sum += this.tree[right];
      }
      left = Math.floor(left / 2);
      right = Math.floor(right / 2);
    }

    return sum;
  }
}

// Example usage:
const arr = [1, 2, 3, 4, 5];
const segTree = new SegmentTree(arr);

console.log(segTree.query(0, 3)); // Output: 6 (1 + 2 + 3)
segTree.update(1, 10);
console.log(segTree.query(0, 3)); // Output: 14 (1 + 10 + 3)

// A Segment Tree is a data structure used for efficient range queries and updates on an array. It's particularly useful for problems involving sum, minimum, maximum, or other associative operations over a range of elements. The Segment Tree allows both point updates and range queries to be performed in O(log⁡n) time.

// Segment Trees are a powerful tool for range queries and updates, providing efficient solutions to problems that would otherwise require O(n)O(n)O(n) operations. They are widely used in competitive programming and various applications involving range queries.

// --------------------------------------------
// Time Complexity
// --------------------------------------------

// Build: O(n)
// Update: O(log⁡n)
// Query: O(log⁡n)

// --------------------------------------------
// Use Cases
// --------------------------------------------

// Range Sum Queries: Efficiently calculate the sum of elements in a range.
// Range Minimum/Maximum Queries: Adapt the merge function to return the minimum/maximum.
// Dynamic Arrays: Handle dynamic updates and queries on arrays where elements are frequently modified.

// --------------------------------------------
// Explanation
// --------------------------------------------

// Tree Construction

// The tree is represented as an array where the leaf nodes (elements of the original array) are stored from index n to 2n-1.
// Internal nodes store the sum of their respective children.
// The build method initializes the tree with the given array values and computes the internal nodes' values.

// Update Operation

// To update a value at a specific position, the corresponding leaf node is updated.
// The change is then propagated upwards to update the internal nodes.

// Range Query Operation

// The query method calculates the sum in the range [left, right).
// The range is adjusted to the leaf nodes' indices, and the sum is calculated by traversing the tree.
