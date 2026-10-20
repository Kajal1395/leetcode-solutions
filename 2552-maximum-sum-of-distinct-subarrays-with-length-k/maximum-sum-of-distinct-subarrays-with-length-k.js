/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
    let start = 0
    let end = 0
    let set = new Set()
    let sum = 0
    let maxsum = 0
    while (end < nums.length) {
        if (set.has(nums[end])) {
            while (set.has(nums[end])) {
                sum -= nums[start]
                set.delete(nums[start])
                start++
            }
        }
        sum += nums[end]
        set.add(nums[end])
        end++
        if (set.size === k) {
            maxsum = Math.max(sum, maxsum)
            sum -= nums[start]
            set.delete(nums[start])
            start++
        }
    }
    return maxsum
    // let maxsum = 0
    // for (let i = 0; i <= nums.length - k; i++) {
    //     let sum = 0
    //     let set = new Set()
    //     for (let j = i; j < i + k; j++) {
    //         if (set.has(nums[j])) break
    //         sum += nums[j]
    //         set.add(nums[j])
    //     }
    //     if (set.size === k) maxsum = Math.max(sum, maxsum)
    // }
    // return maxsum
};