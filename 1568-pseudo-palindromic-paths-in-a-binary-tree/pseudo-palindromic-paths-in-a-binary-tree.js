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
var pseudoPalindromicPaths = function (root) {
    let temp = []
    let oddCount = 0
    let freq = new Array(10).fill(0);

    function traverse(root) {
        if (!root) return;
        temp.push(root.val)
        freq[root.val]++;
        if (!root.left && !root.right) {

            let count = 0
            for (let i = 0; i <= 9; i++) {
                if (freq[i] % 2 !== 0) {
                    count++
                }
            }
            if (count <= 1) {
                oddCount++
            }
        }

        traverse(root.left)
        traverse(root.right)
        freq[root.val]--
        temp.pop()
    }
    traverse(root)
    return oddCount

};