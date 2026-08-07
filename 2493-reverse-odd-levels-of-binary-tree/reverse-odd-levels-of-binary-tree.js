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
 * @return {TreeNode}
 */
var reverseOddLevels = function (root) {

    let queue = []
    if (!root) return null
    if (root && !root.left && !root.right) return root
    queue.push(root)
    let lev = 0
    while (queue.length) {
        let level = []
        let size = queue.length
        let count = 0
        while (count < size) {
            let node = queue.shift()
            level.push(node)
            if (node.left) {
                queue.push(node.left)
            } if (node.right) {
                queue.push(node.right)
            }

            count++
        }

        if (lev % 2 !== 0) {
            let low = 0
            let high = level.length - 1;
            while (low < high) {
                let temp = level[low].val
                level[low].val = level[high].val
                level[high].val = temp
                low++
                high--
            }
        }
        lev++
    }
    return root

};