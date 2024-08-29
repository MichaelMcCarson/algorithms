function sieveOfEratosthenes(n: number): number[] {
  // Create an array of true values indicating that all numbers are initially considered prime
  const isPrime = new Array(n + 1).fill(true);
  isPrime[0] = isPrime[1] = false; // 0 and 1 are not primes

  // Iterate over each number from 2 to the square root of n
  for (let p = 2; p * p <= n; p++) {
    // If isPrime[p] is not changed, it is a prime
    if (isPrime[p]) {
      // Update all multiples of p to not prime
      for (let multiple = p * p; multiple <= n; multiple += p) {
        isPrime[multiple] = false;
      }
    }
  }
  // Collect all prime numbers
  const primes: number[] = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) {
      primes.push(i);
    }
  }

  return primes;
}

// Example usage:
const primesUpTo100 = sieveOfEratosthenes(100);
console.log(primesUpTo100); // Output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

// The Sieve of Eratosthenes is a classic algorithm used to find all prime numbers up to a specified integer nnn. It works by iteratively marking the multiples of each prime starting from 2.

// --------------------------------------------
// Explanation
// --------------------------------------------

// Initialization

// Create an array isPrime of size n + 1 and initialize all elements to true.
// Set isPrime[0] and isPrime[1] to false since 0 and 1 are not prime.

// Mark Non-Primes

// For each integer p starting from 2, if isPrime[p] is true, mark all multiples of p starting from p2p^2p2 up to n as false.

// Collect Primes

// Iterate through the isPrime array and collect indices where the value is true.These indices represent the prime numbers.

// --------------------------------------------
// Time Complexity
// --------------------------------------------

// The time complexity of the Sieve of Eratosthenes is O(n⁡log⁡n), which is very efficient for finding all prime numbers up to a large number n.

// --------------------------------------------
// Space Complexity
// --------------------------------------------

// The space complexity is O(n) due to the array isPrime used to keep track of prime numbers.

// --------------------------------------------
// Use Cases
// --------------------------------------------

// Prime Number Generation: Efficiently generate a list of prime numbers up to a specified limit.
// Cryptography: Prime numbers are essential in cryptographic algorithms.
// Mathematical Applications: Various mathematical problems and algorithms require lists of prime numbers.
