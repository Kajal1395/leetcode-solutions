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
 * @return {boolean}
 */
var isCompleteTree = function (root) {
    let seenNull = false;
    let queue = [root];
    while (queue.length) {
        let node = queue.shift();
        if (!node) {
            seenNull = true;
            continue;
        }
        if (seenNull) return false;
        queue.push(node.left);
        queue.push(node.right);
    }
    return true;

};