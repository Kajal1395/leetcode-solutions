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
var minDiffInBST = function (root) {
    //property of bst prev node smaller if we follow dfs left node right
    let res = []
    function dfs(root) {
        root.left && dfs(root.left)
        res.push(root.val)
        root.right && dfs(root.right)
    }
    dfs(root)
    let min = Infinity
    for (let i = 1; i < res.length; i++) {
        min = Math.min(min, Math.abs(res[i] - res[i - 1]))
    }
    console.log(min)
    return min

};