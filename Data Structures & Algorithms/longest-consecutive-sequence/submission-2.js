/**
 *
 */
class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length == 0) return 0;
        nums.sort((a, b) => a - b);

        let maxSequenceCount = 1;
        let currentSequence = 1;
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] - 1 === nums[i - 1]) {
                if(currentSequence === 0) currentSequence =1;
                currentSequence++;
            } else if(nums[i] === nums[i-1]){
                
            }else{
                if (currentSequence > maxSequenceCount) maxSequenceCount = currentSequence;
                currentSequence = 0;
            }
        }
        if (currentSequence > maxSequenceCount) maxSequenceCount = currentSequence;
        return maxSequenceCount
    }
}

/**
 * sorted nums=[0,1,1,2,3,4,5,6]
 */
