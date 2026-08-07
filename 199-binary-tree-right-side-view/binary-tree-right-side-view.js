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
var rightSideView = function(root) {
       if (!root) return [];
        if (root && !root.left && !root.right) return [root.val];
        let queue = [];
        queue.push(root);
        let res = [];
        while (queue.length) {
            let size = queue.length;
            let count = 0;
            while (count < size) {
                let node = queue.shift();
                if (count === size - 1) res.push(node.val);
                if (node.left) {
                    queue.push(node.left);
                }
                if (node.right) {
                    queue.push(node.right);
                }
                count++;
            }
        }
        return res;
};