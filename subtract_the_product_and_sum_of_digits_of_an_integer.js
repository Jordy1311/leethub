/**
 * @param {number} n
 * @return {number}
 */
 var subtractProductAndSum = function(n) {
    let digits = Array.from(n.toString()).map(Number)
    let product = 1
    let sum = 0    
    for(i=0; i<digits.length; i++) {
        product *= digits[i]
        sum += digits[i]
    }
    return product - sum      
};