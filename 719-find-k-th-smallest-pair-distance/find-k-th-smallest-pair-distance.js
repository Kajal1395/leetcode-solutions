/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function (nums, k) {
    nums.sort((a, b) => a - b)
    let low = 0
    let high = nums[nums.length - 1] - nums[0]
    let ans = 0
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        let countK = 0
        let left = 0
        let right = left + 1
        while (left < nums.length) {
            while (Math.abs(nums[right] - nums[left]) <= mid) {
                right++
            }
            //here right is the first invalid index where it stops we want the first valid so -1
            countK += right - left - 1
            left++
        }


        if (countK >= k) {
            ans = mid
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return ans
};