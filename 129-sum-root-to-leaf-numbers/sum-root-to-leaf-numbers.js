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
var sumNumbers = function (root) {
    let res = 0
    function sum(root, current) {
        if (!root) return;
        current = current * 10 + root.val
        if (!root.left && !root.right) {
            res += current
        };
        sum(root.left, current);
        sum(root.right, current);

    }

    sum(root, 0)
    return res;

};