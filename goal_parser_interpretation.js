/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let interp = '';
    function addTo(str) {
        if(interp === '') {
            interp = str;
        } else {
            interp += str;
        }
    }
    for(i=0; i<command.length; i++) {
        console.log(command[i])
        switch(command[i]){
            case 'G': 
                    addTo('G'); 
            break;
            case '(': if(command[i+1] === ')') {
                    addTo('o'); 
                } else {
                    addTo('al'); 
            }
            break;
        }
    }
    return interp
};