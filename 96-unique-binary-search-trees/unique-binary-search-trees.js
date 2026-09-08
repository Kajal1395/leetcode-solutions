/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
    let memo = new Map()
    function dfs(start, end) {
        if (start > end) return 1
        let key = `${start}_${end}`
        if (memo.has(key)) {
            return memo.get(key)
        }
        let count = 0
        for (let i = start; i <= end; i++) {
            let left = dfs(start, i - 1)
            let right = dfs(i + 1, end)
            count += left * right
        }
        memo.set(key, count)
        return count
    }
    return dfs(1, n)

};