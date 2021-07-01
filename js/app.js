/**
 * Global variables
 */
const mainBody = document.querySelector('.main-body');
const radioDiv = document.querySelector('.radio-div');
const radioBtns = document.querySelectorAll('input[type="radio"]');
const numberInput = document.querySelector('#numberInput');
const resetDel = document.querySelectorAll('.reset-del');
const resetEqual = document.querySelector('.reset-equal');
const keys = document.querySelectorAll('.number-grid button');
const keypad = document.querySelector('.keypad');

/**
 * Toggle radio buttons 
 **/ 

// On page load, first theme is selected
function selectTheme() {
    for (let i = 0; i < radioBtns.length; i++) {
        if (radioBtns[i].checked) {
            const id = radioBtns[i].getAttribute('id');
            radioBtns[i].parentNode.className = `radio-label-${id}`;
            // focus on input
            numberInput.textContent = '0';
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
 */

keypad.addEventListener('click', e => {
    if (e.target.matches('button')){
        const key = e.target;
        const action = key.dataset.action;
        const keyVal = key.textContent; // keyContent
        const currentVal = numberInput.textContent; // displayedNum
        const previousKeyType = mainBody.dataset.previousKeyType;
        keys.forEach(key => key.classList.remove('pressed'));
        if (!action){
            if (currentVal === '0' || previousKeyType === 'operator'){
                numberInput.textContent = keyVal;
            } else {
                numberInput.textContent = currentVal + keyVal;
            }
        } else if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ){
            key.classList.add('pressed');
            mainBody.dataset.previousKeyType = 'operator';
            mainBody.dataset.firstValue = currentVal;
            mainBody.dataset.operator = action;
        } else if (action === 'decimal'){
            numberInput.textContent = currentVal + '.';
        } else if (action === 'delete'){
            console.log('delete');
        } else if (action === 'reset'){
            console.log('reset');
        } else if (action === 'calculate'){
            const firstVal = mainBody.dataset.firstValue;
            const operator = mainBody.dataset.operator;
            const secondVal = currentVal;

            numberInput.textContent = calculate(firstVal, operator, secondVal);
        }
    }
});

function calculate(num1, operator, num2) {
    let result = '';
    if (operator === 'add'){
        result = parseFloat(num1) + parseFloat(num2);
    } else if (operator === 'subtract'){
        result = parseFloat(num1) - parseFloat(num2);
    } else if (operator === 'multiply'){
        result = parseFloat(num1) * parseFloat(num2);
    } else if (operator === 'divide'){
        result = parseFloat(num1) / parseFloat(num2);
    }
    return result;
}
