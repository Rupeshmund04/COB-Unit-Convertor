// Developed by - Rupesh Kumar Mund

// ==================== THEME TOGGLE ====================
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const theme = html.getAttribute('data-theme');
    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
    
    // Add animation to theme toggle
    themeToggle.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        themeToggle.style.transform = '';
    }, 300);
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

// ==================== SWAP UNITS FUNCTION ====================
function swapUnits(type) {
    const inputType = document.getElementById(`inputType${type}`);
    const resultType = document.getElementById(`resultType${type}`);
    const inputField = document.getElementById(`input${type}`);
    const resultField = document.getElementById(`result${type}`);
    
    // Swap select values
    const tempType = inputType.value;
    inputType.value = resultType.value;
    resultType.value = tempType;
    
    // Swap input values
    const tempValue = inputField.value;
    inputField.value = resultField.value;
    resultField.value = '';
    
    // Trigger conversion
    inputField.dispatchEvent(new Event('input'));
}

// ==================== DATA CONVERTER ====================
const inputData = document.getElementById("inputData");
const resultData = document.getElementById("resultData");
const inputTypeData = document.getElementById("inputTypeData");
const resultTypeData = document.getElementById("resultTypeData");

inputData.addEventListener("input", convertData);
inputTypeData.addEventListener("change", convertData);
resultTypeData.addEventListener("change", convertData);

function convertData() {
    const input = Number(inputData.value);
    const from = inputTypeData.value;
    const to = resultTypeData.value;
    
    if (!input) {
        resultData.value = '';
        return;
    }
    
    const conversions = {
        'gigabyte-megabyte': input * 1024,
        'gigabyte-kilobyte': input * 1048576,
        'gigabyte-gigabyte': input,
        'megabyte-gigabyte': input * 0.0009765625,
        'megabyte-kilobyte': input * 1024,
        'megabyte-megabyte': input,
        'kilobyte-megabyte': input * 0.0009765625,
        'kilobyte-gigabyte': input / 1048576,
        'kilobyte-kilobyte': input
    };
    
    resultData.value = (conversions[`${from}-${to}`] || 0).toFixed(6);
}

// ==================== LENGTH CONVERTER ====================
const inputLength = document.getElementById("inputLength");
const resultLength = document.getElementById("resultLength");
const inputTypeLength = document.getElementById("inputTypeLength");
const resultTypeLength = document.getElementById("resultTypeLength");

inputLength.addEventListener("input", convertLength);
inputTypeLength.addEventListener("change", convertLength);
resultTypeLength.addEventListener("change", convertLength);

function convertLength() {
    const input = Number(inputLength.value);
    const from = inputTypeLength.value;
    const to = resultTypeLength.value;
    
    if (!input) {
        resultLength.value = '';
        return;
    }
    
    const conversions = {
        'meter-kilometer': input * 0.001,
        'meter-centimeter': input * 100,
        'meter-meter': input,
        'kilometer-meter': input * 1000,
        'kilometer-centimeter': input * 100000,
        'kilometer-kilometer': input,
        'centimeter-meter': input * 0.01,
        'centimeter-kilometer': input * 0.00001,
        'centimeter-centimeter': input
    };
    
    resultLength.value = (conversions[`${from}-${to}`] || 0).toFixed(6);
}

// ==================== MASS CONVERTER ====================
const inputMass = document.getElementById("inputMass");
const resultMass = document.getElementById("resultMass");
const inputTypeMass = document.getElementById("inputTypeMass");
const resultTypeMass = document.getElementById("resultTypeMass");

inputMass.addEventListener("input", convertMass);
inputTypeMass.addEventListener("change", convertMass);
resultTypeMass.addEventListener("change", convertMass);

function convertMass() {
    const input = Number(inputMass.value);
    const from = inputTypeMass.value;
    const to = resultTypeMass.value;
    
    if (!input) {
        resultMass.value = '';
        return;
    }
    
    const conversions = {
        'gram-pound': input * 0.00220462262,
        'gram-kilogram': input * 0.001,
        'gram-gram': input,
        'kilogram-pound': input * 2.20462262,
        'kilogram-gram': input * 1000,
        'kilogram-kilogram': input,
        'pound-kilogram': input * 0.45359237,
        'pound-gram': input * 453.59237,
        'pound-pound': input
    };
    
    resultMass.value = (conversions[`${from}-${to}`] || 0).toFixed(6);
}

