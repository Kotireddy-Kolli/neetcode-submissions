class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let start = 0,
            end = s.length - 1;
        while (start < end) {
            if (!/[A-Za-z0-9]/.test(s.charAt(start)) || !/[A-Za-z0-9]/.test(s.charAt(end))) {
                if (!/[A-Za-z0-9]/.test(s.charAt(start))) {
                    start++;
                } else if (!/[A-Za-z0-9]/.test(s.charAt(end))) {
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
