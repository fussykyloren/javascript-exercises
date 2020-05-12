const repeatString = function(word, repeatTimes) {
    returnRepeatString = "";
    if (repeatTimes >= 0) {
        for(i = 0; i < repeatTimes; i++) {
            returnRepeatString += word;
        }
    }
    else {
        returnRepeatString = "ERROR";
    }
    return returnRepeatString;
};

module.exports = repeatString
