import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
import { Rms } from "./rms"
// const { ipcRenderer } = require('electron');
// import { ipcRenderer } from ('electron');
declare var electron: any;

@Injectable()
export class RmsService {
    constructor(private http:Http){}
    static serverUrl = 'http://127.0.0.1:3000/'
    getRms(){
        var result
        console.log("storage")
        let mainValue = electron.ipcRenderer.sendSync('display',"display");
        console.log(mainValue);
        return mainValue
    }
};


@Injectable()
export class RmsImportr {
    constructor(private http:Http){}
    getRms(){
        let mainValue = electron.ipcRenderer.sendSync('display',"display");
        console.log(mainValue);
        return mainValue
    }

    rmsImport(newNum){
        console.log('importr/'+newNum.item+'/'+newNum.num+'/'+newNum.location)
        electron.ipcRenderer.send('import',newNum.item,newNum.num,newNum.location)
        // return this.http.get(RmsService.serverUrl + 'importr/'+newNum.item+'/'+newNum.num+'/'+newNum.location)
    }
}


@Injectable()
export class RmsDict {
    constructor(private http:Http){}
    getDict(){
        console.log('dict')
        let mainValue = electron.ipcRenderer.sendSync('dict',"dict");
        console.log(mainValue);
        return mainValue
    }

    delDict(newitem){
        console.log('dict/delete/'+newitem)
        electron.ipcRenderer.send('deletedict',newitem)
        // return this.http.get(RmsService.serverUrl + 'dict/delete/'+newitem)
    }

    addDict(newitem){
    console.log('dict/add/'+newitem.item+'/'+newitem.unit+'/'+newitem.mfrs)
    electron.ipcRenderer.send('adddict',newitem.item,newitem.unit,newitem.mfrs)
    // return this.http.get(RmsService.serverUrl + 'dict/add/'+newitem.item+'/'+newitem.unit+'/'+newitem.mfrs)
    }
}


@Injectable()
export class RmsExportr {
    constructor(private http:Http){}
    getRms(){
        let mainValue = electron.ipcRenderer.sendSync('display',"display");
        console.log(mainValue);
        return mainValue
    }

    rmsExport(newNum){
        console.log('exportr/'+newNum.item+'/'+newNum.num)
        electron.ipcRenderer.send('export',newNum.item,newNum.num)
        // return this.http.get(RmsService.serverUrl + 'exportr/'+newNum.item+'/'+newNum.num)
    }
}