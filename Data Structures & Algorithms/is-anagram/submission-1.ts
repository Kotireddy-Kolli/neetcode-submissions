class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {

        if(s.length !== t.length) return false;

        let countRecord = {};

        for(let ch of s) {
            countRecord[ch] = (countRecord[ch] || 0) + 1;
        }

        for(let ch of t) {
            if(countRecord[ch]) {
                countRecord[ch]--;
            }else {
                return false;
            }
        }
        return true;
    }
}

