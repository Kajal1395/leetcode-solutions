/**
 * @param {number} k
 */

class ListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
var MyCircularQueue = function (k) {
    this.capacity = k;
    this.size = 0;
    this.front = null;
    this.rear = null;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
    if (this.size >= this.capacity) {
        return false;
    }
    if (this.size < this.capacity) {
        let newNode = new ListNode(value);
        if (this.size === 0) {
            this.front = newNode;
            this.rear = newNode;
            this.size++;
            return true;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
            this.size++;
            return true;
        }
    }
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
    if (this.size === 0) return false;
    this.front = this.front.next;
    this.size--;
    return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
    return this.size === 0 ? -1 : this.front.value;

};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
    return this.size === 0 ? -1 : this.rear.value;

};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
    return this.size === 0;

};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
    return this.size === this.capacity;
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */