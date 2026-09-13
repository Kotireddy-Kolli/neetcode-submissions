class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let newArray = [];
        let nums1Index = 0,
            nums2Index = 0;
        let mid = Math.floor((nums1.length + nums2.length) / 2);

        let prev = 0;
        let current = 0;

        for (let count = 0; count <= mid; count++) {
            prev = current;

            if (nums1Index < nums1.length && nums2Index < nums2.length) {
                if (nums1[nums1Index] > nums2[nums2Index]) {
                    current = nums2[nums2Index];
                    nums2Index++;
                } else {
                    current = nums1[nums1Index];
                    nums1Index++;
                }
            } else if (nums1Index < nums1.length) {
                current = nums1[nums1Index];
                nums1Index++;
            } else {
                current = nums2[nums2Index];
                nums2Index++;
            }
        }

        let total = nums1.length + nums2.length;
        if (total % 2 === 0) {
            return (prev + current) / 2;
        } else {
            return current;
        }
    }
}
