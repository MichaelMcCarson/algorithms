// The fractional knapsack problem allows breaking items into smaller pieces. The goal is to maximize the total value in the knapsack.

interface Item {
  weight: number;
  value: number;
}

function fractionalKnapsack(items: Item[], capacity: number): number {
  items.sort((a, b) => b.value / b.weight - a.value / a.weight);

  let totalValue = 0;
  for (const item of items) {
    if (capacity >= item.weight) {
      capacity -= item.weight;
      totalValue += item.value;
    } else {
      totalValue += (item.value / item.weight) * capacity;
      break;
    }
  }

  return totalValue;
}

// Example usage
const items = [
  { weight: 10, value: 60 },
  { weight: 20, value: 100 },
  { weight: 30, value: 120 },
];
const capacity = 50;
console.log(fractionalKnapsack(items, capacity)); // Output: 240
