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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function (root, startValue, destValue) {

    function dfs(root, target) {
        if (!root) return null
        if (root.val === target) return ""
        let left = dfs(root.left, target)
        if (left !== null) {
            return "L" + left
        }
        let right = dfs(root.right, target)
        if (right !== null) {
            return "R" + right
        }
        return null
    }
    let startnode = dfs(root, startValue)
    let endnode = dfs(root, destValue)
    let ind = 0
    while (startnode[ind] === endnode[ind]) {
        ind++
    }
    let ans = ''
    let ups = 'U'.repeat(startnode.length - ind)
    let dest = endnode.slice(ind)
    // if (ind < startnode.length &&
    //     ind < endnode.length && ups === startnode.length) {
    //     ans = dest.join('')
    // }
    ans = ups + dest
    return ans
};