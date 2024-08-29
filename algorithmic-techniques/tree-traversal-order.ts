class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(
    value: number,
    left: TreeNode | null = null,
    right: TreeNode | null = null
  ) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// --------------------------------------------
// In-order Traversal (Left, Root, Right)
// --------------------------------------------

// In-order traversal visits the left subtree, the root node, and then the right subtree. This traversal results in visiting the nodes in ascending order for binary search trees.

function inorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];
  function traverse(node: TreeNode | null) {
    if (node === null) return;
    traverse(node.left);
    result.push(node.value);
    traverse(node.right);
  }
  traverse(root);
  return result;
}

// Example usage
const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
console.log(inorderTraversal(root)); // Output: [1, 3, 2]

// --------------------------------------------
// Pre-order Traversal (Root, Left, Right)
// --------------------------------------------

// Pre-order traversal visits the root node, the left subtree, and then the right subtree. This traversal is useful for copying a tree.

function preorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];
  function traverse(node: TreeNode | null) {
    if (node === null) return;
    result.push(node.value);
    traverse(node.left);
    traverse(node.right);
  }
  traverse(root);
  return result;
}

console.log(preorderTraversal(root)); // Output: [1, 2, 3]

// --------------------------------------------
// Post-order Traversal (Left, Right, Root)
// --------------------------------------------

// Post-order traversal visits the left subtree, the right subtree, and then the root node. This traversal is useful for deleting or freeing nodes in a tree.

function postorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];
  function traverse(node: TreeNode | null) {
    if (node === null) return;
    traverse(node.left);
    traverse(node.right);
    result.push(node.value);
  }
  traverse(root);
  return result;
}

console.log(postorderTraversal(root)); // Output: [3, 2, 1]

// Constructing the following tree:
//       1
//        \
//         2
//        /
//       3
const secondRoot = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));

// In-order Traversal: [1, 3, 2]
console.log("In-order:", inorderTraversal(secondRoot));

// Pre-order Traversal: [1, 2, 3]
console.log("Pre-order:", preorderTraversal(secondRoot));

// Post-order Traversal: [3, 2, 1]
console.log("Post-order:", postorderTraversal(secondRoot));
