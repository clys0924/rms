import { MongoObservable } from 'meteor-rxjs';

import { Rms } from '../model/rms';
     
export const Dict = new MongoObservable.Collection<Rms>('dc_item');
export const Storage = new MongoObservable.Collection<Rms>('str_item');