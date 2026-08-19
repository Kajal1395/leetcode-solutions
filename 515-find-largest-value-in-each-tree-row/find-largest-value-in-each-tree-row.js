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
 * @return {number[]}
 */
var largestValues = function (root) {
    if (!root) return [];
    let ans = []
    let queue = [root]
    while (queue.length) {
        let size = queue.length
        let count = 0
        let children = []
        while (count < size) {
            let node = queue.shift()
            if (node) children.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
            count++
        }
        let maxinRow = -Infinity
        for (let x of children) {
            maxinRow = Math.max(x, maxinRow)
        }
        ans.push(maxinRow)
    }
    return ans

};