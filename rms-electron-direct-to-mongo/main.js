const {app, BrowserWindow,ipcMain} = require('electron');
var mongojs = require('mongojs');
var db = mongojs('mongodb://127.0.0.1:27017/rms');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({width: 800, height: 600})

  // and load the index.html of the app.
  win.loadURL(`file://${__dirname}/index.html`)

  // Open the DevTools.
  win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.


ipcMain.on('display',(event, arg1) => {
    console.log(arg1);
      db.str_item.find(function(err,record){
    if(err){
      console.log(err);
    } else {
      console.log("display");
      event.returnValue = record
      // res.json(record);
    }
  });
})

ipcMain.on('dict',(event, arg1) => {
    console.log(arg1);
      db.dc_item.find(function(err,record){
    if(err){
      console.log(err);
    } else {
      console.log("dict");
      event.returnValue = record
      // res.json(record);
    }
  });
})

ipcMain.on('deletedict',(event, arg1) => {
    console.log("delete: "+arg1);
    db.dc_item.remove({'item': arg1},function(err,record){
    if(err){
      res.send(err);
    } else {
      console.log("delete dict OK");
    }
  });
    db.str_item.remove({'item': arg1},function(err,record){
    if(err){
      res.send(err);
    } else {
      console.log("delete str OK");
    }
  });
})

ipcMain.on('adddict',(event, arg1,arg2,arg3) => {
    db.dc_item.insert({'item': arg1,'unit': arg2,'mfrs': arg3},function(err,record){
    if(err){
        res.send(err);
      } else {
        console.log("add dict OK");
      }
    });
    db.str_item.insert({'item': arg1,'num': "0"},function(err,record){
    if(err){
        res.send(err);
      } else {
        console.log("add str OK");
      }
    });
});

ipcMain.on('import',(event, arg1,arg2,arg3) => {
    db.str_item.update({ 'item': arg1},{$set:{'num': arg2,'location': arg3}},function(err,record){
    if(err){
      res.send(err);
    } else {
      console.log("Import OK");
    }
  });
});

ipcMain.on('export',(event, arg1,arg2) => {
    db.str_item.update({ 'item': arg1},{$set:{'num': arg2}},function(err,record){
    if(err){
      res.send(err);
    } else {
      console.log("export OK");
    }
  });
});