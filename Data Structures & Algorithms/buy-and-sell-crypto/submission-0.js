class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        for (let i = 0; i < prices.length-1; i++) {
            for (let j = i; j < prices.length; j++) {
                let profit = prices[j] - prices[i];
                if (profit > 0 && profit > maxProfit) maxProfit = profit;
            }
        }
        return maxProfit;
    }
}
