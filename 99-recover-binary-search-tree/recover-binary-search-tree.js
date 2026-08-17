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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
    let first = null;
    let prev = null;
    let second = null;
    function inOrder(root) {
        if (!root) return null;
        inOrder(root.left);
        if (prev && root.val < prev.val) {
            if (first === null) {
                first = prev;
            }

            second = root;
        }
        prev = root;
        inOrder(root.right);
    }
    inOrder(root);
    if (first.val > second.val) {
        [first.val, second.val] = [second.val, first.val];
    }

    return root;

};