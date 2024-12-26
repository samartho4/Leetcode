var isEmpty = function(obj) {
    // Check if obj is an array
    if (Array.isArray(obj)) {
        return obj.length === 0; // Array is empty if length is 0
    }

    // Check if obj is an object
    return Object.keys(obj).length === 0; // Object is empty if it has no keys
};


/**
 * @param {number[]} arr
 * @param {number} size
 * @return {number[][]}
 */
var chunk = function(arr, size) {
    const result = []; // Array to store the chunks

    // Iterate over the array in steps of 'size'
    for (let i = 0; i < arr.length; i += size) {
        // Slice the array from 'i' to 'i + size'
        result.push(arr.slice(i, i + size));
    }

    return result; // Return the chunked array
};
/**
 * @return {null|boolean|number|string|Array|Object}
 */

Array.prototype.last = function()
{if(this.length === 0){
    return -1
}
return this[this.length-1]
};
/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    let grouped = {};
    this.forEach(item => {
        let key = fn(item);
        if(!grouped[key]){
            grouped[key] = [];
        }
        grouped[key].push(item);
            });
            return grouped;
};

/**
 * @param {Array} arr - The array to sort.
 * @param {Function} fn - The function to determine the sort order.
 * @return {Array} - The sorted array.
 */
var sortBy = function(arr, fn) {
    // Use the sort method with a custom compare function
    return arr.sort((a, b) => {
        // Compare the results of applying fn to a and b
        return fn(a) - fn(b);
    });
};

function join(arr1, arr2) {
    let idMap = new Map();

    arr1.forEach((obj) => {
        idMap.set(obj.id, obj);
    });

    arr2.forEach((obj) => {
        if (idMap.has(obj.id)) {
            idMap.set(obj.id, { ...idMap.get(obj.id), ...obj });
        } else {
            idMap.set(obj.id, obj);
        }
    });
    return Array.from(idMap.values()).sort((a, b) => a.id - b.id);
}

var flat = function (arr, n) {
    if (n === 0) {
        // If depth is 0, return the array as it is
        return arr;
    }

    let result = arr; // Start with the original array

    for (let i = 0; i < n; i++) {
        let flattened = []; // Temporary array to store flattened elements

        for (let item of result) {
            if (Array.isArray(item)) {
                // If the item is an array, add its elements to 'flattened'
                flattened = flattened.concat(item);
            } else {
                // Otherwise, add the item directly
                flattened.push(item);
            }
        }

        result = flattened; // Update the result with the new flattened array

        // If there are no more nested arrays, we can stop early
        if (!result.some(Array.isArray)) {
            break;
        }
    }

    return result;
};


