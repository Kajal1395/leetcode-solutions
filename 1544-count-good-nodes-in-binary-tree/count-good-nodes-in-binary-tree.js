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
 * @return {number}
 */
var goodNodes = function (root) {
    function goodNodeCount(node, maxsofar) {
        if (!node) return 0;
        let currCount = 0;
        if (node.val >= maxsofar) {
            currCount += 1;
            maxsofar = node.val;
        }
        let leftCount = 0;
        if (node.left) {
            leftCount = goodNodeCount(node.left, maxsofar);
        }
        let rightCount = 0;
        if (node.right) {
            rightCount = goodNodeCount(node.right, maxsofar);
        }
        return currCount + leftCount + rightCount;
    }
    return goodNodeCount(root, -Infinity);

};