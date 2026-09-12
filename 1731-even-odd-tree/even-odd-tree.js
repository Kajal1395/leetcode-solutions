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
var isEvenOddTree = function (root) {
    let levelnum = 0
    let queue = [root]
    while (queue.length) {
        let size = queue.length
        let prev = levelnum % 2 !== 0 ? Infinity : -Infinity
        let count = 0
        while (count < size) {
            let node = queue.shift()
            if (levelnum % 2 !== 0) {
                if (node.val >= prev || node.val % 2 !== 0) {
                    return false
                }
            }
            if (levelnum % 2 === 0) {
                if (node.val <= prev || node.val % 2 === 0) {
                    return false
                }
            }
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
            prev = node.val
            count++
        }
        levelnum++
    }
    return true

};