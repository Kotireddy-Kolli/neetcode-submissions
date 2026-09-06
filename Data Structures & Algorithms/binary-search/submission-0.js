class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0, right=nums.length-1;

        while(left <= right) {
            let index = Math.floor((left + right)/2);
            if(nums[index] === target) return index;
            if(nums[index] > target) right = index-1;
            if(nums[index] < target) left = index+1;
        }
        return -1;
    }
}
