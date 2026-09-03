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
var isSymmetric = function (root) {
    let queue = [root]
    while (queue.length) {
        let size = queue.length
        let level = []
        let count = 0
        while (count < size) {
            let node = queue.shift()
            if (!node) {
                level.push(null)
                count++
                continue
            }

            queue.push(node.left)
            queue.push(node.right)

            level.push(node.val)

            count++
        }
        console.log(level, queue)
        let low = 0
        let high = level.length - 1
        while (low < high) {
            if (level[low] !== level[high]) {
                return false
            }
            low++
            high--
        }
    }
    return true
};