const reverseString = function(word) {
    let returnReverseString = "";
    
    for(i = 0; i <= word.length; i++){
        returnReverseString += word.charAt(word.length - i);
    }
    
    return returnReverseString;
};

module.exports = reverseString
