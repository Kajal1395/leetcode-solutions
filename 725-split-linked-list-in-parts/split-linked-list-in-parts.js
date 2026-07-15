/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (head, k) {

    let res = []
    let curr = head
    let length = 0;
    let tail = head;

    while (tail) {
        length++;
        tail = tail.next;
    }
    console.log(length, 'length')
    let base = Math.floor(length / k)
    let extra = length % k
    let countK = 1
    while (countK <= k) {
        if (!head) {
            res.push(null);
            countK++
            continue;
        }
        let newHead = head
        let size = base
        if (extra > 0) {
            size++
            extra--
        }
        let ind = 1
        while (ind < size) {
            curr = curr.next
            ind++
        }
        let nextHead = curr.next
        curr.next = null
        res.push(newHead)
        head = nextHead
        curr = nextHead
        countK++
    }
    return res

};