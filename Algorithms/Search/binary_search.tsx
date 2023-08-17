// types to accept generic list, but MUST change comparison logic
// export const binarySearch = function<T>(nums: T[], target: T) {
export const binarySearch = function(nums: number[], target: number) {
    let l = 0
    let r = nums.length
    while (l < r) {
        let m = Math.floor((l + r) / 2)
        if (nums[m] < target) l = m + 1
        else if (nums[m] > target) r = m
        // return target location if found
        // else return m
    }
    // return where the target would be found
    return l
}