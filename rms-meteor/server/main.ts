import { Meteor } from 'meteor/meteor';
    
import { defaultDict } from './imports/restore/restore';

Meteor.startup(() => {
    defaultDict();
});
