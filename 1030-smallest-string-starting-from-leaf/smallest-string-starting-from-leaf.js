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
 * @return {string}
 */
var smallestFromLeaf = function (root) {

    function findSmallest(root) {
        if (!root) return [];
        if (!root.left && !root.right) {
            return [String.fromCharCode(97 + root.val)]
        }
        let temp = []
        let left = findSmallest(root.left)
        let right = findSmallest(root.right)
        for (let x of left) {
            let str = String.fromCharCode(97 + root.val)
            temp.push(x + str)
        }
        for (let x of right) {
            let str = String.fromCharCode(97 + root.val)
            temp.push(x + str)
        }
        return temp
    }
    let res = findSmallest(root)

    return res.sort()[0]

};