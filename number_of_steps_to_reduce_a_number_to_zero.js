/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let count = 0
    let nom = 0
    nom += num
    while(nom > 0){
        if(nom % 2 === 0) {
            nom /= 2
            count++
        } else {
            nom--
            count++
        }
    }
    return count
};