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
var widthOfBinaryTree = function (root) {
    if (!root) return 0

    let queue = [{
        "node": root,
        "ind": 0
    }]
    let maxWidth = -Infinity
    while (queue.length) {
        let size = queue.length
        let count = 0
        let firstInd = queue[0].ind
        // let level = []
        let lastInd;
        while (count < size) {
            let node = queue.shift()
            // level.push(node)

            if (count === size - 1) {
                lastInd = node.ind
            }
            if (node.node.left) {
                let leftInd = (node.ind - firstInd) * 2 + 1
                queue.push({ "node": node.node.left, "ind": leftInd })
            }
            if (node.node.right) {
                let rightInd = (node.ind - firstInd) * 2 + 2
                queue.push({ "node": node.node.right, "ind": rightInd })
            }
            count++
        }
        let width = lastInd - firstInd + 1
        maxWidth = Math.max(maxWidth, width)
    }
    return maxWidth


};