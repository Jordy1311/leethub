/**
 * @param {number} n
 * @return {number}
 */
 var subtractProductAndSum = function(n) {
    // SOLVED WITH FOR LOOP
    // let digits = Array.from(n.toString()).map(Number)
    // let product = 1
    // let sum = 0    
    // for(i=0; i<digits.length; i++) {
    //     product *= digits[i]
    //     sum += digits[i]
    // }
    // return product - sum
    
    // SOLVED WITH REDUCERS
    let digits = Array.from(n.toString()).map(Number)
    let product = digits.reduce((a,b) => a*b)
    let sum = digits.reduce((a,b) => a+b)
    return product - sum
};