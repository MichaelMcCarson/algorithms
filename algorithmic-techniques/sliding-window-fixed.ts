// --------------------------------------------
// Fixed Size Sliding Window
// --------------------------------------------

// This example finds the maximum sum of a subarray of a fixed size k.

function maxSumSubarray(nums: number[], k: number): number {
  if (nums.length < k) {
    throw new Error("Array length must be at least k");
  }

  let maxSum = 0;
  let windowSum = 0;

  // Calculate the sum of the first window
  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }

  maxSum = windowSum;

  // Slide the window
  for (let i = k; i < nums.length; i++) {
    windowSum += nums[i] - nums[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}

// Example usage
const nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const k1 = 3;
const maxSum = maxSumSubarray(nums1, k1);
console.log(maxSum); // Output: 24 (sum of subarray [7, 8, 9])
