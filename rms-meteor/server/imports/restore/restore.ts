import { Dict } from '../../../both/dbconnect/dbconnect';
import { Rms } from '../../../both/model/rms';
import { Storage } from '../../../both/dbconnect/dbconnect';

export function defaultDict() {
    if (Dict.find().cursor.count() === 0) {
      const dicts: Rms[] = [{
        item: 'alp',
        unit: '盒',
        mfrs: 'siemens'
    }, {
        item: 'alb',
        unit: '盒',
        mfrs: 'siemens'
    }, {
        item: 'ast',
        unit: '盒',
        mfrs: 'siemens'
    }];
     dicts.forEach((dict: Rms) => Dict.insert(dict));
     const strs: Rms[] = [{
        item: "alp",
        num: 0
     },{
        item: "alb",
        num: 0       
     },{
        item: "ast",
        num: 0
     }];
     strs.forEach((str: Rms) => Storage.insert(str));
    }
}

