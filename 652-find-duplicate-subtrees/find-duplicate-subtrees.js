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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
    let res = []
    let strmap = new Map()
    function collect(root) {
        if (!root) return '#'
        let left = collect(root.left)
        let right = collect(root.right)
        let str = `${root.val}+${left}+${right}`
        strmap.set(str, (strmap.get(str) || 0) + 1)
        if (strmap.get(str) === 2) {
            res.push(root)
        }
        return str
    }
    collect(root)
    return res

};