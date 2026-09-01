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
 * @return {number[]}
 */
var rightSideView = function (root) {
    if (!root) return [];
    let res = [];
    let queue = [root];
    while (queue.length) {
        let count = 0;
        let size = queue.length;
        let level = [];
        while (count < size) {
            let node = queue.shift();
            if (node.left) {
                queue.push(node.left);
            }
            node.right && queue.push(node.right);
            level.push(node.val);
            count++;
        }
        res.push(level[level.length - 1]);
    }
    return res;
};