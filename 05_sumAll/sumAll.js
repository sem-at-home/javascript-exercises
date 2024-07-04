const sumAll = function(min, max) {
    if ([min, max].some(invalidInput)) return "ERROR"
    if (min > max) [min, max] = [max, min]
    let sum = 0
    for (i = min; i <= max; i++) {
        sum += i
    }
    return sum
};

function invalidInput(value) {
    return typeof value != 'number' || value < 0
}

// Do not edit below this line
module.exports = sumAll;
