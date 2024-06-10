let input = document.getElementById('inputfield');
let buttons = document.querySelectorAll('button');

let inputVal = '';
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            inputVal = eval(inputVal);
            input.value = inputVal;
        }
        else if (e.target.innerHTML == 'AC') {
            inputVal = "";
            input.value = inputVal;
        }
        else if (e.target.innerHTML == 'Del') {
            inputVal = inputVal.slice(0, -1);
            input.value = inputVal;

        }

        else {
            inputVal += e.target.innerHTML;
            input.value = inputVal;
        }


    })
})


