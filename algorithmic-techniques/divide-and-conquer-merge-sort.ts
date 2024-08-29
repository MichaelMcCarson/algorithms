// --------------------------------------------
// Merge Sort
// --------------------------------------------

// Merge Sort is a classic example of the divide and conquer technique. It divides the array into two halves, recursively sorts each half, and then merges the sorted halves.

function mergeSort(nums: number[]): number[] {
  if (nums.length <= 1) {
    return nums;
  }

  const mid = Math.floor(nums.length / 2);
  const left = mergeSort(nums.slice(0, mid));
  const right = mergeSort(nums.slice(mid));

  return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
  const sortedArray: number[] = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sortedArray.push(left[i]);
      i++;
    } else {
      sortedArray.push(right[j]);
      j++;
    }
  }

  return sortedArray.concat(left.slice(i)).concat(right.slice(j));
}

// Example usage
const mergeSortNums = [5, 3, 8, 4, 2, 7, 1, 6];
const sortedNums = mergeSort(mergeSortNums);
console.log(sortedNums); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

// Best-case time complexity: O(nlog⁡n)
// Average-case time complexity: O(nlog⁡n)
// Worst-case time complexity: O(nlog⁡n)
// space complexity of merge sort is O(n)O(n)O(n) due to the additional space needed for the temporary arrays used during the merge process.
