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
    const result = []
        for (let i=0; i< arr.length; i++){
            if(fn(arr[i],i)){
                result.push(arr[i]);
            }
        }
        return result;
}



var reduce = function(nums, fn, init) {
    let result = init;
    for(let i=0; i < nums.length; i++) {
        result = fn(result, nums[i]);
    }
    return result;
};
