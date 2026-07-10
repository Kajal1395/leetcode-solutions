/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var kthSmallestProduct = function (nums1, nums2, k) {
    let p1 = nums1[0] * nums2[0];
    let p2 = nums1[0] * nums2[nums2.length - 1];
    let p3 = nums1[nums1.length - 1] * nums2[0];
    let p4 = nums1[nums1.length - 1] * nums2[nums2.length - 1];
    let low = Math.min(p1, p2, p3, p4);
    let actual = -1;
    let high = Math.max(p1, p2, p3, p4);
    while (low <= high) {
        let product = Math.floor((low + high) / 2);
        let count = 0;
        for (let i = 0; i < nums1.length; i++) {
            if (nums1[i] > 0) {
                let left = 0;
                let right = nums2.length - 1;
                let lastValidIndex = -1;
                while (left <= right) {
                    let mid = Math.floor((left + right) / 2);
                    if (nums1[i] * nums2[mid] <= product) {
                        lastValidIndex = mid;
                        left = mid + 1;
                    } else {
                        right = mid - 1;
                    }
                }
                count += lastValidIndex + 1;
            } else if (nums1[i] < 0) {
                let left = 0;
                let right = nums2.length - 1;
                let firstValidIndex = -1;
                while (left <= right) {
                    let mid = Math.floor((left + right) / 2);
                    if (nums1[i] * nums2[mid] <= product) {
                        firstValidIndex = mid;
                        right = mid - 1;
                    } else {
                        left = mid + 1;
                    }
                }
                if (firstValidIndex !== -1) {
                    count += nums2.length - firstValidIndex;
                }
            } else if (nums1[i] === 0) {
                if (product >= 0) {
                    count += nums2.length;
                }
            }
        }

        if (count >= k) {
            high = product - 1;
            actual = product;
        } else {
            low = product + 1;
        }
    }
    return actual;
};