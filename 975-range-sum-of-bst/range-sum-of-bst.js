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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
    function rangeBst(root) {
        if (!root) return 0
        if (root.val < low) return rangeBst(root.right)
        if (root.val > high) return rangeBst(root.left)
        let sum = root.val
        sum += rangeBst(root.left)
        sum += rangeBst(root.right)
        return sum


    }
    return rangeBst(root)

};