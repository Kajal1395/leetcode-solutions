
var swapNodes = function (head, k) {
    let slow = head
    let fast = head
    let count = 1
    while (count < k) {
        fast = fast.next
        count++
    }
    let firstK = fast
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next
    }
    let secondK = slow;

    [firstK.val, secondK.val] = [secondK.val, firstK.val];
    return head

};