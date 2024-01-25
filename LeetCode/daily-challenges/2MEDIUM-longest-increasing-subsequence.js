/**
 * @param {number[]} nums
 * @return {number}
 */


const binarySearch = function(nums, target) {
    let l = 0
    let r = nums.length
    while (l < r) {
        let m = (l + r) >> 1
        if (nums[m].seqLength > target) l = m + 1
        else if (nums[m].seqLength < target) r = m
        else return m
    }
    return l
}

var lengthOfLIS = function(nums) {
    const savedSeqLengths = []
    for (const num of nums) {
        let currSeqLength = 1
        for (const {number, seqLength} of savedSeqLengths) {
            if (number < num) {
                currSeqLength += seqLength
                break
            }
        }
        const position = binarySearch(savedSeqLengths, currSeqLength)
        if (!savedSeqLengths[position] || savedSeqLengths[position].seqLength !== currSeqLength) 
            savedSeqLengths.splice(position, 0, {number: num, seqLength: currSeqLength})
        else {
            const curr = savedSeqLengths[position]
            savedSeqLengths[position] = {number: Math.min(curr.number, num), seqLength: curr.seqLength}
        }
    }
    return savedSeqLengths[0].seqLength
};