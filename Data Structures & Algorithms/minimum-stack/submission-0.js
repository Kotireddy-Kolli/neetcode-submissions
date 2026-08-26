class MinStack {
    constructor() {
        this.min;
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        let min = this.stack[0];
        for(let num of this.stack) {
            min = Math.min(min, num)
        }
        return min;
    }
}
