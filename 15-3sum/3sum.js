/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let res = []
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue
        let map = new Map()
        for (let j = i + 1; j < nums.length; j++) {
            let needed = 0 - (nums[i] + nums[j])
            if (map.has(needed)) {
                res.push([nums[i], needed, nums[j]])
                while (j + 1 < nums.length && nums[j] === nums[j + 1]) j++
            }
            map.set(nums[j], true)
        }
    }
    return res
};