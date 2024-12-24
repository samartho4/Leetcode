var addTwoPromises = async function(promise1, promise2) {
    const value1 = await promise1;
    const value2 = await promise2;

    return value1 + value2;
};

async function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}

var cancellable = function(fn, args, t) {
    const timeoutId = setTimeout(() => {
        fn(...args);
    }, t);
    return () => {
        clearTimeout(timeoutId);
    };
};

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    const timeoutId = setTimeout(() => {
        fn(...args);
    }, t);
    return () => {
        clearTimeout(timeoutId);
    };
};
var TimeLimitedCache = function() {
    this.cache = new Map(); // Store the key-value pairs with expiration metadata
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const now = Date.now(); // Get the current time
    const keyExists = this.cache.has(key) && this.cache.get(key).expiration > now;

    if (keyExists) {
        // Clear the existing timeout
        clearTimeout(this.cache.get(key).timeout);
    }

    // Set a new timeout to remove the key after `duration`
    const timeout = setTimeout(() => {
        this.cache.delete(key);
    }, duration);

    // Update the cache with the new value and expiration time
    this.cache.set(key, {
        value: value,
        expiration: now + duration,
        timeout: timeout,
    });

    return keyExists;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    const now = Date.now();

    if (this.cache.has(key) && this.cache.get(key).expiration > now) {
        return this.cache.get(key).value; // Return the value if it hasn't expired
    }

    return -1; // Key doesn't exist or has expired
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    const now = Date.now();
    let count = 0;

    for (const [key, data] of this.cache) {
        if (data.expiration > now) {
            count++; // Count the keys that haven't expired
        } else {
            this.cache.delete(key); // Clean up expired keys
        }
    }

    return count;
};
/**
 * @param {Function} fn - The function to debounce
 * @param {number} t - The debounce delay in milliseconds
 * @return {Function} - A debounced version of `fn`
 */
var debounce = function(fn, t) {
    let timer = null; // Timer to track the delay

    return function(...args) {
        // Clear the previous timer if it exists
        if (timer !== null) {
            clearTimeout(timer);
        }

        // Set a new timer to delay the function execution
        timer = setTimeout(() => {
            fn(...args); // Call the original function with arguments
        }, t);
    }; // <-- Add this closing brace to complete the returned function
};
/**
 * @param {Function} fn - The function to debounce
 * @param {number} t - The debounce delay in milliseconds
 * @return {Function} - A debounced version of `fn`
 */
var debounce = function(fn, t) {
    let timer = null; // Timer to track the delay

    return function(...args) {
        // Clear the previous timer if it exists
        if (timer !== null) {
            clearTimeout(timer);
        }

        // Set a new timer to delay the function execution
        timer = setTimeout(() => {
            fn(...args); // Call the original function with arguments
        }, t);
    }; // <-- Add this closing brace to complete the returned function
};


