// calculator.js

let result = document.getElementById('result');

function clearResult() {
    result.textContent = '0';
}

function deleteLast() {
    let currentResult = result.textContent;
    result.textContent = currentResult.slice(0, -1);
}

function append(value) {
    let currentResult = result.textContent;

    if (currentResult === '0' && value !== '.') {
        result.textContent = value;
    } else {
        result.textContent += value;
    }
}

function calculateResult() {
    let currentResult = result.textContent;
    result.textContent = eval(currentResult);
}
