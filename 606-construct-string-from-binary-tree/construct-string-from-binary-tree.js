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
 * @return {string}
 */
var tree2str = function (root) {
    function getStr(root) {
        if (!root.left && !root.right) {
            return String(root.val)
        } else if (!root.left && root.right) {
            let right = getStr(root.right)
            return root.val + '()' + '(' + right + ')'
        } else if (root.left && !root.right) {
            let left = getStr(root.left)
            return root.val + '(' + left + ')'
        } else {
            let left = getStr(root.left)
            let right = getStr(root.right)
            return root.val + '(' + left + ')' + '(' + right + ')'
        }
    }
    return getStr(root)
};