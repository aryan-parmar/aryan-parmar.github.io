let star = document.getElementById('star');
let planet1 = document.getElementById('planet-1');
let planet2 = document.getElementById('planet-2');
let saturn = document.getElementById('saturn');
let text = document.getElementById('name')
let lb = document.getElementById('land-back')
let btn = document.querySelector('.btn')

document.addEventListener('scroll',()=>{
    let value = scrollY;
    saturn.style.top = value*0.5+30 + 'px';
    saturn.style.transform = 'rotate('+value*-0.1 + 'deg)';
    star.style.left = value*0.3 + 'px';
    planet1.style.top = value*0.5+40 + 'px';
    planet1.style.left = value*1.2+40 + 'px';
    text.style.marginLeft = value*1.5 + 'px';
    text.style.fontSize = (value == 0 ? value*0 + 'px': '10rem');
    lb.style.bottom = value*0.1+10 + 'px';
    planet2.style.bottom = value*0.2+270 + 'px';
})