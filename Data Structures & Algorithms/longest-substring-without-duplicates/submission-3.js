class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set = new Set();
        let left = 0, right = 0;
        let maxLen = 0;

        for(let i = 0; i< s.length; i++) {
            while(set.has(s.charAt(i))) {
                set.delete(s.charAt(left));
                left++;
            }
            if(!set.has(s.charAt(i))) {
                set.add(s.charAt(i));
                right++;
            }
            maxLen = Math.max(maxLen, right - left)
        }
        return maxLen;
    }
}
