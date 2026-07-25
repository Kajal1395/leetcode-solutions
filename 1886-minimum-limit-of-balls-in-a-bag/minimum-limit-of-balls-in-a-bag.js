/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function (nums, maxOperations) {
    let low = 1
    let high = Math.max(...nums)
    let ans = 0
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        let bags = 0
        for (let i = 0; i < nums.length; i++) {
            bags += Math.floor((nums[i] - 1) / mid)
        }
        if (bags <= maxOperations) {
            ans = mid
            high = mid - 1

        } else {
            low = mid + 1
        }
    }
    return ans
};