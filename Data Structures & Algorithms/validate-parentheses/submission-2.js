class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let parenthesesMap = { ")": "(", "}": "{", "]": "[" };
        for (let char of s) {
            // If closed parentheses check if we have open parentheses in top of stack
            if (parenthesesMap.hasOwnProperty(char)) {
                if (stack[stack.length - 1] !== parenthesesMap[char]) {
                    return false;
                } else {
                    stack.pop();
                }
            }else {
                stack.push(char);
            }
        }
        return stack.length > 0 ? false : true;
    }
}
