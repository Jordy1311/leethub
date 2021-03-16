/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    
    var sum = 0;
    var outputArray = [];
    
    for(var i = 0; i < nums.length; i++){
        sum = sum + nums[i];
        outputArray.push(sum);
    }
    
    return outputArray;
    
};