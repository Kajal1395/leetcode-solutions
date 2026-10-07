/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let low = 0
    let high = nums.length - 1
    let mid = 0
    while (mid <= high) {
        console.log(nums[mid])
        if (nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]]
            mid++
            low++

        } else if (nums[mid] === 2) {
            [nums[mid], nums[high]] = [nums[high], nums[mid]]
            high--
        } else {
            mid++
        }
    }

};