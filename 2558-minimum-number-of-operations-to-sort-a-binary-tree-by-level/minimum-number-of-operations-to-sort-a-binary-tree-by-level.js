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
    let operations = 0
    let queue = [root]
    while (queue.length) {
        let size = queue.length
        let level = []
        let count = 0
        while (count < size) {
            let node = queue.shift()
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
            level.push(node.val)
            count++
        }
        let sorted = [...level].sort((a, b) => a - b)

        // for (let i = 0; i < sorted.length; i++) {
        //     let j = level.indexOf(sorted[i])
        //     if (i !== j) {
        //         [level[i], level[j]] = [level[j], level[i]]
        //         operations++
        //     }

        // }

        let map = new Map()
        for (let i = 0; i < sorted.length; i++) {
            map.set(sorted[i], i)
        }

        let visited = Array.from(level).fill(false)
        for (let i = 0; i < level.length; i++) {
            if (visited[i]) continue
            let j = i
            let cyclesize = 0
            while (!visited[j]) {
                visited[j] = true
                j = map.get(level[j])
                cyclesize++
            }
            operations += cyclesize - 1
        }

    }
    return operations

};