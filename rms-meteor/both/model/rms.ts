import { CollectionObject } from './collection-object.model';

export interface Rms extends CollectionObject {
    item?: string;
    unit?: string;
    mfrs?: string;
    num?: number;
    location?: string;
}