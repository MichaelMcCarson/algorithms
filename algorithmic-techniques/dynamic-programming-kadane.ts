function maxSubArray(nums: number[]): number {
  // Initialize variables to store the maximum sum so far and the current sum
  let maxSoFar = nums[0];
  let maxEndingHere = nums[0];

  // Traverse through the array starting from the second element
  for (let i = 1; i < nums.length; i++) {
    // Update maxEndingHere to be the maximum of the current element or the sum of the current element and the previous subarray sum
    maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);

    // Update maxSoFar to be the maximum of itself and maxEndingHere
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}
