// https://leetcode.com/problems/container-with-most-water/submissions/

var maxArea = function(height) {
    let l = 0
    let r = height.length - 1
    let max = 0
    while (l < r) {
        const current = (r - l) * Math.min(height[l], height[r])
        if (current > max) max = current
        if (height[l] < height[r]) l = l + 1
        else r = r - 1
    }
    return max
};