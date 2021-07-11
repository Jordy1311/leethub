/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let output = [];
    for (i=0; i<2; i++) {
        output.push(...nums)
    }
    return output
};