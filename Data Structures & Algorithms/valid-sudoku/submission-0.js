class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // checking rows & cols
        for (let i = 0; i < board.length; i++) {
            let rowsSet = new Set();
            let colsSet = new Set();
            for (let j = 0; j < board.length; j++) {
                let currRowEl = board[i][j];
                let currColEl = board[j][i]
                if (currRowEl !== '.' && rowsSet.has(currRowEl)) return false;
                rowsSet.add(currRowEl);
                if (currColEl !== '.' && colsSet.has(board[j][i])) return false;
                colsSet.add(currColEl);
            }
        }
        // checking squares
        for (let square = 0; square < 9; square++) {
            let squareSet = new Set();
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    let row = Math.floor(square/3) * 3 + i;
                    let col = Math.floor(square%3) * 3 + j;
                    if (board[row][col] === '.') continue;
                    if(squareSet.has(board[row][col])) return false;
                    squareSet.add(board[row][col])
                }
            }
        }
        return true;
    }
}
