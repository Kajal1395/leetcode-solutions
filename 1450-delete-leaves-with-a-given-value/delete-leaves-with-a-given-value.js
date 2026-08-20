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
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function (root, target) {
    function traverse(root) {
        if (!root) return null
        root.left = traverse(root.left)
        root.right = traverse(root.right)
        if (!root.left && !root.right && root.val === target) {
            return null
        }
        return root
    }
    return traverse(root)

};