class Node {
    constructor(key, value, freq = 1) {
        this.key = key;
        this.value = value;
        this.freq = freq;
        this.prev = null;
        this.next = null;
    }
}

class LFUDoublyLinkedList {
    constructor() {
        this.head = new Node(-1);
        this.tail = new Node(-1);

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    remove(node) {
        let before = node.prev;
        let after = node.next;

        before.next = after;
        after.prev = before;

        node.prev = null;
        node.next = null;
    }

    addToTail(node) {
        let previous = this.tail.prev;

        previous.next = node;
        node.prev = previous;

        node.next = this.tail;
        this.tail.prev = node;
    }

    removeFromHead() {
        let node = this.head.next;
        this.remove(node);
        return node;
    }

    isEmpty() {
        return this.head.next === this.tail;
    }
}

/**
 * @param {number} capacity
 */
var LFUCache = function (capacity) {
    this.capacity = capacity;
    this.keyNode = new Map();
    this.freqDll = new Map();
    this.size = 0;
    this.minFreq = 0;
};


LFUCache.prototype.addNewNode = function (key, value) {
    let node = new Node(key, value);

    this.keyNode.set(key, node);

    if (!this.freqDll.has(1)) {
        this.freqDll.set(1, new LFUDoublyLinkedList());
    }

    this.freqDll.get(1).addToTail(node);

    this.size++;
    this.minFreq = 1;
};


LFUCache.prototype.updateFrequency = function (node) {

    let oldFreq = node.freq;

    let oldList = this.freqDll.get(oldFreq);

    oldList.remove(node);

    if (oldFreq === this.minFreq && oldList.isEmpty()) {
        this.minFreq++;
    }

    node.freq++;

    if (!this.freqDll.has(node.freq)) {
        this.freqDll.set(node.freq, new LFUDoublyLinkedList());
    }

    this.freqDll.get(node.freq).addToTail(node);
};


/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {

    if (!this.keyNode.has(key)) {
        return -1;
    }

    let node = this.keyNode.get(key);

    this.updateFrequency(node);

    return node.value;
};


/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {

    if (this.capacity === 0) return;

    if (this.keyNode.has(key)) {

        let node = this.keyNode.get(key);

        node.value = value;

        this.updateFrequency(node);

    } else {

        if (this.size === this.capacity) {

            let minFreqList = this.freqDll.get(this.minFreq);

            let removedNode = minFreqList.removeFromHead();

            this.keyNode.delete(removedNode.key);

            this.size--;
        }

        this.addNewNode(key, value);
    }
};