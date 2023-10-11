document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("temperature-converter");
    const inputValue = document.getElementById("inputValue");
    const fromUnit = document.getElementById("fromUnit");
    const toUnit = document.getElementById("toUnit");
    const formula = document.getElementById("formula");
    const resultDiv = document.getElementById("result");
    const conversionResult = document.getElementById("conversionResult");
    const resetButton = document.getElementById("reset-button");
    const reverseButton = document.getElementById("reverse-button");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const from = fromUnit.value;
        const to = toUnit.value;
        const value = parseFloat(inputValue.value);

        let result;
        let explanation;

        if (from === "celsius" && to === "fahrenheit") {
            result = (value * 9/5) + 32;
            explanation = `Konversi ${value} Celcius ke Fahrenheit menggunakan rumus : (${value} * 9/5) + 32 = ${result.toFixed(2)} Fahrenheit`;
        } else if (from === "fahrenheit" && to === "celsius") {
            result = (value - 32) * 5/9;
            explanation = `Konversi ${value} Fahrenheit ke Celcius menggunakan rumus: (${value} - 32) * 5/9 = ${result.toFixed(2)} Celsius`;
        } else if (from === "celsius" && to === "kelvin") {
            result = value + 273.15;
            explanation = `Konversi ${value} Celsius ke Kelvin dengan menambahkan 273.15, menghasilkan ${result.toFixed(2)} Kelvin`;
        } else if (from === "kelvin" && to === "celsius") {
            result = value - 273.15;
            explanation = `Konversi ${value} Kelvin ke Celsius dengan dikurangi 273.15, menghasilkan ${result.toFixed(2)} Celsius`;
        } else if (from === "celsius" && to === "reamur") {
            result = value * 4/5;
            explanation = `Konversi ${value} Celsius ke Reamur dengan cara mengkalikannya dengan 4/5, menghasilkan ${result.toFixed(2)} Reamur`;
        } else if (from === "reamur" && to === "celsius") {
            result = value * 5/4;
            explanation = `Konversi ${value} Reamur ke Celsius dengan cara mengkalikannya dengan 5/4, menghasilkan ${result.toFixed(2)} Celsius`;
        } else {
            explanation = "Konversi ini tidak didukung.";
        }

        formula.textContent = explanation;
        conversionResult.textContent = `Hasil Konversi: ${result.toFixed(2)} ${toUnit.options[toUnit.selectedIndex].text}`;

        resultDiv.style.display = "block";
    });

    resetButton.addEventListener("click", function () {
        form.reset();
        resultDiv.style.display = "none";
    });

    reverseButton.addEventListener("click", function () {
        const temp = fromUnit.value;
        fromUnit.value = toUnit.value;
        toUnit.value = temp;
    });
});
