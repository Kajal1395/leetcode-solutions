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
var diameterOfBinaryTree = function (root) {
    let dia = 0
    function getDia(root) {
        let leftHeight = 0
        let rightheight = 0
        if (!root) return 0
        leftHeight = root.left && getDia(root.left)
        rightHeight = root.right && getDia(root.right)
        dia = Math.max(leftHeight + rightHeight, dia)
        return 1 + Math.max(leftHeight, rightHeight)
    }
    getDia(root)
    return dia

};