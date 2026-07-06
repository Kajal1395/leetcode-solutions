/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function (nums, lower, upper) {
    nums.sort((a, b) => a - b)
    let n = nums.length
    let ans = 0
    for (let i = 0; i < n; i++) {
        let low = i + 1
        let high = n - 1
        let firstValid = -1
        while (low <= high) {
            let mid = Math.floor((low + high) / 2)
            if (nums[mid] >= lower - nums[i]) {
                firstValid = mid
                high = mid - 1
            } else {
                low = mid + 1
            }
        }
        low = i + 1
        high = n - 1
        let lastValid = -1
        while (low <= high) {
            let mid = Math.floor((low + high) / 2)
            if (nums[mid] <= upper - nums[i]) {
                lastValid = mid
                low = mid + 1
            } else {
                high = mid - 1
            }
        }
        console.log(i, firstValid, lastValid)
        if (firstValid > 0 && lastValid > 0) {
            ans += lastValid - firstValid + 1
        }

    }
    return ans

};