class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let newArray = [];
        let nums1Index = 0, nums2Index = 0;
        let mid = Math.floor((nums1.length + nums2.length) /2);

        for(let count=0; count<= mid; count++){
            if(nums1Index < nums1.length && nums2Index < nums2.length) {
                if(nums1[nums1Index] > nums2[nums2Index]) {
                    newArray.push(nums2[nums2Index]);
                    nums2Index++;
                }else{
                    newArray.push(nums1[nums1Index]);
                    nums1Index++;
                }
            }else if (nums1Index < nums1.length) {
                newArray.push(nums1[nums1Index]);
                nums1Index++;
            }else {
                newArray.push(nums2[nums2Index]);
                nums2Index++;
            }
        }

        let total = nums1.length + nums2.length;
        if( total % 2 === 0) {
            return (newArray.pop() + newArray.pop()) /2
        }else {
            return newArray.pop();
        }
    }
}
