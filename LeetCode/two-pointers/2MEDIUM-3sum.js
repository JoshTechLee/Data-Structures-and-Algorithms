// https://leetcode.com/problems/3sum/

var threeSum = function(nums) {
    nums.sort((a, b) => a - b)
    const ans = []
    const seen = {}
    const length = nums.length - 1
    for (let i = 0; i <= length - 2; i ++) {
        for (let j = i + 1; j <= length - 1; j++) {
            const complement = 0 - nums[i] - nums[j]
            const key = JSON.stringify([nums[i], nums[j], complement])
            if (nums[i] === nums[i - 1] || seen[key]) continue
            if (binarySearch(nums, complement, j + 1)) {
                ans.push([nums[i], nums[j], complement])
                seen[key] = true
            }
        }
    }
    return ans
};

var binarySearch = function(nums, target, l = 0) {
    let r = nums.length
    while (l < r) {
        let m = Math.floor((l + r) / 2)
        if (nums[m] < target) l = m + 1
        else if (nums[m] > target) r = m
        else return true
    }
    return false
}