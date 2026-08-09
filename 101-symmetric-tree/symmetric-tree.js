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
    if (!root) return null
    while (queue.length) {
        let size = queue.length
        let children = []
        let count = 0
        while (count < size) {
            let node = queue.shift()
            if (node) {
                children.push(node.val)
                queue.push(node.left)
                queue.push(node.right)
            }
            else {
                children.push(null)
            }
            count++
        }
        let low = 0
        let high = children.length - 1
        while (low < high) {
            if (children[low] !== children[high]) {
                return false
            } else {
                low++
                high--
            }
        }

    }
    return true


};