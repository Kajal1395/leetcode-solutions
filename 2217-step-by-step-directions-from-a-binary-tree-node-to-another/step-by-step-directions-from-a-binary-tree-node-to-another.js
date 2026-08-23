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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function (root, startValue, destValue) {
    function findTarget(root, target, path) {
        if (!root) return false
        if (root.val === target) return true
        path.push('L')
        let left = findTarget(root.left, target, path)
        if (left) {
            return true
        }
        path.pop()
        path.push('R')
        let right = findTarget(root.right, target, path)
        if (right) {
            return true
        }
        path.pop()
        return false
    }
    let roottoStart = []
    findTarget(root, startValue, roottoStart)
    let roottoDest = []
    findTarget(root, destValue, roottoDest)
    let ind = 0
    while (roottoStart[ind] === roottoDest[ind]) {
        ind++
    }
    let ans;
    let ups = 'U'.repeat(roottoStart.length - ind)
    let dest = roottoDest.slice(ind)
    if (ind === roottoStart.length) {
        ans = dest.join('')
    }

    ans = ups + dest.join('')
    return ans

};