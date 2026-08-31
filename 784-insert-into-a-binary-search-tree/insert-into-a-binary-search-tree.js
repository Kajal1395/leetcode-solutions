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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
    if (!root) return new TreeNode(val)
    function dfs(root) {
        if (root.val < val) {
            if (root.right) {
                dfs(root.right)
            } else {
                root.right = new TreeNode(val)
            }
        } else {
            if (root.left) {
                dfs(root.left)
            } else {
                root.left = new TreeNode(val)
            }
        }

    }
    dfs(root)
    return root

};