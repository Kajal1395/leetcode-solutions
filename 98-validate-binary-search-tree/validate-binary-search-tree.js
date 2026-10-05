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
 * @return {boolean}
 */
var isValidBST = function (root) {

    function dfs(root, lower, upper) {
        if (!root) return true
        if (root.val <= lower || root.val >= upper) return false
        let left = dfs(root.left, lower, root.val)
        let right = dfs(root.right, root.val, upper)
        return left && right
    }
    return dfs(root, -Infinity, Infinity)

};