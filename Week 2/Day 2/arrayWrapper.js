/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function(nums) {
        this.nums=nums;
    }


/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function() {
    return this.nums.reduce((sum,num) => sum+num,0)
}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
    return `[${this.nums.join(',')}]`
}

class Calculator {
    
    /** 
     * @param {number} value
     */
    constructor(value) {
        this.result = value; // Initialize the result with the given value
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value) {
        this.result += value; // Add the given value to the result
        return this; // Return the instance to enable method chaining
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value) {
        this.result -= value; // Subtract the given value from the result
        return this; // Return the instance to enable method chaining
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */  
    multiply(value) {
        this.result *= value; // Multiply the result by the given value
        return this; // Return the instance to enable method chaining
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if (value === 0) {
            // Handle division by zero
            throw new Error("Division by zero is not allowed");
        }
        this.result /= value; // Divide the result by the given value
        return this; // Return the instance to enable method chaining
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.result = Math.pow(this.result, value); // Raise the result to the power of the given value
        return this; // Return the instance to enable method chaining
    }
    
    /** 
     * @return {number}
     */
    getResult() {
        return this.result; // Return the current result
    }
}

// Example Usage:

try {
    const calc = new Calculator(10);
    console.log(calc.add(5).subtract(3).multiply(2).divide(4).power(3).getResult()); 
    // Output: 216 (10 + 5 - 3 = 12, * 2 = 24, / 4 = 6, ^ 3 = 216)
} catch (error) {
    console.log(error.message);
}

try {
    const calc = new Calculator(20);
    console.log(calc.divide(0).getResult()); // Throws "Division by zero is not allowed"
} catch (error) {
    console.log(error.message); // Output: "Division by zero is not allowed"
}


