class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1,
            right = Math.max(...piles);
        let res = right;

        while (left <= right) {
            const midIndex = Math.floor((left + right) / 2);

            let totalTime = 0;
            for (const p of piles) {
                totalTime += Math.ceil(p / midIndex);
            }
            if (totalTime <= h) {
                res = midIndex;
                right = midIndex - 1;
            } else {
                left = midIndex + 1;
            }
        }
        return res;
    }
}
