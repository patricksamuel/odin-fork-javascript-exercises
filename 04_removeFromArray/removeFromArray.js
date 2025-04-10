const removeFromArray = function(inputArrays, ...toBeRemoved) {
    let argumentArray=Array.from(inputArrays);
    let outputArray =[];
    for (const arg of argumentArray){
        outputArray.push(arg);
        for (const elementtoBeRemoved of toBeRemoved) {
            if (arg === elementtoBeRemoved ) {
                outputArray.pop();
            }
        }

    }
    return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
