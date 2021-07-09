/**
 * Global variables
 */

const mainBody = document.querySelector('.main-body');
const radioDiv = document.querySelector('.radio-div');
const radioBtns = document.querySelectorAll('input[type="radio"]');
const numberDisplay = document.querySelector('#numberInput');
const resetDel = document.querySelectorAll('.reset-del');
const resetEqual = document.querySelector('.reset-equal');
const keys = document.querySelectorAll('.number-grid button');
const keypad = document.querySelector('.keypad');

// On page load numberDisplay is set to '0'
numberDisplay.textContent = '0';

/**
 * Change Theme
 **/ 

// On page load, first theme is selected
function selectTheme() {
    for (let i = 0; i < radioBtns.length; i++) {
        if (radioBtns[i].checked) {
            const id = radioBtns[i].getAttribute('id');
            radioBtns[i].parentNode.className = `radio-label-${id}`;
            // focus on input
        } else {
            radioBtns[i].parentNode.className = '';
        }
    }
}
selectTheme();

// listen for changes to theme selection
radioDiv.addEventListener('change', () => selectTheme());

// listen for changes to theme then implement change in theme
// written with assistance from https://stackoverflow.com/questions/8796107/how-to-make-changeable-themes-using-css-and-javascript and https://stackoverflow.com/questions/37801882/how-to-change-css-root-color-variables-in-javascript

radioDiv.addEventListener('change', e => {
    for (let i = 0; i < radioBtns.length; i ++) {
        if (e.target === radioBtns[i]){
            const id = radioBtns[i].getAttribute('id');
            if (id === '1'){
                changeTheme(theme1);
            } else if (id === '2') {
                changeTheme(theme2);
            } else if (id === '3'){
                changeTheme(theme3);
            }
        } 
    }
});

const theme1 = [
    'hsl(222, 26%, 31%)',
    'hsl(223, 31%, 20%)',
    'hsl(224, 36%, 15%)',
    'hsl(225, 21%, 49%)',
    'hsl(224, 28%, 35%)',
    'hsl(6, 63%, 50%)',
    'hsl(6, 70%, 34%)',
    'hsl(30, 25%, 89%)',
    'hsl(28, 16%, 65%)',
    'hsl(221, 14%, 31%)',
    '#fff',
    '#fff'
];

const theme2 = [
    'hsl(0, 0%, 90%)',
    'hsl(0, 5%, 81%)',
    'hsl(0, 0%, 93%)',
    'hsl(185, 42%, 37%)',
    'hsl(185, 58%, 25%)',
    'hsl(25, 98%, 40%)',
    'hsl(25, 99%, 27%)',
    'hsl(45, 7%, 89%)',
    'hsl(35, 11%, 61%)',
    'hsl(60, 10%, 19%)',
    'hsl(60, 10%, 19%)',
    '#fff'
];

const theme3 = [
    'hsl(268, 75%, 9%)',
    'hsl(268, 71%, 12%)',
    'hsl(268, 71%, 12%)',
    'hsl(281, 89%, 26%)',
    'hsl(285, 91%, 52%)',
    'hsl(176, 100%, 44%)',
    'hsl(177, 92%, 70%)',
    'hsl(268, 47%, 21%)',
    'hsl(290, 70%, 36%)',
    'hsl(52, 100%, 62%)',
    'hsl(52, 100%, 62%)',
    'hsl(198, 20%, 13%)'
];

function changeTheme(arr) {
    document.documentElement.style.setProperty('--main-bg', arr[0]);
    document.documentElement.style.setProperty('--toggle-keypad-bg', arr[1]);
    document.documentElement.style.setProperty('--screen-bg', arr[2]);
    document.documentElement.style.setProperty('--reset-key-bg', arr[3]);
    document.documentElement.style.setProperty('--reset-shadow', arr[4]);
    document.documentElement.style.setProperty('--toggle-equal-key', arr[5]);
    document.documentElement.style.setProperty('--toggle-equal-shadow', arr[6]);
    document.documentElement.style.setProperty('--key-bg', arr[7]);
    document.documentElement.style.setProperty('--key-shadow', arr[8]);
    document.documentElement.style.setProperty('--key-text', arr[9]);
    document.documentElement.style.setProperty('--header-text', arr[10]);
    document.documentElement.style.setProperty('--equal-key', arr[11]);
}

