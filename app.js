let screen = document.getElementById('screen');
let Buttons = document.querySelectorAll('button');
let inputVal = '';
for (item of Buttons) {
    item.addEventListener('click', (e) => {
        buttontext = e.target.innerText;
        // console.log('Button text is ', buttontext);

        if (buttontext == 'X') {
            buttontext = "*";
            inputVal += buttontext;
            screen.value = inputVal;
        }
        else if (buttontext == 'C') {
            inputVal = '';
            screen.value = inputVal;
        }
        else if (buttontext == '=') {
            screen.value = eval(inputVal);
        }
        else {
            inputVal += buttontext;
            screen.value = inputVal;
        }
    })
}