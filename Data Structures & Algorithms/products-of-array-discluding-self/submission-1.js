class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let productOfAll = 1,
            outputArr = [];
        let zeroIndexsSet = new Set();
        for (let i=0; i<nums.length; i++) {
            if (nums[i] != 0) {
                productOfAll *= nums[i];
            }else {
                zeroIndexsSet.add(i)
            }
        }
        for (let num of nums) {
            let el;
            if (zeroIndexsSet.size > 0) {
                if (zeroIndexsSet.size > 1) {
                    el = 0;
                } else if (zeroIndexsSet.size === 1 && num === 0) {
                    el = productOfAll;
                } else {
                    el = 0;
                }
            } else {
                el = productOfAll / num;
            }

            outputArr.push(el);
        }
        return outputArr;
    }
}
/**
 * In 1st loop, I can calculate the product of all elements
 * In 2nd loop, I can calculate product/current element
 *
 * How to handle 0's? I have to keep track of 0's
 * If el == 0, I can exclude this while calculating the product
 * In 2nd loop, I have to check if we have any zeros or not. If we have zero the ouput el is zero
 * If the we have more than one zero, output array will have all zero
 * If we have only single zero, then we have to check currEl is zero or not
 */
