const leapYears = function(year) {
    return yearIsDivisibleBy(year, 4) && !yearIsDivisibleBy(year, 100) || yearIsDivisibleBy(year, 400)
};

function yearIsDivisibleBy(year, number) {
    return year % number === 0
}


// Do not edit below this line
module.exports = leapYears;
