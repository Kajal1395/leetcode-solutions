/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function (nums, k) {
    let low = 0
    let distance = -1
    nums.sort((a, b) => a - b)
    let n = nums.length
    let high = nums[n - 1] - nums[0]
    while (low <= high) {
        let mid = Math.floor((high + low) / 2)
        let l = 0
        let r = 0
        let count = 0
        while (l < n) {
            while (nums[r] - nums[l] <= mid) {
                r++
            }
            count += r - l - 1
            l++
        }

        if (count >= k) {
            distance = mid
            high = mid - 1
        } else {
            low = mid + 1
        }

    }
    return distance

};