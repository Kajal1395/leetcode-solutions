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
var minimumOperations = function (root) {
    if (!root) return 0
    if (root && !root.left && !root.right) return 0
    let minOperation = 0
    let queue = []
    queue.push(root)
    while (queue.length) {
        let size = queue.length
        let level = []
        let children = 0
        while (children < size) {
            let node = queue.shift()
            level.push(node.val)
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
            children++
        }
        //we have all ele in a level now
        let sorted = [...level].sort((a, b) => a - b)

        let operation = 0
        for (let i = 0; i < sorted.length; i++) {
            let j = level.indexOf(sorted[i])
            if (i !== j) {
                [level[i], level[j]] = [level[j], level[i]]
                operation++
            }
        }
        minOperation += operation
    }
    return minOperation

};