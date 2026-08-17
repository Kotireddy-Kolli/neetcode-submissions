class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let start = 0,
            end = s.length - 1;
        while (start < end) {
            const isStartChrValid = !/[A-Za-z0-9]/.test(s.charAt(start));
            const isEndCheValid = !/[A-Za-z0-9]/.test(s.charAt(end))
            if (isStartChrValid || isEndCheValid) {
                if (isStartChrValid) {
                    start++;
                } else if (isEndCheValid) {
                    end--;
                }
                continue;
            }
            if (s.charAt(start).toLowerCase() !== s.charAt(end).toLowerCase()) return false;
            start++;
            end--;
        }
        return true;
    }
}
