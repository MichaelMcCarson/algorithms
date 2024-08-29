// Given an infinite supply of coins of different denominations, find the minimum number of coins required to make a certain amount of money.Note that this approach may not work for all denominations, but it works for common cases like US currency.

function coinChangeGreedy(coins: number[], amount: number): number[] {
  coins.sort((a, b) => b - a);

  const result: number[] = [];
  for (const coin of coins) {
    while (amount >= coin) {
      amount -= coin;
      result.push(coin);
    }
  }

  return amount === 0 ? result : []; // If amount is not 0, no solution
}

// Example usage
const availableCoins = [1, 2, 5, 10, 20, 50, 100];
const desiredAmount = 93;
console.log(coinChangeGreedy(availableCoins, desiredAmount)); // Output: [50, 20, 20, 2, 1]
