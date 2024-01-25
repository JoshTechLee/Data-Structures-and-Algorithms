//https://leetcode.com/problems/counting-bits/

// counting each iteration
var hammingWeight = function(n) {
    let result = 0
    while (n != 0) {
        const isOdd = n & 1
        if (isOdd === 1) result += 1
        n = n >>> 1
    }
    return result
};

var countBits = function(n) {
    let result = []
    for(let i = 0; i <=n ; i++) {
        result.push(hammingWeight(i))
    }
    return result
}


// creating 1 solution array as reference
var hammingWeight = function(n) {
    let result = 0
    while (n != 0) {
        const isOdd = n & 1
        if (isOdd === 1) result += 1
        n = n >>> 1
    }
    return result
};

const getArray = () => {
    let result = []
    for (let i = 0; i < 10**5; i++) {
        result.push(hammingWeight(i))
    }
    return result
}

const ref = getArray() // list of all counted bits from 1 to 10^5

var countBits = function(n) {
    return ref.slice(0, n+1)
};

// using dynamic programming
var countBits = function(n) {
    let dp = (new Array(n+1)).fill(0)
    let offset = 1
    for (let i = 1; i <= n; i++) {
        if (offset * 2 === i) {
            offset = i
        }
        dp[i] = 1 + dp[i - offset]
    }
    return dp
} 
