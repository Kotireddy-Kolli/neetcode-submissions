class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */

    /**
     * we can conver to set and compare the length (or)
     * we can check each element and if it is not in a set/map we can add else return false
     */
    hasDuplicate(nums: number[]): boolean {
        let uniqueElements = new Set();
        for(let el of nums) {
            if(uniqueElements.has(el)) {
                return true;
            } else {
                uniqueElements.add(el);
            }
        }
        return false;
    }
}
