const reverseString = function(inputString) {
    let inverseArray = inputString.split("");
    let rightArray = [];
    for (n = inverseArray.length; n>=0; n--) {
        rightArray.push(inverseArray[n]);
    }
    return  rightArray.join("");

};

// Do not edit below this line
module.exports = reverseString;
