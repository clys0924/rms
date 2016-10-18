import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
import { Rms } from "./rms"

@Injectable()
export class RmsService {
    constructor(private http:Http){}
    getRms(){
        console.log("storage")
        return this.http.get('rms/display')
    }
};


@Injectable()
export class RmsImportr {
    constructor(private http:Http){}
    getRms(){
        console.log("importr")
        return this.http.get('rms/display')
    }

    rmsImport(newNum){
        console.log('importr/'+newNum.item+'/'+newNum.num)
        return this.http.get('importr/'+newNum.item+'/'+newNum.num)
    }
}


@Injectable()
export class RmsDict {
    constructor(private http:Http){}
    getDict(){
        console.log("dict")
        return this.http.get('rms/dict')
    }

    delDict(newitem){
        console.log('dict/delete/'+newitem)
        return this.http.get('dict/delete/'+newitem)
    }

    addDict(newitem){
    console.log('dict/add/'+newitem.item+'/'+newitem.unit+'/'+newitem.mfrs)
    return this.http.get('dict/add/'+newitem.item+'/'+newitem.unit+'/'+newitem.mfrs)
    }
}


@Injectable()
export class RmsExportr {
    constructor(private http:Http){}
    getRms(){
        console.log("exportr")
        return this.http.get('rms/display')
    }

    rmsExport(newNum){
        console.log('exportr/'+newNum.item+'/'+newNum.num)
        return this.http.get('exportr/'+newNum.item+'/'+newNum.num)
    }
}