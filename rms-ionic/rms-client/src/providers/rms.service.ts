import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { Rms } from "../pages/rms"
// import { HTTP } from 'ionic-native';



@Injectable()
export class RmsService {
    constructor(private http:Http){}
    static serverUrl = 'http://10.0.0.104:3000/'
    
    getRms():Observable<Rms[]> {
        console.log("storage")
        return this.http.get(RmsService.serverUrl + 'rms/display')
               .map(res => res.json())
    }
};


@Injectable()
export class RmsImportr {
    constructor(private http:Http){}
    getRms():Observable<Rms[]>{
        console.log("importr")
        return this.http.get(RmsService.serverUrl + 'rms/display')
               .map(res => res.json())
    }

    rmsImport(newNum):Observable<Rms[]>{
        console.log(RmsService.serverUrl + 'importr/'+newNum.item+'/'+newNum.num+'/'+newNum.location)
        return this.http.get(RmsService.serverUrl + 'importr/'+newNum.item+'/'+newNum.num+'/'+newNum.location)
               .map(res => res.json())
    }
}


@Injectable()
export class RmsDict {
    constructor(private http:Http){}
    getDict():Observable<Rms[]>{
        console.log("dict")
        return this.http.get(RmsService.serverUrl + 'rms/dict')
               .map(res => res.json())
    }

    delDict(newitem):Observable<Rms[]>{
        console.log(RmsService.serverUrl + 'dict/delete/'+newitem)
        return this.http.get(RmsService.serverUrl + 'dict/delete/'+newitem)
               .map(res => res.json())
    }

    addDict(newitem):Observable<Rms[]>{
    console.log(RmsService.serverUrl + 'dict/add/'+newitem.item+'/'+newitem.unit+'/'+newitem.mfrs)
    return this.http.get(RmsService.serverUrl + 'dict/add/'+newitem.item+'/'+newitem.unit+'/'+newitem.mfrs)
           .map(res => res.json())
    }
}


@Injectable()
export class RmsExportr {
    constructor(private http:Http){}
    getRms():Observable<Rms[]>{
        console.log(RmsService.serverUrl + "exportr")
        return this.http.get(RmsService.serverUrl + 'rms/display')
               .map(res => res.json())
    }

    rmsExport(newNum):Observable<Rms[]>{
        console.log(RmsService.serverUrl + 'exportr/'+newNum.item+'/'+newNum.num)
        return this.http.get(RmsService.serverUrl + 'exportr/'+newNum.item+'/'+newNum.num)
               .map(res => res.json())
    }
}