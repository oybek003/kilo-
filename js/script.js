const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const resultText = document.getElementById('resultText');

const addBtn = document.getElementById('add');
const minusBtn = document.getElementById('minus');
const umnoshitBtn = document.getElementById('umnoshit');
const deletBtn = document.getElementById('delet');

function getNumbers() {
    const aValue = input1.value.trim();
    const bValue = input2.value.trim();

    if (aValue === '' || bValue === '') {
        return null; 
    }

    const a = Number(aValue);
    const b = Number(bValue);

    return [a, b];
}

function showError() {
    resultText.textContent = 'Введите корректные числа';
}

addBtn.addEventListener('click', () => {
    const numbers = getNumbers();
    if (numbers) {
        const [a, b] = numbers;
        resultText.textContent = a + b;  
    } else {
        showError();
    }
});

minusBtn.addEventListener('click', () => {
    const numbers = getNumbers();
    if (numbers) {
        const [a, b] = numbers;
        resultText.textContent = a - b;  
    } else{
        showError();
    }
});

umnoshitBtn.addEventListener('click', () => {
    const numbers = getNumbers();
    if (numbers) {
        const [a, b] = numbers;
        resultText.textContent = a * b;  
    } else {
        showError();
    }
});

deletBtn.addEventListener('click', () => {
    const numbers = getNumbers();
    if (numbers) {
        const [a, b] = numbers;
        if (b === 0) {
            resultText.textContent = 'На 0 делить нельзя';  
        } else {
            resultText.textContent = a / b;
        }
    } else {
        showError();
    }
});
