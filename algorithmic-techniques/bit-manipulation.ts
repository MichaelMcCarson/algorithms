// --------------------------------------------
// Checking if a Number is a Power of Two
// --------------------------------------------

function isPowerOfTwo(num: number): boolean {
  return num > 0 && (num & (num - 1)) === 0;
}

// Example usage
console.log(isPowerOfTwo(4)); // Output: true (binary: 0100)
console.log(isPowerOfTwo(5)); // Output: false (binary: 0101)

// --------------------------------------------
// Finding the Only Non-Repeated Element
// --------------------------------------------

// Given an array where every element appears twice except for one, find the non-repeated element:

function findSingle(arr: number[]): number {
  return arr.reduce((acc, num) => acc ^ num, 0);
}

// Example usage
console.log(findSingle([2, 3, 5, 4, 5, 3, 4])); // Output: 2

function singleNumber(nums: number[]): number {
  let result = 0;
  for (const num of nums) {
    result ^= num;
  }
  return result;
}

// Example usage
console.log(singleNumber([2, 2, 1])); // Output: 1
console.log(singleNumber([4, 1, 2, 1, 2])); // Output: 4
console.log(singleNumber([1])); // Output: 1
