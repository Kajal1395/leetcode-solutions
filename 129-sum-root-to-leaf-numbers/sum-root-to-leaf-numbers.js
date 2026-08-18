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
var sumNumbers = function(root) {
       function sum(root) {
            if (!root) return [];
            if (!root.left && !root.right) return [root.val];
            let temp = [];
            let left = sum(root.left);
            let right = sum(root.right);
            for (let x of left) {
                temp.push(`${root.val}` + x);
            }
            for (let x of right) {
                temp.push(`${root.val}` + x);
            }
            console.log(temp, "te");
            return temp;
        }
        let res = sum(root);
        let val = 0;
        for (let x of res) {
            val += Number(x);
        }
        return val;
    
};