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
        //if memo has data return that
        let key = `${start}${end}`
        if (memo.has(key)) {
            return memo.get(key)
        }
        let res = []
        for (let root = start; root <= end; root++) {
            let leftSubtree = dfs(start, root - 1)
            let rightSubtree = dfs(root + 1, end)
            for (let left of leftSubtree) {
                for (let right of rightSubtree) {
                    let node = new TreeNode(root)
                    node.left = left
                    node.right = right
                    res.push(node)
                }
            }
        }
        memo.set(key, res)
        return res
    }
    return dfs(1, n)

};