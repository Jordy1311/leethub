/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    const genProd = (accum, current) => accum * current
    return Math.sign(nums.reduce(genProd))
};