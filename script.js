const inputs = document.querySelectorAll('.input');
const celsiusEl = document.getElementById('celsiusInput');
const fahrenheitEl = document.getElementById('fahrenheitInput');
const kelvinEl = document.getElementById('kelvinInput');

 for(let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('change', function calculateTemp(e) {
        const currentValue = Number(e.target.value);
        switch (e.target.name) {
            case "celsius":
                kelvinEl.value = (currentValue + 273.15).toFixed(2);
                fahrenheitEl.value = ((currentValue * 1.8) + 32).toFixed(2);
                break;
            case "fahrenheit":
                kelvinEl.value = ((currentValue - 32) / 1.8 + 273.15).toFixed(2);
                celsiusEl.value = ((currentValue - 32) / 1.8).toFixed(2);
                break;
            case "kelvin":
                celsiusEl.value = (currentValue - 273.15).toFixed(2);
                fahrenheitEl.value = ((currentValue - 273.15) * 1.8 + 32).toFixed(2);
                break;
            default:
                break;
        }
    })
 }