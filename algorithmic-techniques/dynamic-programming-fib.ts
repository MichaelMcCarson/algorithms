// --------------------------------------------
// Top-Down Approach (Memoization)
// --------------------------------------------

function fibMemo(n: number, memo: number[] = []): number {
  if (n <= 1) return n;
  if (memo[n] !== undefined) return memo[n];

  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  return memo[n];
}

// Example usage
console.log(fibMemo(10)); // Output: 55

// Time Complexity: O(n)
// Space Complexity: O(n)

// --------------------------------------------
// Bottom-Up Approach (Tabulation)
// --------------------------------------------

function fibTab(n: number): number {
  if (n <= 1) return n;

  let prev2 = 0,
    prev1 = 1;
  for (let i = 2; i <= n; i++) {
    const current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }
  return prev1;
}

console.log(fibTab(10)); // Output: 55

// Time Complexity: O(n)
// Space Complexity: O(1)
