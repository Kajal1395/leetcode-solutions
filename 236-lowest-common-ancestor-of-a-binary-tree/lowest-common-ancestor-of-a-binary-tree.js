/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    function LCA(root) {
        if (!root) return null;
        if (root === p || root === q) return root;
        let left = LCA(root.left);
        let right = LCA(root.right);
        if (!left && !right) {
            return null;
        } else if (left && !right) {
            return left;
        } else if (!left && right) {
            return right;
        } else {
            return root;
        }
    }
    return LCA(root);

};