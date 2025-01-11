function map(arr, fn) {
    const result = []; // Initialize an empty array to store the transformed elements
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i)); // Apply the function `fn` to each element and its index
    }
    return result; // Return the transformed array
}

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const result = []; // Initialize an empty array to store the filtered elements
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) { // If the function `fn` returns true, include the element
            result.push(arr[i]);
        }
    }
    return result; // Return the filtered array
};

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let result = init; // Initialize the result with the initial value
    for (let i = 0; i < nums.length; i++) {
        result = fn(result, nums[i]); // Update the result by applying the function `fn`
    }
    return result; // Return the final reduced value
};
