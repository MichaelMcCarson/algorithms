// The N-Queens problem involves placing N queens on an N×N chessboard so that no two queens threaten each other.

function solveNQueens(n: number): string[][] {
  const solutions: string[][] = [];
  const board: string[] = Array(n).fill(".".repeat(n));
  backtrack(0);
  return solutions;

  function backtrack(row: number) {
    if (row === n) {
      solutions.push([...board]);
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isSafe(row, col)) {
        board[row] = ".".repeat(col) + "Q" + ".".repeat(n - col - 1);
        backtrack(row + 1);
        board[row] = ".".repeat(n);
      }
    }
  }

  function isSafe(row: number, col: number): boolean {
    for (let i = 0; i < row; i++) {
      if (board[i][col] === "Q") return false;
      if (col - (row - i) >= 0 && board[i][col - (row - i)] === "Q")
        return false;
      if (col + (row - i) < n && board[i][col + (row - i)] === "Q")
        return false;
    }
    return true;
  }
}

// Example usage
console.log(solveNQueens(4));
// Output: [
//   [".Q..", "...Q", "Q...", "..Q."],
//   ["..Q.", "Q...", "...Q", ".Q.."]
// ]
