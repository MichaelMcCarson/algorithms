# algorithms

A series of commonly found algorithms, data structures, and algorithmic techniques

## Sliding Window

The sliding window technique is commonly used for problems involving sub-arrays or substrings where you need to find a specific condition, such as the maximum sum of a sub-array of a fixed size, the smallest sub-array with a sum greater than or equal to a given value, or the longest substring with distinct characters.

Finding maximum/minimum sum of sub-arrays.

Finding sub-arrays with a given sum or product.

Finding longest substrings or sub-arrays with certain properties.

Solving problems related to frequency of elements in a sub-array.

The sliding window technique is powerful and versatile, providing an efficient way to tackle a variety of problems involving contiguous sub-arrays or substrings.

### Fixed Size

Fixed Size Sliding Window is used when the size of the window is fixed. The window slides through the array from left to right, and at each step, the window moves one element to the right.

### Variable Size

Variable Size Sliding Window is used when the size of the window is not fixed. The window size can grow or shrink depending on the problem requirements.

## Two Pointers

### Static

Static two-pointers usually move towards each other or away from each other depending on the problem requirements, often used for problems like finding pairs in a sorted array. This technique is commonly used for problems involving searching for pairs, sub-arrays, or sub-lists within an array or list.

### Tortoise and Hare (Floyd's Cycle Detection)

This technique is used to detect cycles in a sequence, often applied to linked list problems.

This technique also works when you want to get to the middle node because the fast is 2x as fast as the slow pointer.

## Binary Search

Binary search is a powerful algorithm used to search for an element in a sorted array. It works by repeatedly dividing the search interval in half, and it is efficient for large arrays. (O(log n)) time complexity.

## Divide and Conquer

The divide and conquer strategy involves breaking a problem down into smaller sub-problems, solving each subproblem recursively, and then combining the results. This technique is used in various algorithms like merge sort, quicksort, and finding the closest pair of points.

## Dynamic Programming

Dynamic programming is a powerful algorithmic technique used to solve problems by breaking them down into overlapping sub-problems. It is used to solve optimization problems, such as the longest common subsequence, the longest increasing subsequence, and the knapsack problem.

## Greedy Algorithms

Greedy algorithms are used to solve optimization problems by making the best choice at each step. They are simple, efficient, and easy to implement, but they may not always provide the optimal solution. Greedy algorithms are used in various problems like the coin change problem, the activity selection problem, and the Huffman coding problem.

## Backtracking

Backtracking is a technique for solving problems incrementally by trying partial solutions and then abandoning them if they are not suitable. It's often used in solving combinatorial problems, constraint satisfaction problems, and puzzles.

## Tree Traversal

Tree traversal is the process of visiting each node in a tree data structure exactly once. There are three main types of tree traversal: in-order, pre-order, and post-order. Tree traversal is used in various algorithms like tree search, tree modification, and tree serialization.

## Hashing

Hashing is a technique that is used to uniquely identify a specific object from a group of similar objects. Some of the most common hashing techniques include the division method, the multiplication method, and the universal hashing method. Hashing is used in various algorithms like hash tables, hash maps, and hash sets.

## Bit Manipulation

Bit manipulation involves directly working with bits to perform operations efficiently. It is commonly used in tasks requiring fast, low-level data processing. Here are some common bit manipulation operations and techniques in TypeScript:

Setting a Bit: Uses the bitwise OR (|) operator to set a bit.
Clearing a Bit: Uses the bitwise AND (&) operator with the complement of the bit to clear.
Toggling a Bit: Uses the bitwise XOR (^) operator to toggle a bit.
Checking a Bit: Uses the bitwise AND (&) operator to check if a bit is set

## Pattern Matching

Pattern matching is a technique used to find the occurrence of a specific pattern within a text or string. It is commonly used in string matching algorithms like the Knuth-Morris-Pratt algorithm, the Rabin-Karp algorithm, and the Boyer-Moore algorithm.

## Graph Algorithms

Solves problems related to graphs, which are mathematical structures used to model pairwise relations between objects. Graphs consist of vertices (nodes) and edges (connections between nodes). Graph algorithms explore, manipulate, and analyze these structures to solve a variety of computational problems.

### Topological Sort

Topological Sort is used to order the vertices of a Directed Acyclic Graph (DAG) such that for every directed edge UV from vertex U to vertex V, U comes before VVV in the ordering. This is often used in scenarios like task scheduling, where certain tasks must be completed before others.

### A Star (A\*)

The A* (A-star) algorithm is a popular path-finding and graph traversal algorithm. It uses heuristics to efficiently find the shortest path from a start node to a goal node in a weighted graph. The algorithm combines the strengths of Dijkstra's algorithm and greedy best-first search by using both the actual distance from the start node and the estimated distance to the goal. The A* algorithm efficiently finds the shortest path by leveraging the heuristic to guide its search.

#### Helper Classes

Node class represents a node in the grid with attributes for position, costs (g, h, f), and parent node.
PriorityQueue class maintains a sorted heap of nodes based on their f values.

#### A Search Algorithm\*

Initialize the open list (priority queue) and closed list.
Create the start node and push it to the open list.
While the open list is not empty, pop the node with the lowest f value.
If the current node is the goal, return it (path found).
Add the current node to the closed list.
Get the neighbors of the current node and calculate their scores.
If a neighbor is in the open list with a higher g score, update it. Otherwise, push it to the open list.

#### Heuristic Function

The Manhattan distance heuristic is used to estimate the distance from a position to the goal.

#### Get Neighbors Function

Returns valid neighbors (adjacent cells that are within the grid bounds and not blocked).

## Number Theory

Solves problems related to integers, such as finding primes or solving modular arithmetic problems.

## Randomized Algorithms (Sampling)

Randomized algorithms are designed to sample a random subset of k items from a larger dataset (or stream) of unknown size 𝑛, where 𝑛 is either unknown in advance or too large to fit into memory.

Applications: It is commonly used in data streaming, large-scale data processing, and situations where it's impractical to store all data in memory.

## Sorting Algorithms

### Bubble Sort

### Insertion Sort

### Selection Sort

### Merge Sort (see divide and conquer)

## Data Structures

### Heap

Heaps are often used to implement priority queues, which allow for efficient retrieval of the highest (or lowest) priority element.

Examples are max-heaps and min-heaps

### Trie

### Segment Tree

### Fenwick Tree

### Suffix Array

### Union Find

Union-Find (also known as Disjoint Set Union, DSU) is a data structure that tracks a set of elements partitioned into disjoint (non-overlapping) subsets. It provides efficient methods for union and find operations, which are useful in various applications, including network connectivity, Kruskal's Minimum Spanning Tree algorithm, and more.
