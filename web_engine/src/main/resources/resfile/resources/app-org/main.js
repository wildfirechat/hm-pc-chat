const { app, BrowserWindow, Tray, nativeImage, Menu } = require('electron');
const path = require('path');

let mainWindow, tray;

function createWindow() {
    tray = new Tray(nativeImage.createFromPath(path.join(__dirname, 'electron_white.png')));
    mainWindow = new BrowserWindow({
        width: 1080,
        height: 720,
        backgroundColor: 'white', // 半透明蓝色
        //titleBarStyle: 'hiddenInset',
        titleBarStyle: 'default',
        frame:false,
        webPreferences: {
            scrollBounce: false,
            nodeIntegration: true,
            contextIsolation: false,
            nativeWindowOpen: true,
            webSecurity: false,
            webviewTag: true,
            zoomFactor: 1.0

            // 如果想打包之后的版本，不能打开调试控制台，请取消下面的注释
            // devTools: !app.isPackaged,
        },
    });
    mainWindow.removeMenu();
    mainWindow.loadURL('https://wildfirechat.cn');

    mainWindow.webContents.openDevTools()
}

// 模拟器上不支持
app.disableHardwareAcceleration()

app.whenReady().then(createWindow);
