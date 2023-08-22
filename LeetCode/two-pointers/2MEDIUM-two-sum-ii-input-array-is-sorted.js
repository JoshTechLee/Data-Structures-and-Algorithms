// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted

var twoSum = function(numbers, target) {
    let l = 0
    let r = numbers.length - 1
    while(true) {
        const currentValue = numbers[l] + numbers[r]
        if (currentValue === target) return [l + 1, r + 1]
        if (currentValue < target) l = l + 1
        else r = r - 1
    }
};