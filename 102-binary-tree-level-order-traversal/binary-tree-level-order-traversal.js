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
    let res = []
    let queue = []
    if (!root) return []
    if (root && !root.left && !root.right) return [[root.val]]
    queue.push(root)
    while (queue.length) {
        let level = []
        let size = queue.length
        let count = 0
        while (count < size) {
            let node = queue.shift()
            level.push(node.val)
            if (node.left) {
                queue.push(node.left)
            } if (node.right) {
                queue.push(node.right)
            }
            count++
        }
        res.push(level)

    }
    return res

};