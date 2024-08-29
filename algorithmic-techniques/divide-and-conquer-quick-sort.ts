// --------------------------------------------
// Quick Sort
// --------------------------------------------

// Quick Sort is another classic divide-and-conquer algorithm. It picks a pivot element, partitions the array around the pivot, and then recursively sorts the subarrays.

function quickSort(nums: number[]): number[] {
  if (nums.length <= 1) {
    return nums;
  }

  const pivot = nums[Math.floor(nums.length / 2)];
  const left = nums.filter((x) => x < pivot);
  const middle = nums.filter((x) => x === pivot);
  const right = nums.filter((x) => x > pivot);

  return quickSort(left).concat(middle).concat(quickSort(right));
}

// Example usage
const quickSortNums = [5, 3, 8, 4, 2, 7, 1, 6];
const sortedNums2 = quickSort(quickSortNums);
console.log(sortedNums2); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

// Best-case: O(nlog⁡n) (when the pivot divides the array into two nearly equal halves)
// Average-case: O(nlog⁡n)
// Worst-case: O(n^2) (when the pivot is the smallest or largest element, leading to highly unbalanced partitions)

// Space:
// In-place version: O(log⁡n) (due to the recursion stack)
// Out-of-place version: O(n)
