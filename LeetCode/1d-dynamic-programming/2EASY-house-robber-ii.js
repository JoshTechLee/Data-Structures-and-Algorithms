//https://leetcode.com/problems/house-robber-ii/description/

var robLine = function(nums) {
    if (nums.length <= 2) {
        return Math.max(...nums)
    }
    let dp = [0, 0, 0, ...nums]
    result = 0
    for (let i = 3; i < dp.length; i++) {
        dp[i] = dp[i] + Math.max(dp[i - 2], dp[i - 3])
        result = Math.max(dp[i], result)
    }
    return result
}

var rob = function(nums) {
    if (nums.length <= 3) {
        return Math.max(...nums)
    }
        
    const ignoreFirst = robLine(nums.slice(1, nums.length))
    const ignoreLast = robLine(nums.slice(0, nums.length - 1))

    
    return Math.max(ignoreFirst, ignoreLast)
};