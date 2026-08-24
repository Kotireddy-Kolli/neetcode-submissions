class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let leftMaxIndex = [],
            rightMaxIndex = [];

        let n = height.length;

        leftMaxIndex[0] = height[0];
        for (let i = 1; i < n; i++) {
            leftMaxIndex[i] = Math.max(leftMaxIndex[i - 1], height[i]);
        }

        rightMaxIndex[n - 1] = height[n - 1];
        for (let i = n - 2; i >= 0; i--) {
            rightMaxIndex[i] = Math.max(rightMaxIndex[i + 1], height[i]);
        }

        let totalWater = 0;
        for (let i = 0; i < n; i++) {
            totalWater += Math.min(leftMaxIndex[i], rightMaxIndex[i]) - height[i];
        }
        return totalWater;
    }
}
