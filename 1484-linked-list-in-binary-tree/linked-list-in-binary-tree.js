/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function (head, root) {
    function helper(list, node) {
        if (!list) return true
        if (!node) return false
        if (list.val !== node.val) return false
        return helper(list.next, node.left) || helper(list.next, node.right)
    }
    function dfs(list, node) {
        if (!node) return false
        let res;
        if (node.val === list.val) {
            res = helper(list, node)
        }
        if (res) {
            return true
        }
        return dfs(list, node.left) || dfs(list, node.right)

    }
    let list = head
    return dfs(list, root)


};