class MaxHeap {
  private heap: number[];

  constructor() {
    this.heap = [];
  }

  // Returns the index of the parent of the element at index i
  private parent(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  // Returns the index of the left child of the element at index i
  private leftChild(index: number): number {
    return 2 * index + 1;
  }

  // Returns the index of the right child of the element at index i
  private rightChild(index: number): number {
    return 2 * index + 2;
  }

  // Swaps two elements in the heap
  private swap(index1: number, index2: number): void {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  // Heapifies down from the given index
  private heapifyDown(index: number): void {
    let largest = index;
    const left = this.leftChild(index);
    const right = this.rightChild(index);

    if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
      largest = left;
    }

    if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
      largest = right;
    }

    if (largest !== index) {
      this.swap(index, largest);
      this.heapifyDown(largest);
    }
  }

  // Heapifies up from the given index
  private heapifyUp(index: number): void {
    while (index > 0 && this.heap[this.parent(index)] < this.heap[index]) {
      this.swap(index, this.parent(index));
      index = this.parent(index);
    }
  }

  // Inserts a new value into the heap
  insert(value: number): void {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  // Removes and returns the maximum value (root of the heap)
  extractMax(): number | null {
    if (this.heap.length === 0) {
      return null;
    }

    const max = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0 && end !== undefined) {
      this.heap[0] = end;
      this.heapifyDown(0);
    }

    return max;
  }

  // Returns the maximum value (root of the heap) without removing it
  peek(): number | null {
    return this.heap.length > 0 ? this.heap[0] : null;
  }

  // Returns the size of the heap
  size(): number {
    return this.heap.length;
  }

  // Prints the heap (for debugging purposes)
  print(): void {
    console.log(this.heap);
  }
}

// Example usage
const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(20);
maxHeap.insert(5);
maxHeap.insert(30);

console.log("Max value:", maxHeap.peek()); // Output: 30
console.log("Extracted max value:", maxHeap.extractMax()); // Output: 30
console.log("Max value after extraction:", maxHeap.peek()); // Output: 20
maxHeap.print(); // Output: [20, 10, 5]
