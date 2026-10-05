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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return []
    let queue = [root]
    let res = []
    while (queue.length) {
        let size = queue.length
        let count = 0
        let level = []
        while (count < size) {
            let node = queue.shift()
            if (node) level.push(node.val)
            if (node && node.left) queue.push(node.left)
            if (node && node.right) queue.push(node.right)
            count++
        }
        res.push(level)
    }
    return res

};