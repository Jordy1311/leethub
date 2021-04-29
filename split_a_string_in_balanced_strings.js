/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let count = 0;
    let are = 0;
    let ell = 0;
    for(i=0; i<s.length; i++) {
        switch(s[i]){
            case 'R': are++;
            break;
            case 'L': ell++;
            break;
        }
        if(are === ell) {
            count++;
            are = 0;
            ell = 0;
        }
    }
    return count
};