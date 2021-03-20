/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    // FIND BIGGEST NUMBER IN CANDIES
    
    var output = [];
    var biggest = Math.max(...candies);   
    
    for(let i = 0; i < candies.length; i++){
        var candiesTotal = candies[i] + extraCandies;
        if(candiesTotal >= biggest){
            output.push(true);
            } else {
            output.push(false);
        }
    }
    return output
};