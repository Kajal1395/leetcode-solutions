/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity
    this.LRU = new Map()

};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.LRU.has(key)) {
        let value = this.LRU.get(key)
        this.LRU.delete(key)
        this.LRU.set(key, value)
        return value

    }
    return -1

};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.LRU.has(key)) {
        this.LRU.delete(key)
    }
    else {
        if (this.LRU.size === this.capacity) {
            let leastUsed = this.LRU.keys().next().value
            this.LRU.delete(leastUsed)

        }
    }
    this.LRU.set(key, value)

};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */