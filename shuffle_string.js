/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    const newArr = []
    for(i=0; i<indices.length; i++) {
        letterLocation = indices.indexOf(i)
        newArr.push(s[letterLocation])
    }
    return newArr.join('')
};