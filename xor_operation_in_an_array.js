/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let nums = [];
    for(i=0; i<n; i++){
        nums.push(start + 2*i);
    }
    let output = nums.reduce((a, b) => a ^ b);
    return output
};