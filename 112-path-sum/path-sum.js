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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    let sum = 0;
    function pathsum(root) {
        if (!root) return false;
        sum += root.val;
        if (!root.left && !root.right && sum === targetSum) {
            return true;
        }
        let leftSum = pathsum(root.left);
        let rightSum = pathsum(root.right);
        sum -= root.val;
        return leftSum || rightSum;
    }
    return pathsum(root);

};