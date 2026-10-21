
var MinStack = function () {
    this.stack = []
    this.minVal = []
};

/** 
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function (value) {
    this.stack.push(value)
    if (this.minVal.length === 0) {
        this.minVal.push(value)
    }
    else {
        let currentMin = this.minVal[this.minVal.length - 1]
        this.minVal.push(Math.min(currentMin, value))

    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.stack.pop()
    this.minVal.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.minVal[this.minVal.length - 1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */