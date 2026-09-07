class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        function find(left, right) {
            if(left > right) return -1;
            const middleIndex = Math.floor((left+right)/2);
            if(nums[middleIndex] === target) return middleIndex;
            if(nums[middleIndex] > target) return find(left, middleIndex-1);
            if(nums[middleIndex] < target) return find(middleIndex+1, right);
        }
        return find(0, nums.length-1);
    }
}
