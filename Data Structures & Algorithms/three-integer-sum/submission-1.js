class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);

        let triplets = [];

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === nums[i - 1]) continue;
            let left = i + 1,
                right = nums.length - 1;
            while (left < right) {
                let sum = nums[left] + nums[right];
                if (sum === -nums[i]) {
                    triplets.push([nums[i], nums[left], nums[right]]);
                    left++;
                    right--;
                    while (left < right && nums[left] === nums[left - 1]) {
                        left++;
                    }
                    while (left < right && nums[right] === nums[right + 1]) {
                        right--;
                    }
                } else if (sum < -nums[i]) {
                    left++;
                } else {
                    right--;
                }
            }
        }
        return triplets;
    }
}
