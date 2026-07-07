/**
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */
var maximumBeauty = function (items, queries) {
    items.sort((a, b) => a[0] - b[0])
    let maxi = items[0][1]
    for (let i = 1; i < items.length; i++) {
        maxi = Math.max(items[i][1], maxi)
        items[i][1] = maxi
    }
    let res = []
    for (let i = 0; i < queries.length; i++) {
        let target = queries[i]
        let low = 0
        let high = items.length - 1
        let ans = 0
        while (low <= high) {
            let mid = Math.floor((low + high) / 2)
            if (items[mid][0] <= target) {
                ans = items[mid][1]
                low = mid + 1
            } else {
                high = mid - 1
            }
        }
        res.push(ans)
    }
    return res
};