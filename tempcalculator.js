const celciusToFahrenheit = celcius => (celcius * 1.8) + 32;
const fahrenheitToCelcius = fahrenheit => (fahrenheit - 32) / 1.8;

const convertTemperature = (temperature, unit) => {
    if (unit === "C") {
        return celciusToFahrenheit (temperature);
} else if (unit === "F") {
        return fahrenheitToCelcius (temperature)
}  else {
        return `Invalid unit. Use 'C' for Celcius or 'F' for Fahrenheit`;
    }
}

const celciusValue = 25;
const fahrenheitValue = 17;

const convertedToFahrenheit = convertTemperature(celciusValue, "C");
const convertedToCelcius = convertTemperature (fahrenheitValue, "F");

console.log(convertedToFahrenheit);
console.log(convertedToCelcius);