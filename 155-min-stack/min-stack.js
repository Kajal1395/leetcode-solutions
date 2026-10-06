
var MinStack = function () {
    this.stack = []
    this.minVal = Infinity
};

/** 
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function (value) {
    this.minVal = Math.min(this.minVal, value)
    this.stack.push([value, this.minVal])
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.stack.pop()
    if (this.stack.length) {
        this.minVal = this.stack[this.stack.length - 1][1]
    } else {
        this.minVal = Infinity
    }


};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1][0]

};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.stack[this.stack.length - 1][1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */