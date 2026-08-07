class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();
        for(let num of nums) {
            let frequency = (map.get(num)|| 0) + 1;
            map.set(num, frequency);
        }
        const outputArr = [...map.keys()];
        outputArr.sort((a, b) => map.get(b) - map.get(a));
        return outputArr.slice(0, k);
    }
}
