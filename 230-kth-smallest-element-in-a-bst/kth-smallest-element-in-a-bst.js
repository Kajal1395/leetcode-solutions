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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    let res = 0;
    function inOrder(root) {
        if (!root) return;
        let left = inOrder(root.left);
        if (left !== undefined) {
            return left
        }
        res++
        if (res === k) {
            return root.val
        }

        let right = inOrder(root.right);
        if (right !== undefined) {
            return right
        }
    }
    return inOrder(root);

};