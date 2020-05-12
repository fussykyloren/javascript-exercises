const leapYears = function(year) {
    returnBool = false;
    if(year % 4 == 0 && year % 100 !== 0) {
        returnBool = true;
    }
    else if ((year % 4 == 0) && (year % 400 == 0)) {
        returnBool = true;
    }
    else {
        returnBool = false;
    }
    return returnBool;
}

module.exports = leapYears
