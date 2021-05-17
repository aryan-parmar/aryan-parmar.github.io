class AppWindow {
    CreateWindow(title, body) {
        const data = '<div class="titlebar" draggable="true" id="titlebar"><h4>' + title + '</h4><div class="button-group"><button class="btn minimise" id="minimise"><img src="./minimize.svg" class="maximize"></img></button><button class="btn maximise" id="maximise"><img src="./move.svg" class="maximize"></button><button class="btn-red" id="close">X</button></div></div><div class="app-body">' + body + '</div>'
        const container = document.createElement('div');
        container.classList.add('app');
        container.classList.add('minS');
        container.id = 'app'
        container.innerHTML = data
        document.body.appendChild(container)
        this.BasicFunctions()
    }

    BasicFunctions() {
        const titlebar = document.getElementById('titlebar');
        const app = document.getElementById('app');
        const closeBtn = document.getElementById('close');
        const MinimiseBtn = document.getElementById('minimise');
        const MaximiseBtn = document.getElementById('maximise');
        const taskbar = document.getElementById('taskbar')
        const helloWorld = document.getElementById('app-1');

        helloWorld.onclick = this.open;
        closeBtn.onclick = this.close;
        MaximiseBtn.onclick = () => {
            if (app.classList.contains('maxS')) {
                app.classList.remove('maxS');
                app.classList.add('minS');
            } else {
                app.classList.remove('minS')
                app.classList.add('maxS')
                app.style.top = 0;
                app.style.left = 0;
            };
        }
        MinimiseBtn.onclick = this.minimise;
        titlebar.addEventListener('dragstart', (e) => {
            e.dataTransfer.setDragImage(new Image(), 0, 0);
            e.dataTransfer.effectAllowed = "copyMove";
        })
        titlebar.addEventListener('dragenter', (e) => {
            e.dataTransfer.effectAllowed = "copy";
        })
        titlebar.addEventListener('dragend', (e) => {
            console.log(e.screenY)
            if (e.pageY <= 11) {
                app.classList.remove('minS')
                app.classList.add('maxS')
            }
            else if (e.pageY >= 11 && app.classList.contains('maxS')) {
                app.classList.remove('maxS')
                app.classList.add('minS')
                app.style.top = (e.pageY) + 'px'
                app.style.left = (e.screenX - 70) + 'px'
            }
            else {
                app.style.top = (e.pageY) + 'px'
                app.style.left = (e.screenX - 70) + 'px'
            }
        })
        titlebar.addEventListener('drag', (e) => {
            if (e.pageY <= 11) {
                app.classList.remove('minS')
                app.classList.add('maxS')
            }
            if (e.pageY >= 11 && app.classList.contains('maxS')) {
                app.classList.remove('maxS')
                app.classList.add('minS')
                app.style.top = (e.pageY) + 'px'
                app.style.left = (e.screenX - 70) + 'px'
            }
            app.style.top = (e.pageY) + 'px'
            app.style.left = (e.screenX) + 'px'
        })
        titlebar.addEventListener('dblclick', () => {
            if (app.classList.contains('maxS')) {
                app.classList.remove('maxS');
                app.classList.add('minS');
                app.style.top = '20%';
                app.style.left = '20%';
            } else {
                app.classList.remove('minS')
                app.classList.add('maxS')
                app.style.top = 0;
                app.style.left = 0;
            }
        })
    }
    close() {
        app.style.display = 'none';
        document.getElementById('hello-world').remove()
    }
    open() {
        if (app.style.display != 'flex') {
            app.style.display = 'flex';
            var appicon = document.createElement('div')
            appicon.classList.add('taskbar-item')
            appicon.classList.add('appicon')
            appicon.id = 'hello-world'
            var icon = document.createElement('img')
            icon.src = './bigSur.jpg'
            icon.classList.add('logo')
            icon.classList.add('grid-itm')
            appicon.append(icon)
            taskbar.appendChild(appicon)
            document.getElementById('hello-world').addEventListener('click', () => {
                app.style.zIndex = 6
            })
        } else {
            alert("already open")
        }
    }
    minimise() {
        app.style.zIndex = -10;
    }
    maximize() {
        if (app.classList.contains('maxS')) {
            app.classList.remove('maxS');
            app.classList.add('minS');
        } else {
            app.classList.remove('minS')
            app.classList.add('maxS')
        }
    }

}