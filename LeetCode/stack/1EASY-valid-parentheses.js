// https://leetcode.com/problems/valid-parentheses

var isValid = function(s) {
    const stack = []
    const brackets = {'(': ')', '{': '}', '[': ']'}
    for (const bracket of s) {
        if (bracket in brackets) {
            stack.push(bracket)
        } else {
            if (stack.length == 0) return false
            const complement = stack.pop()
            if (brackets[complement] !== bracket) return false
        }
    }
    if (stack.length !== 0) return false
    return true
};