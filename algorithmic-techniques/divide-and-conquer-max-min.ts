function findMaxMin(nums: number[]): { min: number; max: number } {
  function helper(left: number, right: number): { min: number; max: number } {
    if (left === right) {
      return { min: nums[left], max: nums[left] };
    }

    if (right === left + 1) {
      return {
        min: Math.min(nums[left], nums[right]),
        max: Math.max(nums[left], nums[right]),
      };
    }

    const mid = Math.floor((left + right) / 2);
    const leftResult = helper(left, mid);
    const rightResult = helper(mid + 1, right);

    return {
      min: Math.min(leftResult.min, rightResult.min),
      max: Math.max(leftResult.max, rightResult.max),
    };
  }

  return helper(0, nums.length - 1);
}

// Example usage
const nums3 = [5, 3, 8, 4, 2, 7, 1, 6];
const { min, max } = findMaxMin(nums3);
console.log(`Min: ${min}, Max: ${max}`); // Output: Min: 1, Max: 8

// Time Complexity: O(nlog⁡n)
// Space Complexity: O(log⁡n)
