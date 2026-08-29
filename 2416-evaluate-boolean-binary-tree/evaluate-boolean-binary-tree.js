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
var evaluateTree = function (root) {
    function evaluate(root) {
        if (!root) return false
        if (!root.left && !root.right) {
            if (root.val === 0) {
                return false
            }
            if (root.val === 1) {
                return true
            }
        }

        let left = evaluate(root.left)
        let right = evaluate(root.right)
        if (root.val === 2) {
            return left || right
        }
        if (root.val === 3) {
            return left && right
        }

    }
    return evaluate(root)
};