//https://leetcode.com/problems/number-of-1-bits/

// simple string manipulation
var hammingWeight = function(n) {
    let string = n.toString(2)
    let nums = string.split("")
    let total = 0
    for (const num of nums) {
        if (num === '1') {
            total += 1
        }
    }
    return total
};

// bit solution
var hammingWeight = function(n) {
    let result = 0
    while (n != 0) {
        const isOdd = n & 1
        if (isOdd === 1) result += 1
        n = n >>> 1
    }
    return result
};