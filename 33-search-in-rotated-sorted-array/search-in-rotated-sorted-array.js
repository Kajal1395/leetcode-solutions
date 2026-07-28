/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let low = 0
    let high = nums.length - 1
    let mid = -1
    if (target === nums[low]) return low
    if (target === nums[high]) return high
    while (low <= high) {
        mid = Math.floor((low + high) / 2)
        if (nums[mid] === target) return mid
        if (nums[mid] >= nums[0]) {
            if (target >= nums[low] && target < nums[mid]) {
                high = mid - 1
            } else {
                low = mid + 1
            }
        } else {
            if (target <= nums[high] && target > nums[mid]) {
                low = mid + 1

            } else {
                high = mid - 1
            }
        }
    }
    return -1


};