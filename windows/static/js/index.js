const helloWorld = document.getElementById('app-1');
const github = document.getElementById('app-2');
const iframe = document.getElementById('app-3');
var pid= 0114;

document.querySelector('.desktop-item').addEventListener('dragend', (e) => {
})
function setTimeAndDate() {
    var date = new Date();
    document.querySelector('.date').innerHTML = date.getUTCDate() + '-' + date.getUTCMonth() + '-' + date.getUTCFullYear();
    document.querySelector('.time').innerHTML = date.getHours() + ':' + date.getMinutes();
}
helloWorld.onclick = ()=>{
    const App = new AppWindow();
    App.CreateWindow("About me", `<div class="sc-crzoAE DykGo head"><h1 style="font-size: 2.8rem; margin-bottom: 10px; font-weight: bold; color: white;">Hi, I'am Aryan</h1><p style="color: #efefef; margin-bottom: 10px">Full stack web development using varies technology developing high quality websites.</p><a href="https://aary114.github.io/" style="text-decoration: none; color: lightBlue; padding-top: 20px;">Visit my portfolio</a></div>`,"./static/images/contact-us.svg", pid, {h:'500px', w:'500px'});
    pid+=1
}
github.onclick = ()=>{
    const App = new AppWindow();
    App.CreateWindow("Github", "<h1><p style='margin-bottom: 10px; font-weight: bold; color: white;'>hey there visit my github for more info<br> and also for more intereting projects.</p></h1><a href='https://github.com/aary114' style='text-decoration: none; color: lightBlue; padding-top: 20px;'>Link to github.</a>","./static/images/github.svg", pid, {h:'500px', w:'500px'});
    pid+=1
}
iframe.onclick = ()=>{
    const App = new AppWindow();
    App.CreateWindow("calc", `<iframe src='https://aary114.github.io/calculator' height='100%' width='100%'></iframe>` ,"./static/images/favicon-32x32.png", pid, {h:'600px', w:'300px'});
    pid+=1
}
document.querySelector('.win-logo').addEventListener('click', ()=>{
    let apd = document.querySelector('.app-drawer')
    if(apd.classList.contains('closed')){
        apd.classList.remove('closed')
        apd.classList.add('opened')
    }else{
        apd.classList.remove('opened')
        apd.classList.add('closed')
    }
})
setTimeAndDate();
setInterval(setTimeAndDate, 5000);