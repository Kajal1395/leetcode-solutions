/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let map = new Map()
    let stack = []
    for (let i = nums2.length - 1; i >= 0; i--) {
      
            while (stack.length > 0 && stack[stack.length - 1] <= nums2[i]) {
                stack.pop()
            }
            if (stack.length > 0) {
                map.set(nums2[i], stack[stack.length - 1])
            } else {
                map.set(nums2[i], -1)
            }

        
        stack.push(nums2[i])
    }
    let res = []
    for (let x of nums1) {
        res.push(map.get(x))

    }
    return res


};