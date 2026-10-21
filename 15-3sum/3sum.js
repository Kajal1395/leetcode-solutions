/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b)
    let res = []
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue
        let start = i + 1
        let end = nums.length - 1
        let target = -nums[i]
        while (start < end) {
            let sum = nums[start] + nums[end]
            if (sum === target) {
                res.push([nums[i], nums[start], nums[end]])
                end--
                start++
                while (start < end && nums[start] === nums[start - 1]) start++
                while (start < end && nums[end] === nums[end + 1]) end--

            } else if (sum < target) {
                start++
            } else {
                end--
            }
        }
    };
    return res
}