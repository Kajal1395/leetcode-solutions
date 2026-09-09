/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} distance
 * @return {number}
 */
var countPairs = function (root, distance) {
    let count = 0
    function dfs(node) {
        if (!node) return []
        if (!node.left && !node.right) {
            return [1]
        }
        let leftSub = dfs(node.left)
        let rightSub = dfs(node.right)
        if (leftSub.length && rightSub.length) {
            for (let left of leftSub) {
                for (let right of rightSub) {
                    if (left + right <= distance) {
                        count++
                    }
                }
            }
        }
        return [...leftSub.map(d => d + 1), ...rightSub.map(d => d + 1)]
    }
    dfs(root)
    return count

};