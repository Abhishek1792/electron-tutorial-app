// src/main.js
const { app, BrowserWindow } = require('electron');
const path = require('path')
const env = process.env.NODE_ENV || 'development';

function createWindow() {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 1200,
        height: 800

    });

    mainWindow.loadFile('../pages/homepage.html');
    mainWindow.webContents.openDevTools()

}
if (env === 'development') {
    require('electron-reloader')(module, {
        // electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
        // hardResetMethod: 'exit',
        debug: true,
        watchRenderer: true
    });
}
// After initialization, you can create browser windows.
app.whenReady().then(() => {
    createWindow()

    app.on('activate', function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})