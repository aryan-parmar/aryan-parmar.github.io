var processes = [];
class AppWindow {
    CreateWindow(title, body, icon, appId, dimensions) {
        if (processes.includes(appId)) {
            alert("app with this process id exists")
        } else {
            const data = '<div class="titlebar title-num-' + appId + '" draggable="true" id="titlebar" data-pid=""><img src="' + icon + '"class="ico"><h4>' + title + '</h4><div class="button-group"><button class="btn minimise" id="minimise"><img src="./minimize.svg" class="maximize"></img></button><button class="btn maximise" id="maximise"><img src="./move.svg" class="maximize"></button><button class="btn-red" id="close">X</button></div></div><div class="app-body">' + body + '</div>'
            const container = document.createElement('div');
            container.classList.add('app');
            container.classList.add('app-num-' + appId);
            container.classList.add('minS');
            container.style.height = dimensions.h;
            container.style.width = dimensions.w;
            container.id = 'app'
            container.innerHTML = data
            document.body.appendChild(container)
            document.querySelector('.titlebar').attributes['data-pid'].value = appId;
            this.BasicFunctions(appId, dimensions)
            this.Open(icon, appId)
            processes.push(appId)
        }
    }
    BasicFunctions(appId, d) {
        const titlebar = document.querySelector('.title-num-' + appId)
        const closeBtn = document.querySelector('.title-num-' + appId + ' #close');
        const MinimiseBtn = document.querySelector('.title-num-' + appId + ' #minimise');
        const MaximiseBtn = document.querySelector('.title-num-' + appId + ' #maximise');

        closeBtn.addEventListener('click', () => this.close(appId));

        MaximiseBtn.addEventListener('click', () => {
            const currentapp = document.querySelector('.app-num-' + appId)
            if (currentapp.classList.contains('maxS')) {
                currentapp.classList.remove('maxS');
                currentapp.classList.add('minS');
                currentapp.style.height = d.h;
                currentapp.style.width = d.w;
            } else {
                currentapp.classList.remove('minS')
                currentapp.classList.add('maxS')
                currentapp.style.top = 0;
                currentapp.style.left = 0;
                currentapp.style.height = '94vh';
                currentapp.style.width = '100%';
            };
        })
        MinimiseBtn.addEventListener('click', () => this.minimise(appId));


        titlebar.addEventListener('dragstart', (e) => {
            e.dataTransfer.setDragImage(new Image(), 0, 0);
            e.dataTransfer.effectAllowed = "copyMove";
        })
        titlebar.addEventListener('dragenter', (e) => {
            e.dataTransfer.effectAllowed = "copy";
        })
        titlebar.addEventListener('dragend', (e) => {
            const currentapp = document.querySelector('.app-num-' + appId)
            if (e.pageY <= 11) {
                currentapp.classList.remove('minS')
                currentapp.classList.add('maxS')
                currentapp.style.height = '94vh';
                currentapp.style.width = '100%';
            }
            else if (e.pageY >= 11 && currentapp.classList.contains('maxS')) {
                currentapp.classList.remove('maxS')
                currentapp.classList.add('minS')
                currentapp.style.top = (e.pageY) + 'px'
                currentapp.style.left = (e.screenX - 70) + 'px'
                currentapp.style.height = d.h;
                currentapp.style.width = d.w;
            }
            else {
                currentapp.style.top = (e.pageY) + 'px'
                currentapp.style.left = (e.screenX - 70) + 'px'
            }
        })
        titlebar.addEventListener('drag', (e) => {
            const currentapp = document.querySelector('.app-num-' + appId)
            if (e.pageY <= 11) {
                currentapp.classList.remove('minS')
                currentapp.classList.add('maxS')
                currentapp.style.height = '94vh';
                currentapp.style.width = '100%';
            }
            if (e.pageY >= 11 && currentapp.classList.contains('maxS')) {
                currentapp.classList.remove('maxS')
                currentapp.classList.add('minS')
                currentapp.style.top = (e.pageY) + 'px'
                currentapp.style.left = (e.screenX - 70) + 'px'
                currentapp.style.height = d.h;
                currentapp.style.width = d.h;
            }
            currentapp.style.top = (e.pageY) + 'px'
            currentapp.style.left = (e.screenX) + 'px'
        })
        titlebar.addEventListener('dblclick', () => {
            const currentapp = document.querySelector('.app-num-' + appId)
            if (currentapp.classList.contains('maxS')) {
                currentapp.classList.remove('maxS');
                currentapp.classList.add('minS');
                currentapp.style.top = '20%';
                currentapp.style.left = '20%';
                currentapp.style.height = d.h;
                currentapp.style.width = d.w;
            } else {
                currentapp.classList.remove('minS')
                currentapp.classList.add('maxS')
                currentapp.style.top = 0;
                currentapp.style.left = 0;
                currentapp.style.height = '94vh';
                currentapp.style.width = '100%';
            }
        })
        titlebar.addEventListener('focus', (e) => console.log('e'))
    }
    close(appId) {
        const a = document.querySelector(".app-num-" + appId);
        a.remove();
        document.getElementById('app-id' + appId).remove()
    }
    Open(iconSrc, appId) {
        var appicon = document.createElement('div')
        appicon.classList.add('taskbar-item')
        appicon.classList.add('appicon')
        appicon.id = 'app-id' + appId
        var icon = document.createElement('img')
        icon.src = iconSrc;
        icon.classList.add('app-icon-taskbar')
        icon.classList.add('app-open')
        icon.classList.add('grid-itm')
        appicon.append(icon)
        taskbar.appendChild(appicon)
        document.getElementById("app-id" + appId).addEventListener('click', () => {
            const a = document.querySelector(".app-num-" + appId);
            if (a.style.zIndex == 7) {
                a.style.zIndex = -10
            } else {
                a.style.zIndex = 7
            }
        })
    }
    minimise(appId) {
        const currentapp = document.querySelector('.app-num-' + appId)
        currentapp.style.zIndex = -10;
    }
    maximize(appId) {
        const currentapp = document.querySelector('.app-num-' + appId)
        if (currentapp.classList.contains('maxS')) {
            currentapp.classList.remove('maxS');
            currentapp.classList.add('minS');
        } else {
            currentapp.classList.remove('minS')
            currentapp.classList.add('maxS')
        }
    }
}