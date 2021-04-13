/**
 * @param {number} n
 * @return {number}
 */
 var numberOfMatches = function(n) {
    return n - 1
    
    // Incorrectly interpretted question solution (counts rounds until winner)
    // let roundCounter = 0
    // let teamsInRunning = 0
    // teamsInRunning += n
    // while(teamsInRunning > 1) {
    //     if(teamsInRunning % 2 == 0) {
    //         teamsInRunning = teamsInRunning / 2
    //         roundCounter++
    //     } else {
    //         teamsInRunning = (teamsInRunning - 1) / 2 + 1
    //         roundCounter++
    //     }
    // }
    // return roundCounter
};