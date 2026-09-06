class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let rows = matrix.length;
        let cols = matrix[0].length;

        let left = 0;
        let right = rows * cols - 1;

        while (left <= right) {
            let midIndex = Math.floor((left + right) / 2);

            let row = Math.floor(midIndex / cols);
            let col = midIndex % cols;

            if (matrix[row][col] === target) {
                return true;
            }

            if (matrix[row][col] > target) {
                right = midIndex - 1;
            } else {
                left = midIndex + 1;
            }
        }

        return false;
    }
}
/**
 * I need to find a way to convert the index's into rows and cols
 * row = %
 * col = /
 */