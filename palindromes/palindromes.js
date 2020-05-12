const palindromes = function(word) {
    let returnString = word.toLowerCase().replace(/[^A-Za-z]/g, "");
    return returnString.split("").reverse().join("") == returnString;
}

module.exports = palindromes
