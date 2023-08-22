// https://leetcode.com/problems/longest-substring-without-repeating-characters/submissions/

var lengthOfLongestSubstring = function(s) {
    const set = new Set()
    let l = 0
    let longest = 0
    for (let r = 0; r < s.length; r++) {
        while(set.has(s[r])) {
            set.delete(s[l])
            l = l + 1
        }
        set.add(s[r])
        longest = Math.max(set.size, longest)
    }
    return longest
};

/* 
My Attempt: 
 - shifting was wrong
    - instead of moving left pointer to next valid substring, I created a completely new string
var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) return 0
    let l = 0
    let r = 0
    let longest = 1
    let seen = {[s[l]]: true}
    while (l < s.length) {
        if (s[r] in seen) {
            longest = Math.max((r - l), longest)
            console.log(l, r, seen, longest)
            seen = {[s[r]]: true}
            l = l + 1
            r = l
        }
        r = r + 1
        seen[s[r]] = true
    }
    return longest
};
*/