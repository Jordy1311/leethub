/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let individualWords = {};
    let findWords = (string) => {
        let noSpaces = string.split(' ').join('');
        let tempWord = "";
        
        for(i=0; i<noSpaces.length; i++) {
            if (parseInt(noSpaces[i]) % 1 === 0) {
                // IS A NUMBER
                individualWords[noSpaces[i]] = tempWord;
                tempWord = "";
                } else {
                    // IS A LETTER
                    tempWord += noSpaces[i];
                };
        };
    };
    
    findWords(s);
    let output = (Object.values(individualWords)).toString();
    return output.split(",").join(" ")
};