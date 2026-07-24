/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCapability = function (nums, k) {
    let low = Math.min(...nums)
    let high = Math.max(...nums)
    let ans = 0
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        let houses = 0
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] <= mid) {
                houses++
                i++
            }
        }
        if (houses >= k) {
            ans = mid
            high = mid - 1

        } else {
            low = mid + 1
        }
    }
    return ans

};