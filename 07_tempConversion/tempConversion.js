const convertToCelsius = function(temp) {
  temp= ((temp-32)*5)/9;
  if (temp.toFixed(1) == temp) return temp | 0;
  return parseFloat(temp.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  temp= ((temp*9)/5) + 32;
  if (temp.toFixed(1) == temp) return temp | 0;
  return parseFloat(temp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
