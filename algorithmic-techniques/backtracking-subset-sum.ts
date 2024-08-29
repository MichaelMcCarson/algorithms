// Finding all subsets of a given set that sum up to a given target.

function subsetSum(nums: number[], target: number): number[][] {
  const results: number[][] = [];

  function backtrack(
    start: number,
    currentSubset: number[],
    currentSum: number
  ) {
    if (currentSum === target) {
      results.push([...currentSubset]);
      return;
    }

    for (let i = start; i < nums.length; i++) {
      if (currentSum + nums[i] > target) continue;
      currentSubset.push(nums[i]);
      backtrack(i + 1, currentSubset, currentSum + nums[i]);
      currentSubset.pop();
    }
  }

  backtrack(0, [], 0);
  return results;
}

// Example usage
const subsetSumNums = [2, 3, 5, 7];
const subsetSumTarget = 10;
console.log(subsetSum(subsetSumNums, subsetSumTarget));

// Output: [
//   [3, 7],
//   [2, 3, 5]
// ]
