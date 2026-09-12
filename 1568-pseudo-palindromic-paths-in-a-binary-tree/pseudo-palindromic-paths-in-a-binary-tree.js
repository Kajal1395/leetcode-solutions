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
    let freq = new Array(10).fill(0)
    let oddCount = 0
    let res = 0
    function dfs(root) {
        if (!root) return false
        freq[root.val]++
        if (freq[root.val] % 2 !== 0) {
            oddCount++
        } else {
            oddCount--
        }
        if (!root.left && !root.right) {
            if (oddCount <= 1) {
                res++
            }
            freq[root.val]--
            if (freq[root.val] % 2 !== 0) {
                oddCount++
            } else {
                oddCount--
            }
            return
        }

        dfs(root.left)
        dfs(root.right)
        freq[root.val]--
        if (freq[root.val] % 2 !== 0) {
            oddCount++
        } else {
            oddCount--
        }

    }
    dfs(root)
    return res

};