/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
    function buildTree(p, q) {
        if (!p && !q) return null;
        if (!p && q) return q;
        if (p && !q) return p;
        p.val += q.val;
        p.left = buildTree(p.left, q.left);
        p.right = buildTree(p.right, q.right);
        return p;
    }
    return buildTree(root1, root2);

};