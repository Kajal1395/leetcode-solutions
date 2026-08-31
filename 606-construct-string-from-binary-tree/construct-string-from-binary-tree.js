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
 * @return {string}
 */
var tree2str = function (root) {

    function dfs(root) {
        if (!root) return ''
        if (!root.left && root.right) {
            return `${root.val}()(${dfs(root.right)})`
        }
        if (root.left && !root.right) {
            return `${root.val}(${dfs(root.left)})`

        }
        if (root.left && root.right) {
            return root.val + '(' + dfs(root.left) + ')' + '(' + dfs(root.right) + ')'
        }
        return `${root.val}`
    }
    return dfs(root)

};