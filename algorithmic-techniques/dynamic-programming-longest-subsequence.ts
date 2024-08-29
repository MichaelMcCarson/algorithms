// Longest Increasing Subsequence

function lengthOfLIS(nums: number[]): number {
  if (nums.length === 0) return 0;

  const dp: number[] = new Array(nums.length).fill(1);
  let maxLength = 1;

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    maxLength = Math.max(maxLength, dp[i]);
  }
  return maxLength;
}
const lisNums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(lisNums)); // Output: 4 (LIS is [2, 3, 7, 18])
