/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
    let memo = new Map()
    function dfs(start, end) {
        if (start > end) return [null]
        let key = `${start}_${end}`
        if (memo.has(key)) {
            return memo.get(key)
        }
        let res = []
        for (let root = start; root <= end; root++) {
            let left = dfs(start, root - 1)
            let right = dfs(root + 1, end)
            for (let leftnode of left) {
                for (let rightnode of right) {
                    let node = new TreeNode(root)
                    node.left = leftnode
                    node.right = rightnode
                    res.push(node)
                }
            }
        }
        memo.set(key, res)
        return res

    }
    return dfs(1, n)

};