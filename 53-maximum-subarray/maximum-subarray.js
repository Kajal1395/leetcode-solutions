/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let maxsum = nums[0]
    let currSum = nums[0]
    for (let i = 1; i < nums.length; i++) {
        currSum = Math.max(nums[i], currSum + nums[i])
        maxsum = Math.max(currSum, maxsum)
    }
    return maxsum

};