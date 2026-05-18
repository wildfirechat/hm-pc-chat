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
        frame:false
    });
    mainWindow.removeMenu();
    mainWindow.loadURL('https://wildfirechat.cn');

    // mainWindow.webContents.openDevTools()
}

// 模拟器上不支持
app.disableHardwareAcceleration()

app.whenReady().then(createWindow);
