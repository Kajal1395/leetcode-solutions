/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    let dummy = new ListNode(-1)
    dummy.next = head
    let before = dummy
    while (before.next && before.next.next) {
        let first = before.next
        let second = first.next
        let after = second.next

        before.next = second
        second.next = first
        first.next = after

        before = first
    }
    return dummy.next

};