// ==================== TIME CONVERTER ====================
const inputTime = document.getElementById("inputTime");
const resultTime = document.getElementById("resultTime");
const inputTypeTime = document.getElementById("inputTypeTime");
const resultTypeTime = document.getElementById("resultTypeTime");

inputTime.addEventListener("input", convertTime);
inputTypeTime.addEventListener("change", convertTime);
resultTypeTime.addEventListener("change", convertTime);

function convertTime() {
    const input = Number(inputTime.value);
    const from = inputTypeTime.value;
    const to = resultTypeTime.value;
    
    if (!input) {
        resultTime.value = '';
        return;
    }
    
    // Convert to seconds first
    const toSeconds = {
        'second': 1,
        'minute': 60,
        'hour': 3600,
        'day': 86400,
        'week': 604800,
        'month': 2628000,
        'year': 31536000
    };
    
    const seconds = input * toSeconds[from];
    const result = seconds / toSeconds[to];
    
    resultTime.value = result.toFixed(6);
}

// ==================== TEMPERATURE CONVERTER ====================
const inputTemperature = document.getElementById("inputTemperature");
const resultTemperature = document.getElementById("resultTemperature");
const inputTypeTemperature = document.getElementById("inputTypeTemperature");
const resultTypeTemperature = document.getElementById("resultTypeTemperature");

inputTemperature.addEventListener("input", convertTemperature);
inputTypeTemperature.addEventListener("change", convertTemperature);
resultTypeTemperature.addEventListener("change", convertTemperature);

function convertTemperature() {
    const input = Number(inputTemperature.value);
    const from = inputTypeTemperature.value;
    const to = resultTypeTemperature.value;
    
    if (input === '' || isNaN(input)) {
        resultTemperature.value = '';
        return;
    }
    
    let result;
    
    // Convert to Celsius first
    let celsius;
    if (from === 'celsius') celsius = input;
    else if (from === 'fahrenheit') celsius = (input - 32) * 5/9;
    else if (from === 'kelvin') celsius = input - 273.15;
    
    // Convert from Celsius to target
    if (to === 'celsius') result = celsius;
    else if (to === 'fahrenheit') result = (celsius * 9/5) + 32;
    else if (to === 'kelvin') result = celsius + 273.15;
    
    resultTemperature.value = result.toFixed(2);
}

// ==================== SPEED CONVERTER ====================
const inputSpeed = document.getElementById("inputSpeed");
const resultSpeed = document.getElementById("resultSpeed");
const inputTypeSpeed = document.getElementById("inputTypeSpeed");
const resultTypeSpeed = document.getElementById("resultTypeSpeed");

inputSpeed.addEventListener("input", convertSpeed);
inputTypeSpeed.addEventListener("change", convertSpeed);
resultTypeSpeed.addEventListener("change", convertSpeed);

function convertSpeed() {
    const input = Number(inputSpeed.value);
    const from = inputTypeSpeed.value;
    const to = resultTypeSpeed.value;
    
    if (!input) {
        resultSpeed.value = '';
        return;
    }
    
    // Convert to m/s first
    const toMS = {
        'ms': input,
        'kmh': input / 3.6,
        'mph': input * 0.44704
    };
    
    const ms = toMS[from];
    
    // Convert from m/s to target
    const fromMS = {
        'ms': ms,
        'kmh': ms * 3.6,
        'mph': ms * 2.23694
    };
    
    resultSpeed.value = fromMS[to].toFixed(4);
}

// ==================== AREA CONVERTER ====================
const inputArea = document.getElementById("inputArea");
const resultArea = document.getElementById("resultArea");
const inputTypeArea = document.getElementById("inputTypeArea");
const resultTypeArea = document.getElementById("resultTypeArea");

inputArea.addEventListener("input", convertArea);
inputTypeArea.addEventListener("change", convertArea);
resultTypeArea.addEventListener("change", convertArea);

