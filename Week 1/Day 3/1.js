/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        return("Hello World")
    }
};


var createCounter = function(n) {
    let count = n
    return function() {
        return count++
    };
};

/**
 * @param {any} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: function(expected) {
            if (val === expected) {
                return true; // Correctly return true if values are strictly equal
            } else {
                throw new Error("Not Equal"); // Correctly throw an error for inequality
            }
        },
        notToBe: function(expected) {
            if (val !== expected) {
                return true; // Correctly return true if values are not strictly equal
            } else {
                throw new Error("Equal"); // Correctly throw an error for equality
            }
        }
    };
};
