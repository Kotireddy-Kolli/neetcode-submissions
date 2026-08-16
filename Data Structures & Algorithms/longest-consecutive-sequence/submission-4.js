class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const uniqueEl = new Set(nums);
        let longest = 0;

        for(let num of uniqueEl) {
            if(!uniqueEl.has(num-1)) {
                let length = 1;
                while(uniqueEl.has(num+length)) {
                    length++;
                }
                longest = Math.max(longest, length);
            }
        }
        return longest;
    }
}

/**
 * Fist identify the start of sequence
 */
