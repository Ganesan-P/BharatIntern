document.addEventListener('DOMContentLoaded', function() {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    const convertButton = document.getElementById('convert');

    convertButton.addEventListener('click', function() {
        const celsiusValue = parseFloat(celsiusInput.value);
        const fahrenheitValue = parseFloat(fahrenheitInput.value);

        if (!isNaN(celsiusValue)) {
            const convertedFahrenheit = (celsiusValue * 9/5) + 32;
            fahrenheitInput.value = convertedFahrenheit.toFixed(2);
        } else if (!isNaN(fahrenheitValue)) {
            const convertedCelsius = (fahrenheitValue - 32) * 5/9;
            celsiusInput.value = convertedCelsius.toFixed(2);
        } else {
            alert("Please enter a valid temperature.");
        }
    });
});
