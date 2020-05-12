const removeFromArray = function(...arguments) {
    const array = arguments[0];
    
    const arrayToReturn = [];
    
    array.forEach((arg) => {
        if(!arguments.includes(arg)) {
            arrayToReturn.push(arg);
        }
    });
    
    return arrayToReturn;
};

module.exports = removeFromArray
