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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function (root, to_delete) {
    let delSet = new Set(to_delete)
    let res = []
    function forest(root) {
        if (!root) return null
        root.left = forest(root.left)
        root.right = forest(root.right)
        if (delSet.has(root.val)) {
            if (root.left) res.push(root.left)
            if (root.right) res.push(root.right)
            return null
        }
        return root
    }
    let tree = forest(root)
    if (tree) res.push(tree)
    return res
};