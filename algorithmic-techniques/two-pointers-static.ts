// --------------------------------------------
// Static Two Pointers
// --------------------------------------------

function twoPointerTechnique(
  nums: number[],
  target: number
): [number, number] | null {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return null; // No pair found
}

// Example usage
const nums = [1, 2, 3, 4, 6];
const target = 5;
const result = twoPointerTechnique(nums, target);
console.log(result); // Output: [0, 3] (since nums[0] + nums[3] = 1 + 4 = 5)
