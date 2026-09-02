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
var replaceValueInTree = function (root) {
    let queue = []
    queue.push(root)
    root.val = 0
    while (queue.length) {
        let size = queue.length
        let children = 0
        let nextLevelSum = 0
        let levelSum = 0

        for (let i = 0; i < size; i++) {
            let node = queue[i]

            if (node.left) {
                levelSum += node.left.val
            }

            if (node.right) {
                levelSum += node.right.val
            }
        }

        while (children < size) {
            let node = queue.shift()
            children++
            let siblingSum = 0
            if (node.left) {

                siblingSum += node.left.val
                nextLevelSum += node.left.val
            }
            if (node.right) {

                siblingSum += node.right.val
                nextLevelSum += node.right.val
            }
            if (node.left) {
                node.left.val = levelSum - siblingSum
                queue.push(node.left)
            }

            if (node.right) {
                node.right.val = levelSum - siblingSum
                queue.push(node.right)
            }

        }
        levelSum = nextLevelSum

    }
    return root

};