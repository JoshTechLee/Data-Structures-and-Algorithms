// https://leetcode.com/problems/longest-repeating-character-replacement/submissions/

var characterReplacement = function(s, k) {
    let count = {}
    let l = 0
    let longest = 0
    let remaining = k
    for (let r = 0; r < s.length; r ++) {
        if (s[r] in count) {
            count[s[r]] = count[s[r]] + 1
        } else {
            count[s[r]] = 1
        }
        let mostFreq = Math.max(...Object.values(count), 0)
        let length = r - l
        while((length - mostFreq) >= k) {
            count[s[l]] = count[s[l]] - 1
            l = l + 1
            mostFreq = Math.max(...Object.values(count))
            length = r - l
        }
        longest = Math.max(longest, r - l + 1)
    }
    return longest
};