/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    var maybeMax = 0;
    var max = 0;
    
    for(i=0; i<accounts.length; i++){
        var maybeMax = accounts[i].reduce((total, amount) => total + amount);
        if(maybeMax > max){max = maybeMax;};
    }    
    return max    
};