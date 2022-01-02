const buttons = document.querySelectorAll('button')
const slider = document.getElementById('slider')
const sliderButton = document.getElementById('slider-button')
const app = document.getElementById('app')
const display = document.getElementById('display')
const setTheme = () => {
    if (!localStorage.getItem('theme')) {
        localStorage.setItem('theme', 'theme-1')
    }else if(localStorage.getItem('theme')==='theme-1' || localStorage.getItem('theme')==='theme-2'){
        app.classList.remove('theme-1')
        app.classList.add(localStorage.getItem('theme'))
        if (localStorage.getItem('theme') === 'theme-1') {
            document.body.style.backgroundColor = 'hsl(222, 26%, 31%)'
        }
        else if (localStorage.getItem('theme') === 'theme-2') {
            document.body.style.backgroundColor = 'hsl(0, 0%, 90%)'
        } else {
            document.body.style.backgroundColor = 'hsl(268, 75%, 9%)'
            if (!app.classList.contains('theme-1')) {
                app.classList.add('theme-1')
            }
        }
    }else{
        localStorage.setItem('theme', 'theme-1')
        document.body.style.backgroundColor = 'hsl(222, 26%, 31%)'
    }
}
slider.addEventListener('click', () => {
    if (app.classList.contains('theme-1')) {
        app.classList.add('theme-2')
        app.classList.remove('theme-1')
        document.body.style.backgroundColor = 'hsl(0, 0%, 90%)'
        localStorage.setItem('theme', 'theme-2')
    }
    else if (app.classList.contains('theme-2')) {
        app.classList.add('theme-3')
        app.classList.remove('theme-2')
        document.body.style.backgroundColor = 'hsl(268, 75%, 9%)'
        localStorage.setItem('theme', 'theme-3')
    }
    else if (app.classList.contains('theme-3')) {
        app.classList.add('theme-1')
        app.classList.remove('theme-3')
        document.body.style.backgroundColor = 'hsl(222, 26%, 31%)'
        localStorage.setItem('theme', 'theme-1')
    }
})
buttons.forEach(b => {
    b.addEventListener('click', () => {
        if (b.dataset.value === 'del') { display.value = display.value.slice(0, -1) }
        else if (b.dataset.value === '+' || b.dataset.value === '-' || b.dataset.value === '/' || b.dataset.value === 'x') {
            if (display.value.charAt(display.value.length - 1) !== '+' && display.value.charAt(display.value.length - 1) !== '-' && display.value.charAt(display.value.length - 1) !== 'x' && display.value.charAt(display.value.length - 1) !== '/') {
                display.value = String(display.value) + String(b.dataset.value)
            }
        }
        else if (b.dataset.value === 'reset') {
            display.value = ''
        }
        else if (b.dataset.value === 'equal') {
            display.value = display.value.replace('x', '*')
            display.value = eval(display.value)
        }
        else if (b.dataset.value === '.') {
            display.value = String(display.value) + String(b.dataset.value)
        }
        else {
            display.value = String(display.value) + String(b.dataset.value)
        }
    })

})