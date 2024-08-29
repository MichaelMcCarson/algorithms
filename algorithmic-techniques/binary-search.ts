// --------------------------------------------
// Iterative Approach
// --------------------------------------------

function binarySearch(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // Target not found
}

// Example usage
const iterativeNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const iterativeTarget = 5;
const iterativeResult = binarySearch(iterativeNums, iterativeTarget);
console.log(iterativeResult); // Output: 4 (since nums[4] = 5)

// --------------------------------------------
// Recursive Approach
// --------------------------------------------

function binarySearchRecursive(
  nums: number[],
  target: number,
  left: number,
  right: number
): number {
  if (left > right) {
    return -1; // Target not found
  }

  const mid = Math.floor((left + right) / 2);

  if (nums[mid] === target) {
    return mid;
  } else if (nums[mid] < target) {
    return binarySearchRecursive(nums, target, mid + 1, right);
  } else {
    return binarySearchRecursive(nums, target, left, mid - 1);
  }
}

// Example usage
const recursiveNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const recursiveTarget = 5;
const recursiveResult = binarySearchRecursive(
  recursiveNums,
  recursiveTarget,
  0,
  recursiveNums.length - 1
);
console.log(recursiveResult); // Output: 4 (since nums[4] = 5)

// --------------------------------------------
// Binary Search on a Custom Comparator
// --------------------------------------------

// If you need to perform a binary search on a more complex data structure or with a custom comparator, you can modify the binary search algorithm as follows:

type Comparator<T> = (a: T, b: T) => number;

function binarySearchWithComparator<T>(
  arr: T[],
  target: T,
  comparator: Comparator<T>
): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const compare = comparator(arr[mid], target);

    if (compare === 0) {
      return mid;
    } else if (compare < 0) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // Target not found
}

// Example usage with custom comparator
interface Person {
  name: string;
  age: number;
}

const people: Person[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "Dave", age: 40 },
];

const targetPerson: Person = { name: "Charlie", age: 35 };

const personComparator: Comparator<Person> = (a, b) => a.age - b.age;

const comparatorResult = binarySearchWithComparator(
  people,
  targetPerson,
  personComparator
);
console.log(comparatorResult); // Output: 2 (since Charlie is at index 2)
