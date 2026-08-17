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
 * @param {number} distance
 * @return {number}
 */
var countPairs = function (root, distance) {
    let goodpairs = 0
    function countgoodleaf(root) {
        if (!root) return []
        if (!root.left && !root.right) return [1]
        let left = countgoodleaf(root.left)
        let right = countgoodleaf(root.right)
        let res = []
        for (let i = 0; i < left.length; i++) {
            for (let j = 0; j < right.length; j++) {

                if (left[i] + right[j] <= distance) {
                    goodpairs++
                }
            }
        }
        for (let d of left) res.push(d + 1)
        for (let d of right) res.push(d + 1)
        return res

    }
    countgoodleaf(root)
    return goodpairs

};