function convertArea() {
    const input = Number(inputArea.value);
    const from = inputTypeArea.value;
    const to = resultTypeArea.value;
    
    if (!input) {
        resultArea.value = '';
        return;
    }
    
    // Convert to square meters first
    const toSqMeter = {
        'sqmeter': input,
        'acre': input * 4046.86,
        'hectare': input * 10000
    };
    
    const sqMeter = toSqMeter[from];
    
    // Convert from square meters to target
    const fromSqMeter = {
        'sqmeter': sqMeter,
        'acre': sqMeter / 4046.86,
        'hectare': sqMeter / 10000
    };
    
    resultArea.value = fromSqMeter[to].toFixed(6);
}

// ==================== VOLUME CONVERTER ====================
const inputVolume = document.getElementById("inputVolume");
const resultVolume = document.getElementById("resultVolume");
const inputTypeVolume = document.getElementById("inputTypeVolume");
const resultTypeVolume = document.getElementById("resultTypeVolume");

inputVolume.addEventListener("input", convertVolume);
inputTypeVolume.addEventListener("change", convertVolume);
resultTypeVolume.addEventListener("change", convertVolume);

function convertVolume() {
    const input = Number(inputVolume.value);
    const from = inputTypeVolume.value;
    const to = resultTypeVolume.value;
    
    if (!input) {
        resultVolume.value = '';
        return;
    }
    
    // Convert to liters first
    const toLiter = {
        'liter': input,
        'gallon': input * 3.78541,
        'milliliter': input * 0.001
    };
    
    const liter = toLiter[from];
    
    // Convert from liters to target
    const fromLiter = {
        'liter': liter,
        'gallon': liter / 3.78541,
        'milliliter': liter * 1000
    };
    
    resultVolume.value = fromLiter[to].toFixed(6);
}

// ==================== ENERGY CONVERTER ====================
const inputEnergy = document.getElementById("inputEnergy");
const resultEnergy = document.getElementById("resultEnergy");
const inputTypeEnergy = document.getElementById("inputTypeEnergy");
const resultTypeEnergy = document.getElementById("resultTypeEnergy");

inputEnergy.addEventListener("input", convertEnergy);
inputTypeEnergy.addEventListener("change", convertEnergy);
resultTypeEnergy.addEventListener("change", convertEnergy);

function convertEnergy() {
    const input = Number(inputEnergy.value);
    const from = inputTypeEnergy.value;
    const to = resultTypeEnergy.value;
    
    if (!input) {
        resultEnergy.value = '';
        return;
    }
    
    // Convert to joules first
    const toJoule = {
        'joule': input,
        'calorie': input * 4.184,
        'kwh': input * 3600000
    };
    
    const joule = toJoule[from];
    
    // Convert from joules to target
    const fromJoule = {
        'joule': joule,
        'calorie': joule / 4.184,
        'kwh': joule / 3600000
    };
    
    resultEnergy.value = fromJoule[to].toFixed(6);
}

// ==================== CURRENCY CONVERTER ====================
const inputCurrency = document.getElementById("inputCurrency");
const resultCurrency = document.getElementById("resultCurrency");
const inputTypeCurrency = document.getElementById("inputTypeCurrency");
const resultTypeCurrency = document.getElementById("resultTypeCurrency");

let currencyRates = {};

// Fetch currency rates on page load
fetchCurrencyRates();

inputCurrency.addEventListener("input", convertCurrency);
inputTypeCurrency.addEventListener("change", () => {
    fetchCurrencyRates();
    convertCurrency();
});
resultTypeCurrency.addEventListener("change", convertCurrency);

async function fetchCurrencyRates() {
    try {
        const baseCurrency = inputTypeCurrency.value;
        const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${baseCurrency}.json`);
        const data = await response.json();
        currencyRates = data[baseCurrency];
        convertCurrency();
    } catch (error) {
        console.error('Error fetching currency rates:', error);
        resultCurrency.value = 'Error loading rates';
    }
}

function convertCurrency() {
    const input = Number(inputCurrency.value);
    const to = resultTypeCurrency.value;
    
    if (!input || Object.keys(currencyRates).length === 0) {
        resultCurrency.value = '';
        return;
    }
    
    const rate = currencyRates[to];
    if (rate) {
        resultCurrency.value = (input * rate).toFixed(2);
    }
}

// ==================== SMOOTH SCROLL & ANIMATIONS ====================
document.querySelectorAll('.converter-card').forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

console.log('%c✨ Unit Converter by Rupesh Kumar Mund', 'color: #667eea; font-size: 16px; font-weight: bold;');









