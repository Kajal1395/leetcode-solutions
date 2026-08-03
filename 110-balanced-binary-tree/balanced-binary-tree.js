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
var isBalanced = function (root) {
    function getHt(root) {
        if (!root) return 0
        let leftHt = getHt(root.left)
        if (leftHt === -1) return -1
        let rightHt = getHt(root.right)
        if (rightHt === -1) return -1
        if (Math.abs(leftHt - rightHt) > 1) {
            return -1
        } else {
            return 1 + Math.max(leftHt, rightHt)
        }
    }
    return getHt(root) !== -1

};