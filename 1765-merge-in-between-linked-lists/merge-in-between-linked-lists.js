/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
    let nodeA = null
    let nodeB = null
    let curr1 = list1
    let ind = 0
    while (curr1.next) {
        if (ind === a - 1) {
            nodeA = curr1
        }
        if (ind === b) {
            nodeB = curr1
        }
        curr1 = curr1.next
        ind++
    }
    nodeA.next = list2
    let curr2 = list2
    while (curr2.next) {
        curr2 = curr2.next
    }
    let end = nodeB.next
    // nodeB.next = null
    curr2.next = end
    return list1

};