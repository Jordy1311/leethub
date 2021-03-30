// USER FEEDBACK VERSION
    /**
     * @param {string[][]} items
     * @param {string} ruleKey
     * @param {string} ruleValue
     * @return {number}
     */
    let countMatches = function(items, ruleKey, ruleValue) {    
        let output = 0;
        items.forEach(function(item) {
            // console.log(item[1]);
            switch(ruleKey) {
                case "type":
                    if(item[0] == ruleValue) {
                        output += 1;
                        console.log('item-type match!')
                    } else {
                        console.log('no item-type match')
                    }
                break
                case "color":
                    if(item[1] == ruleValue) {
                        output += 1;
                        console.log('item-color match!')
                    } else {
                        console.log('no item-color match')
                    }
                break
                case "name":
                    if(item[2] == ruleValue) {
                        output += 1;
                        console.log('item-name match!')
                    } else {
                        console.log('no item-name match')
                    }
                break
            }
        })
        return output
    }

// REFINED VERSION
    /**
     * @param {string[][]} items
     * @param {string} ruleKey
     * @param {string} ruleValue
     * @return {number}
     */
    let countMatches = function(items, ruleKey, ruleValue) {    
        let output = 0;
        items.forEach(function(item) {
            switch(ruleKey) {
                case "type":
                    if(item[0] == ruleValue) {output ++;}
                break
                case "color":
                    if(item[1] == ruleValue) {output ++;}
                break
                case "name":
                    if(item[2] == ruleValue) {output ++;}
                break
            }
        })
        return output
    }