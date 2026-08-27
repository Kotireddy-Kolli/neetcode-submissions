class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        for (const token of tokens) {
            if (token === "+") {
                const b = stack.pop();
                const a = stack.pop();
                stack.push(a + b);
            } 
            else if (token === "-") {
                const b = stack.pop();
                const a = stack.pop();
                stack.push(a - b);
            } 
            else if (token === "*") {
                const b = stack.pop();
                const a = stack.pop();
                stack.push(a * b);
            } 
            else if (token === "/") {
                const b = stack.pop();
                const a = stack.pop();
                stack.push(Math.trunc(a / b));
            } 
            else {
                stack.push(Number(token));
            }
        }

        return stack[0];
    }
}

/**
 * If number push to stack
 * If operation pop the last 2 elements in stack and perform operation
 *      and push the result in to stack
 */