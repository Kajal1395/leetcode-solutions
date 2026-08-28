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
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
    function collectLeaf(root) {
        let leaves = []
        function collect(root) {
            if (!root) return null
            if (!root.left && !root.right) {
                leaves.push(root.val)
            }
            collect(root.left)
            collect(root.right)
        }
        collect(root)
        return leaves

    }

    let stack1 = collectLeaf(root1)
    let stack2 = collectLeaf(root2)
    if (stack1.length !== stack2.length) return false
    for (let i = 0; i < stack1.length; i++) {
        if (stack1[i] !== stack2[i]) {
            return false
        }
    }
    return true
};