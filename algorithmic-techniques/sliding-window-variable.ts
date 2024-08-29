// This example finds the smallest subarray with a sum greater than or equal to a given value.

function minSubArrayLen(target: number, nums: number[]): number {
  let minLength = Infinity;
  let windowSum = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    windowSum += nums[right];

    while (windowSum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      windowSum -= nums[left];
      left++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

// Example usage
const trgt = 15;
const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const minLength = minSubArrayLen(trgt, nums2);
console.log(minLength); // Output: 2 (subarray [7, 8] or [8, 7])
