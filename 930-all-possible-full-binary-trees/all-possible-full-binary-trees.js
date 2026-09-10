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

    function dfs(n) {
        if (n % 2 === 0) return []
        if (n === 1) return [new TreeNode(0)]
        let res = []
        let remainingNodes = n - 1

        for (let leftSize = 1; leftSize < remainingNodes; leftSize += 2) {
            let rightSize = remainingNodes - leftSize
            let leftSubtree = dfs(leftSize)
            let rightSubtree = dfs(rightSize)
            for (let left of leftSubtree) {
                for (let right of rightSubtree) {
                    let root = new TreeNode(0)
                    root.left = left
                    root.right = right
                    res.push(root)
                }

            }
        }
        return res
    }
    return dfs(n)


};