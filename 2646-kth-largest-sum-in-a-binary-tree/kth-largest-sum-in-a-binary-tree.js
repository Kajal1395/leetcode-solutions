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
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = function (root, k) {
    let queue = []
    let ans = -1
    let resSum = []
    queue.push(root)
    while (queue.length) {
        let size = queue.length
        let level = []
        let children = 0
        while (children < size) {
            let node = queue.shift()
            level.push(node.val)
            children++
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        let sum = level.reduce((acc, num) => acc + num, 0)
        resSum.push(sum)
    }
    resSum.sort((a, b) => b - a)
    //sort res in des
    if (k <= resSum.length) {
        ans = resSum[k - 1]
    }
    return ans
};