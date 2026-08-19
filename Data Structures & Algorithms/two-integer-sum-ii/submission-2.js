class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let leftIndex = 0,
            rightIndex = numbers.length - 1;
        while (leftIndex < rightIndex) {
            let sum = numbers[leftIndex] + numbers[rightIndex]
            if (sum === target) return [leftIndex + 1, rightIndex + 1];
            if (sum< target) {
                leftIndex++;
            } else {
                rightIndex--;
            }
        }
    }
}

/**
 * [1,2,3,4] sorted in asc
 * if leftmost + rightmost === target then return [leftmostIndex +1 ,rightmostIndex +1]
 * if leftmost + rightmost < target then leftmost++
 * if leftmost + rightmost > target then rightmost--
 */
