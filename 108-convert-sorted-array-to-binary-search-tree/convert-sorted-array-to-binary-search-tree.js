/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    let n = nums.length
    function build(leftInd, rightInd) {
        if (leftInd > rightInd) return null
        let mid = Math.floor((leftInd + rightInd) / 2)
        let node = new TreeNode(nums[mid])
        node.left = build(leftInd, mid - 1)
        node.right = build(mid + 1, rightInd)
        return node
    }
    return build(0, n - 1)

};