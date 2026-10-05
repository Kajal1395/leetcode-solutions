/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let freqmap = new Map()
    let res = []
    for (let i = 0; i < nums.length; i++) {
        freqmap.set(nums[i], (freqmap.get(nums[i]) || 0) + 1)
    }
    let topres = [...freqmap.entries()]
    let ktop = topres.sort((a, b) => b[1] - a[1])
    for (let i = 0; i < k; i++) {
        res.push(ktop[i][0])
    }

    return res.sort((a, b) => a[0] - b[0])

};