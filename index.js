const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  if (require('electron-is-dev')) {
    win.loadURL('http://localhost:3000')
  } else {
    // win.loadFile(indexPath)
  }
}

app.whenReady().then(() => {
  createWindow()
})
