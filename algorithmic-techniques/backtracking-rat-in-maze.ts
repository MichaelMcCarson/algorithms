// Find a path for a rat to move from the top-left to the bottom-right of a maze.

function ratInMaze(maze: number[][]): number[][] | null {
  const n = maze.length;
  const solution: number[][] = Array.from({ length: n }, () =>
    Array(n).fill(0)
  );

  if (backtrack(0, 0)) {
    return solution;
  } else {
    return null;
  }

  function backtrack(x: number, y: number): boolean {
    if (x === n - 1 && y === n - 1 && maze[x][y] === 1) {
      solution[x][y] = 1;
      return true;
    }

    if (isSafe(x, y)) {
      solution[x][y] = 1;
      if (backtrack(x + 1, y)) return true;
      if (backtrack(x, y + 1)) return true;
      solution[x][y] = 0; // Backtrack
    }

    return false;
  }

  function isSafe(x: number, y: number): boolean {
    return x >= 0 && x < n && y >= 0 && y < n && maze[x][y] === 1;
  }
}

// Example usage
const maze = [
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [0, 1, 0, 0],
  [1, 1, 1, 1],
];
const ratInMazeResult = ratInMaze(maze);
console.log(ratInMazeResult);
// Output: [
//   [1, 0, 0, 0],
//   [1, 1, 0, 0],
//   [0, 1, 0, 0],
//   [0, 1, 1, 1]
// ]
