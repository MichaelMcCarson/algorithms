function insertionSort(arr: number[]): number[] {
  let n = arr.length;

  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;

    // Move elements of arr[0..i-1], that are greater than key, to one position ahead of their current position
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }

  return arr;
}

// Example usage
const insertionArray = [64, 25, 12, 22, 11];
console.log("Sorted array:", insertionSort(insertionArray));
