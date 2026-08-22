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
    let queue = [root]
    let evenOdd = true
    let level = 0
    while (queue.length) {
        let size = queue.length
        let count = 0

        let children = []
        while (count < size) {
            let node = queue.shift()
            children.push(node.val)
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
            count++
        }
        //now we have all children of level
        if (level % 2 === 0) {
            for (let i = 0; i < children.length; i++) {
                if (children[i] % 2 === 0) {
                    evenOdd = false
                    break
                }
                if (i > 0 && children[i] <= children[i - 1]) {
                    evenOdd = false
                    break
                }
            }
        } else {
            for (let i = 0; i < children.length; i++) {
                if (children[i] % 2 !== 0) {
                    evenOdd = false
                    break
                }
                if (i > 0 && children[i] >= children[i - 1]) {
                    evenOdd = false
                    break
                }
            }

        }

        level++
    }
    return evenOdd

};