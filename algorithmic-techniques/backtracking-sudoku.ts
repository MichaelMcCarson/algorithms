// The Sudoku solver fills in the blanks in a 9×9 grid to complete the puzzle while respecting Sudoku rules.

function solveSudoku(board: string[][]): void {
  backtrack();

  function backtrack(): boolean {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] === ".") {
          for (let num = 1; num <= 9; num++) {
            const char = num.toString();
            if (isValid(row, col, char)) {
              board[row][col] = char;
              if (backtrack()) return true;
              board[row][col] = ".";
            }
          }
          return false;
        }
      }
    }
    return true;
  }

  function isValid(row: number, col: number, char: string): boolean {
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === char) return false;
      if (board[i][col] === char) return false;
      if (
        board[Math.floor(row / 3) * 3 + Math.floor(i / 3)][
          Math.floor(col / 3) * 3 + (i % 3)
        ] === char
      )
        return false;
    }
    return true;
  }
}
const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
solveSudoku(board);
console.log(board); // Output: The completed board will be printed
