class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let res = Array(temperatures.length).fill(0)
        let stack = [];

        for(let i=0; i<temperatures.length; i++) {
            while(stack.length > 0 && temperatures[i] > temperatures[stack[stack.length-1]]) {
                let index = stack.pop();
                res[index] =  i - index;
            }
            stack.push(i)
        }
        return res;
    }
}

