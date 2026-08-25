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
 * @return {number}
 */
var maxPathSum = function (root) {
    let maxSum = -Infinity
    function dfs(root) {
        if (!root) return 0
        let left = Math.max(0, dfs(root.left))
        let right = Math.max(0, dfs(root.right))
        let currentPath = left + root.val + right
        maxSum = Math.max(maxSum, currentPath)
        return root.val + Math.max(left, right)
    }
    dfs(root)
    return maxSum
};