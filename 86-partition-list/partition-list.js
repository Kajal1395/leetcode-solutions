/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    let leftDummy = new ListNode(-1)
    let leftTail = leftDummy
    let rightDummy = new ListNode(-1)
    let rightTail = rightDummy
    let curr = head
    while (curr) {
        if (curr.val >= x) {
            rightTail.next = curr
            rightTail = curr
        } else {
            leftTail.next = curr
            leftTail = curr
        }
        curr = curr.next
    }
    rightTail.next = null
    leftTail.next = rightDummy.next;
    return leftDummy.next;
};