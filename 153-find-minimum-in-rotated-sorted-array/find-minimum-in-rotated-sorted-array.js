/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let n = nums.length
    let low = 0
    let high = n - 1
    while (low < high) {
        let mid = Math.floor((low + high) / 2)
        if (nums[mid] <= nums[high]) {
            high = mid
        } else {
            low = mid + 1
        }
    }
    return nums[low]

};