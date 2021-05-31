/**
 *  Toggle radio buttons 
 **/ 

// On page load, first theme is selected
function selectTheme() {
    const radioBtns = document.querySelectorAll('input[type="radio"]');
    for (let i = 0; i < radioBtns.length; i++) {
        if (radioBtns[i].checked) {
            radioBtns[i].parentNode.className = 'radio-label';
        } else {
            radioBtns[i].parentNode.className = '';
        }
    }
}
selectTheme();

// listen for changes to theme selection
document.querySelector('.radio-div').addEventListener('change', () => selectTheme());
