class MinStack {
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        let min;
        if (this.stack.length === 0) {
            min = val;
        } else {
            min = Math.min(this.stack[this.stack.length - 1].minvalue, val);
        }
        this.stack.push({ val, minvalue: min });
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
        return this.stack[this.stack.length - 1].val;
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.stack[this.stack.length - 1].minvalue;
    }
}
