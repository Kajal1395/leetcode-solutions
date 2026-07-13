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
var removeNodes = function (head) {
    //reverse the linklist
    function reverse(head) {
        let prev = null
        let curr = head
        while (curr) {
            let nextEle = curr.next
            curr.next = prev
            prev = curr
            curr = nextEle
        }
        return prev
    }

    head = reverse(head)
    let dummy = new ListNode(-1)
    let prev1 = dummy
    let maxLeft = -Infinity
    let curr1 = head
    while (curr1) {
        if (curr1.val >= maxLeft) {
            maxLeft = curr1.val
            prev1 = curr1
        } else if (curr1.val < maxLeft) {
            prev1.next = curr1.next
        }
        curr1 = curr1.next
    }

    let res=reverse(head)
    return res

};