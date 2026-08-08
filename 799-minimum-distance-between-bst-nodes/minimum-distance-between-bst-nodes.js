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
var minDiffInBST = function (root) {
    let minDiff = Infinity
    let prev = null
    function inOrder(root) {
        if (!root) return
        inOrder(root.left)
        if (prev !== null) {
            minDiff = Math.min(root.val - prev, minDiff)
        }
        prev = root.val
        inOrder(root.right)

    }
    inOrder(root)
    return minDiff
};