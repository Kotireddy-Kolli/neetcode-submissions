class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();
        for(let i=0; i<nums.length; i++) {
            const otherEl = target - nums[i];
            if(map.has(otherEl)) {
                return [map.get(otherEl), i]
            }
            map.set(nums[i], i)
        }
    }
}
