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
 * @return {boolean}
 */
var isValidBST = function (root) {
    let res = []
    function dfs(root) {
        if (!root) return

        dfs(root.left)
        res.push(root.val)
        dfs(root.right)
    }
    dfs(root)
    console.log(res)
    for(let i=1;i<res.length;i++){
        if(res[i]<=res[i-1]){
            return false
        }
    }
    return true

};