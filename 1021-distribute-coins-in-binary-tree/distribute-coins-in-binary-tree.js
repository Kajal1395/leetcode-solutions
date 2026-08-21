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
var distributeCoins = function (root) {
    let moves = 0
    function movesFn(root) {
        if (!root) return 0
        let left = movesFn(root.left)
        let right = movesFn(root.right)
        moves += Math.abs(left)
        moves += Math.abs(right)
        return left + right + root.val - 1
    }
    movesFn(root)
    return moves

};