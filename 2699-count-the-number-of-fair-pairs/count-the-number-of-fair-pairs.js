/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function (nums, lower, upper) {
    nums.sort((a, b) => a - b)
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        let start = lower - nums[i]
        let end = upper - nums[i]
        //find j which is >=lower and <=upper
        let low = i + 1
        let high = nums.length - 1;
        let leftB = nums.length
        while (low <= high) {
            let mid = Math.floor((low + high) / 2)
            if (nums[mid] >= start) {
                leftB = mid
                high = mid - 1
            } else {
                low = mid + 1
            }
        }
        let left = i + 1
        let right = nums.length - 1;
        let rightB = nums.length
        while (left <= right) {
            let mid = Math.floor((left + right) / 2)
            if (nums[mid] > end) {
                rightB = mid
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
        count += rightB - leftB
    }
    return count

};