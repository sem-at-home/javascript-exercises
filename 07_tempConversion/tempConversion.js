const convertToCelsius = function(fahrenheit) {
  const celsius = (fahrenheit - 32) * 5 / 9
  return roundToOneDecimal(celsius)
};

const convertToFahrenheit = function(celsius) {
  const fahrenheit = celsius * 9 / 5 + 32
  return roundToOneDecimal(fahrenheit)
};

function roundToOneDecimal(number) {
  return Math.round(number * 10) / 10
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
