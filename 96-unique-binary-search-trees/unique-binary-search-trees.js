/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
    let memo = new Map()
    function dfs(start, end) {
        if (start > end) return 1
        let key = `${start}${end}`
        if (memo.has(key)) {
            return memo.get(key)
        }
        let res = 0
        for (let root = start; root <= end; root++) {
            let left = dfs(start, root - 1)
            let right = dfs(root + 1, end)
            res += left * right
        }
        memo.set(key, res)
        return res

    }
    return dfs(1, n)

};