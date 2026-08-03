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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
    if (!root) return false;
    function isSameTree(p, q) {
        if (!p && !q) return true;
        if ((!p && q) || (!q && p)) return false;
        if (p && q && p.val !== q.val) return false;
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
    if (root.val === subRoot.val && isSameTree(root, subRoot)) {
        return true;
    }
    let left = isSubtree(root.left, subRoot);
    let Right = isSubtree(root.right, subRoot);
    return left || Right;

};