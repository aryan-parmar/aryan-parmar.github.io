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
    App.CreateWindow("Aryan", "<h1>hey!!!!</h1>","contact-us.svg", pid, {h:'500px', w:'500px'});
    pid+=1
}
github.onclick = ()=>{
    const App = new AppWindow();
    App.CreateWindow("Github", "<h1><p>hey there visit my github for more info<br> and also for more intereting projects.</p></h1><a href='https://github.com/aary114'>Link to github.</a>","github.svg", pid, {h:'500px', w:'500px'});
    pid+=1
}
iframe.onclick = ()=>{
    const App = new AppWindow();
    App.CreateWindow("My website", "Coming soon!!","", pid, {h:'500px', w:'500px'});
    pid+=1
}

setTimeAndDate();
setInterval(setTimeAndDate, 5000);