/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
 var shuffle = function(nums, n) {
    var output = [];
    var groupX = [];
    var groupY = [];
    
    groupX = nums.splice(0,n);
    groupY = nums.splice(0,n);
    
    for(var i = 0; i < n; i++){
        output.push(groupX[i]);
        output.push(groupY[i]);
    };
    
    return output
};