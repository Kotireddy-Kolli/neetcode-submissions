class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0, right = nums.length-1;
        let res = nums[0];
        // let minimum_element = Number.POSITIVE_INFINITY;
        while(left <= right) {
            if(nums[left] <= nums[right]) {
                res = Math.min(res, nums[left])
                break;
            }

            let midIndex = Math.floor((left + right) / 2);

            res = Math.min(res, nums[midIndex]);
            if(nums[midIndex] >= nums[left]) {
                left = midIndex + 1;
            } else {
                right = midIndex - 1;
            }

        }
        return res;
    }
}

/**
 * [1,2,3,4,5,6]
 * I need to maintaing currLowest el ?
 * If midEl's rightEl is less than midEl return the rightEl
 * I can check the leftEl is less than rightEl or not
 *  if not then lowest el is on right side
 */