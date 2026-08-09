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
    if (!root) return null
    let queue = []
    queue.push(root)
    while (queue.length) {
        let children = []
        for (let node of queue) {
            if (node.left) children.push(node.left)
            if (node.right) children.push(node.right)
        }
        let levelSum = children.reduce((acc, num) => acc + num.val, 0)

        for (let node of queue) {
            let siblingSum = 0
            if (node.left) siblingSum += node.left.val
            if (node.right) siblingSum += node.right.val
            if (node.left) {
                node.left.val = levelSum - siblingSum
            }
            if (node.right) {
                node.right.val = levelSum - siblingSum
            }
        }

        queue = children
    }
    root.val=0
    return root

};