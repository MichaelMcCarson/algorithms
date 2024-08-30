function bubbleSort(arr: number[]): number[] {
  let n = arr.length;
  let swapped: boolean;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap arr[i] and arr[i + 1]
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
    n--; // Reduce the range for the next pass
  } while (swapped);

  return arr;
}

// Example usage
const bubbleArray = [64, 25, 12, 22, 11];
console.log("Sorted array:", bubbleSort(bubbleArray));
