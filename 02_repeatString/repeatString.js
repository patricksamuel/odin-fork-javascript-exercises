const repeatString = function(inputText,repetitionMax) {
    let resultString = [];
    if (repetitionMax<0){
        return "ERROR"
    }
    for (let i = 0; i<repetitionMax; i++) {
        resultString.push(inputText);
    }
    return resultString.join("")
};

// Do not edit below this line
module.exports = repeatString;
