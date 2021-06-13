const buttons = document.querySelectorAll('button')
const slider = document.getElementById('slider')
const sliderButton = document.getElementById('slider-button')
const app = document.getElementById('app')
const display = document.getElementById('display')

slider.addEventListener('click', () => {
    if (app.classList.contains('theme-1')) {
        app.classList.add('theme-2')
        app.classList.remove('theme-1')
        document.body.style.backgroundColor = 'hsl(0, 0%, 90%)'
    }
    else if (app.classList.contains('theme-2')) {
        app.classList.add('theme-3')
        app.classList.remove('theme-2')
        document.body.style.backgroundColor = 'hsl(268, 75%, 9%)'
    }
    else if (app.classList.contains('theme-3')) {
        app.classList.add('theme-1')
        app.classList.remove('theme-3')
        document.body.style.backgroundColor = 'hsl(222, 26%, 31%)'
    }
})
let num1;
let num2;
let operator;
let containsOp;
let OpIndex;
buttons.forEach(b => {
    b.addEventListener('click', () => {
        if (b.dataset.value === 'del') { display.value = display.value.slice(0, -1) }
        else if (b.dataset.value === '+' || b.dataset.value === '-' || b.dataset.value === '/' || b.dataset.value === 'x') {
            for (var i=0; i < display.value.length; i++) {
                if (display.value.charAt(i) === '+' || display.value.charAt(i) === '-' || display.value.charAt(i) === 'x' || display.value.charAt(i) === '/') {
                    OpIndex=i
                    containsOp = true;
                    operator = display.value.charAt(i)
                    break
                }
            }
            if (containsOp) {
                if (operator === '+') {
                    num2 = display.value.slice(OpIndex+1)
                    console.log(num1, num2)
                    display.value = String(parseFloat(num1) + parseFloat(num2)) + b.dataset.value;
                    operator = ''
                    num1 = String(parseFloat(num1) + parseFloat(num2)) 
                }
                if (operator === '-') {
                    num2 = display.value.slice(OpIndex+1)
                    console.log(num1, num2)
                    display.value = String(parseFloat(num1) - parseFloat(num2)) + b.dataset.value;
                    operator = ''
                    num1 = String(parseFloat(num1) - parseFloat(num2)) 
                }
                if (operator === '/') {
                    num2 = display.value.slice(OpIndex+1)
                    console.log(num1, num2)
                    display.value = String(parseFloat(num1) / parseFloat(num2)) + b.dataset.value;
                    operator = ''
                    num1 = String(parseFloat(num1) / parseFloat(num2)) 
                }
                if (operator === 'x') {
                    num2 = display.value.slice(OpIndex+1)
                    console.log(num1, num2)
                    display.value = String(parseFloat(num1) * parseFloat(num2)) + b.dataset.value;
                    operator = ''
                    num1 = String(parseFloat(num1) * parseFloat(num2)) 
                }
            }
            else {
                num1 = display.value
                display.value = String(display.value) + String(b.dataset.value)
            }
        }
        else if (b.dataset.value === 'reset') { 
            display.value = ''
            operator =''
            num1 = ''
            num2 = ''
        }
        else if (b.dataset.value === 'equal') { 
            for (var i=0; i < display.value.length; i++) {
                if (display.value.charAt(i) === '+' || display.value.charAt(i) === '-' || display.value.charAt(i) === 'x' || display.value.charAt(i) === '/') {
                    OpIndex=i
                    containsOp = true;
                    operator = display.value.charAt(i)
                    break
                }
            }
            if (containsOp) {
                if (operator === '+') {
                    num2 = display.value.slice(OpIndex+1)
                    console.log(num1, num2)
                    display.value = String(parseFloat(num1) + parseFloat(num2));
                    operator = ''
                    num1 = String(parseFloat(num1) + parseFloat(num2)) 
                }
                if (operator === '-') {
                    num2 = display.value.slice(OpIndex+1)
                    console.log(num1, num2)
                    display.value = String(parseFloat(num1) - parseFloat(num2));
                    operator = ''
                    num1 = String(parseFloat(num1) - parseFloat(num2)) 
                }
                if (operator === '/') {
                    num2 = display.value.slice(OpIndex+1)
                    console.log(num1, num2)
                    display.value = String(parseFloat(num1) / parseFloat(num2));
                    operator = ''
                    num1 = String(parseFloat(num1) / parseFloat(num2)) 
                }
                if (operator === 'x') {
                    num2 = display.value.slice(OpIndex+1)
                    console.log(num1, num2)
                    display.value = String(parseFloat(num1) * parseFloat(num2));
                    operator = ''
                    num1 = String(parseFloat(num1) * parseFloat(num2)) 
                }
            }
        }
        else if (b.dataset.value === 'point') { }
        else {
            display.value = String(display.value) + String(b.dataset.value)
        }
    })

})