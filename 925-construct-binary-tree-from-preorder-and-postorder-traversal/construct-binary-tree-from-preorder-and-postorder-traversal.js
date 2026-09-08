/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function (preorder, postorder) {
    function dfs(prestart, preend, poststart, postend) {
        if (prestart > preend) return null
        if (prestart === preend) return (new TreeNode(preorder[prestart]))
        let root = postorder[postend]
        let rightroot = postorder[postend - 1]
        let rootInd = preorder.indexOf(root)
        let rightrootInd = preorder.indexOf(rightroot)
        let node = new TreeNode(root)
        let leftSize = rightrootInd - rootInd - 1
        node.left = dfs(prestart + 1, prestart + leftSize, poststart, poststart + leftSize - 1)
        node.right = dfs(prestart + leftSize + 1, preend, poststart + leftSize, postend - 1)
        return node

    }
    return dfs(0, preorder.length - 1, 0, postorder.length - 1)

};