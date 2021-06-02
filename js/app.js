/**
 * Global variables
 */
 const mainBody = document.querySelector('.main-body');
const radioDiv = document.querySelector('.radio-div');
const radioBtns = document.querySelectorAll('input[type="radio"]');
const numberInput = document.querySelector('#numberInput');
const resetDel = document.querySelectorAll('.reset-del');
const resetEqual = document.querySelector('.reset-equal');
const keys = document.querySelectorAll('.number-grid div');

/**
 * Toggle radio buttons 
 **/ 

// On page load, first theme is selected
function selectTheme() {
    for (let i = 0; i < radioBtns.length; i++) {
        if (radioBtns[i].checked) {
            const id = radioBtns[i].getAttribute('id');
            radioBtns[i].parentNode.className = `radio-label-${id}`;
        } else {
            radioBtns[i].parentNode.className = '';
        }
    }
}
selectTheme();

// listen for changes to theme selection
radioDiv.addEventListener('change', () => selectTheme());

// listen for changes to theme then implement change in theme
radioDiv.addEventListener('change', () => {
    for (let i = 0; i < radioBtns.length; i ++) {
        const id = radioBtns[i].getAttribute('id');
        if (id === '1'){
            changeTheme(...theme1);
            // mainBody.style.backgroundColor = 'hsl(222, 26%, 31%)'; // $main-bg
            // mainBody.style.color = '#fff'; // white
            // radioDiv.style.backgroundColor = 'hsl(223, 31%, 20%)'; // $toggle-keypad-bg
            // numberInput.style.backgroundColor = 'hsl(224, 36%, 15%)'; // $screen-bg
            // keys.forEach(key => {
            //     key.style.backgroundColor = 'hsl(30, 25%, 89%)'; // $key-bg
            //     key.style.textShadow = 'hsl(28, 16%, 65%)'; // $key-shadow
            //     key.style.color = 'hsl(221, 14%, 31%)'; // $key-text
            // });
            // resetDel.forEach(btn => { 
            //     btn.style.backgroundColor = 'hsl(225, 21%, 49%)'; // $reset-key-bg
            //     btn.style.textShadow = `0 3px 0 ${'hsl(224, 28%, 35%)'}`; // $reset-shadow
            // });
            // resetEqual.lastElementChild.style.backgroundColor = 'hsl(6, 63%, 50%)'; // $toggle-equal-key
            // resetEqual.lastElementChild.style.textShadow = `0 3px 0 ${'hsl(6, 70%, 34%)'}`; // $toggle-equal-shadow
        } else if (id === '2') {
            changeTheme(...theme2);
        }
    }
});

const theme1 = [
    'hsl(222, 26%, 31%)',
    '#fff',
    'hsl(223, 31%, 20%)',
    'hsl(224, 36%, 15%)',
    'hsl(30, 25%, 89%)',
    'hsl(28, 16%, 65%)',
    'hsl(221, 14%, 31%)',
    'hsl(225, 21%, 49%)',
    'hsl(224, 28%, 35%)',
    'hsl(6, 63%, 50%)',
    'hsl(6, 70%, 34%)'
];

const theme2 = [
    'hsl(0, 0%, 90%)',
    '#fff',
    'hsl(0, 5%, 81%)',
    'hsl(0, 0%, 93%)',
    'hsl(45, 7%, 89%)',
    'hsl(35, 11%, 61%)',
    'hsl(60, 10%, 19%)',
    'hsl(185, 42%, 37%)',
    'hsl(185, 58%, 25%)',
    'hsl(25, 98%, 40%)',
    'hsl(25, 99%, 27%)'

];

function changeTheme(mainBg, white, toggleKeypadBg, screenBg, keyBg, keyShadow, keyText, resetKeyBg, resetShadow, toggleEqualKey, toggleEqualShadow) {
    mainBody.style.backgroundColor = mainBg; // $main-bg
    mainBody.style.color = white; // white
    radioDiv.style.backgroundColor = toggleKeypadBg; // $toggle-keypad-bg
    numberInput.style.backgroundColor = screenBg; // $screen-bg
    keys.forEach(key => {
        key.style.backgroundColor = keyBg; // $key-bg
        key.style.textShadow = keyShadow; // $key-shadow
        key.style.color = keyText; // $key-text
    });
    resetDel.forEach(btn => { 
        btn.style.backgroundColor = resetKeyBg; // $reset-key-bg
        btn.style.textShadow = `0 3px 0 ${resetShadow}`; // $reset-shadow
    });
    resetEqual.lastElementChild.style.backgroundColor = toggleEqualKey; // $toggle-equal-key
    resetEqual.lastElementChild.style.textShadow = `0 3px 0 ${toggleEqualShadow}`; // $toggle-equal-shadow
}