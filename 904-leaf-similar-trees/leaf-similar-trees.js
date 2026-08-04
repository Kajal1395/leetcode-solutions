/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
    function nextLeaf(stack) {
        while (stack.length > 0) {
            let node = stack.pop()
            if (node.left === null && node.right === null) {
                return node.val
            }
            if (node.right) {
                stack.push(node.right)
            }
            if (node.left) {
                stack.push(node.left)
            }
        }

    }
    let stack1 = [root1]
    let stack2 = [root2]
    while (true) {
        let leaf1 = nextLeaf(stack1)
        let leaf2 = nextLeaf(stack2)
        if (leaf1 === undefined && leaf2 === undefined) return true
        if (leaf1 === undefined && leaf2 || leaf1 && leaf2 === undefined) return false
        if (leaf1 !== leaf2) return false
    }


};