/**
 * calculator functionality
 * Written with assistance from: https://www.freecodecamp.org/news/how-to-build-an-html-calculator-app-from-scratch-using-javascript-4454b8714b98/
 */

keypad.addEventListener('click', e => {
    if (e.target.matches('button')){
        const key = e.target;
        const action = key.dataset.action;
        const keyVal = key.textContent; 
        const currentVal = numberDisplay.textContent;
        const previousKeyType = mainBody.dataset.previousKeyType;
        keys.forEach(key => key.classList.remove('pressed'));
        if (!action){
            if (currentVal === '0' || 
            previousKeyType === 'operator' ) {
                numberDisplay.textContent = keyVal;
          
            } else if (previousKeyType === 'calculate') {
                mainBody.dataset.firstValue = '';
                mainBody.dataset.modValue = '';
                mainBody.dataset.operator = '';
                numberDisplay.textContent = keyVal;
            } 
            else {
                numberDisplay.textContent = currentVal + keyVal;
            }
            mainBody.dataset.previousKeyType = 'number';
        } else if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            const firstVal = mainBody.dataset.firstValue;
            const operator = mainBody.dataset.operator;
            const secondVal = currentVal;

            if (firstVal && operator && previousKeyType !== 'operator' && previousKeyType !== 'calculate') {
                const calcVal = calculate(firstVal, operator, secondVal);
                numberDisplay.textContent = calcVal;
                mainBody.dataset.firstValue = calcVal;
            } else {
                mainBody.dataset.firstValue = currentVal;
            }
            key.classList.add('pressed');
            mainBody.dataset.previousKeyType = 'operator';
            mainBody.dataset.operator = action;
        } else if (action === 'decimal'){
            if (previousKeyType !== 'calculate') {
                if (previousKeyType === 'operator') {
                    numberDisplay.textContent = '0.';
                } else if (!currentVal.includes('.')) {
                    numberDisplay.textContent = currentVal + '.';
                } 
                mainBody.dataset.previousKeyType = 'decimal';
            } else if (previousKeyType === 'calculate') {
                mainBody.dataset.firstValue = '';
                mainBody.dataset.modValue = '';
                mainBody.dataset.operator = '';
                numberDisplay.textContent = '0.';
                mainBody.dataset.previousKeyType = 'decimal';
            } else {
                numberDisplay.textContent = '0.';
                mainBody.dataset.previousKeyType = 'decimal';
            }
 
        } else if (action === 'delete'){   
            if (previousKeyType !== 'calculate') {
                if (currentVal.length > 1) {
                    const newVal = currentVal.slice(0, -1);
                    numberDisplay.textContent = newVal;
                } else if (currentVal.length === 1) {
                    numberDisplay.textContent = '0';
                } else {
                    numberDisplay.textContent = '0';
                }
            } else if (previousKeyType === 'calculate') {
                mainBody.dataset.firstValue = '';
                mainBody.dataset.modValue = '';
                mainBody.dataset.operator = '';
                numberDisplay.textContent = '0';
            }
        } else if (action === 'reset'){
            mainBody.dataset.firstValue = '';
            mainBody.dataset.modValue = '';
            mainBody.dataset.operator = '';
            numberDisplay.textContent = '0';
            mainBody.dataset.previousKeyType = 'reset';
        } else if (action === 'calculate'){
            let firstVal = mainBody.dataset.firstValue;
            const operator = mainBody.dataset.operator;
            let secondVal = currentVal;
            if (firstVal) {
                if (previousKeyType === 'calculate') {
                    firstVal = currentVal;
                    secondVal = mainBody.dataset.modValue;
                }
                numberDisplay.textContent = calculate(firstVal, operator, secondVal);
            }
            mainBody.dataset.modValue = secondVal;
            mainBody.dataset.previousKeyType = 'calculate';
        }
    }
});

function calculate(num1, operator, num2) {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    if (operator === 'add'){
        return number1 + number2;
    } else if (operator === 'subtract'){
        return number1 - number2;
    } else if (operator === 'multiply'){
        return number1 * number2;
    } else if (operator === 'divide'){
        return number1 / number2;
    }
}
