/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function (n) {
    function FBT(n) {
        if (n === 1) return [new TreeNode(0)]
        let result = []
        for (let leftSize = 1; leftSize < n; leftSize += 2) {
            let rightSize = n - 1 - leftSize
            let leftSub = FBT(leftSize)
            let rightSub = FBT(rightSize)
            for (let leftTree of leftSub) {
                for (let rightTree of rightSub) {
                    let root = new TreeNode(0)

                    root.left = leftTree
                    root.right = rightTree

                    result.push(root)
                }
            }
        }
        return result
    }

    return FBT(n)
};