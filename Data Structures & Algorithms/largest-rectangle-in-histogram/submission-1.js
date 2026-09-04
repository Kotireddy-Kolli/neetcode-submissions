class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let maxArea = 0;
        let stack = [];

        for(let i=0; i<heights.length; i++) {
            let leftIndex = i;
            // elements in stack and curr height > top el(we can't extend the rec)
            while(stack.length > 0 && heights[i] < stack[stack.length-1].height) {
                const {index, height} = stack.pop();
                maxArea = Math.max(maxArea, height * (i - index));
                leftIndex = index;
            }
            stack.push({index: leftIndex, height: heights[i]})
        }

        // cal area of all the rec which can reach till end of length of heights
        for(let {index, height} of stack) {
            maxArea = Math.max(maxArea, height * (heights.length - index));
        }
        return maxArea;
    }
}
