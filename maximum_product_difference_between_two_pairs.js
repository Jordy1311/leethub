/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    let numsOrdered = nums.sort((a, b) => a - b)
    let big1 = numsOrdered[nums.length-1]
    let big2 = numsOrdered[nums.length-2]
    return (big1 * big2 - numsOrdered[0] * numsOrdered[1])
};