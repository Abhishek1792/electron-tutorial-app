// src/main.js
const { app, BrowserWindow } = require('electron');
const path = require('path');
const env = process.env.NODE_ENV || 'development';

function createWindow() {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
    });

    mainWindow.loadFile('../pages/homepage.html');
}
if (env === 'development') {
    try {
        require('electron-reloader')(module, {
            debug: true,
            watchRenderer: true
        });
    } catch (_) { console.log('Error'); }
}
// After initialization, you can create browser windows.
app.whenReady().then(createWindow);