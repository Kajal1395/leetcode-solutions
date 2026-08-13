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
    function isValid(node, lower, upper) {
        if (!node) return true
        if (node.val >= upper || node.val <= lower) return false
        let left = isValid(node.left, lower, node.val)
        let right = isValid(node.right, node.val, upper)
        return left && right

    }
    return isValid(root, -Infinity, Infinity)

};