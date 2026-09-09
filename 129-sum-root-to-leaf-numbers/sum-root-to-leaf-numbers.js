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
var sumNumbers = function (root) {
    let res = 0
    function dfs(node, currentSum) {
        if (!node) return
        if (!node.left && !node.right) {
            res += currentSum * 10 + node.val
            return
        }
        currentSum = currentSum * 10 + node.val
        dfs(node.left, currentSum)
        dfs(node.right, currentSum)
    }
    dfs(root, 0)
    return res
};