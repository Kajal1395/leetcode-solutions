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
    let rootmap = {
        0: false,
        1: true,
    }
    function evalNode(root) {
        if (!root) return null
        if (!root.left && !root.right) {
            return rootmap[root.val]
        }
        if (root.val === 2) {
            return evalNode(root.left) || evalNode(root.right)
        } else if (root.val === 3) {
            return evalNode(root.left) && evalNode(root.right)
        }

    }
    return evalNode(root)


};