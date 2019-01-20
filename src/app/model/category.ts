import { Utils } from './utils';

export class Cat_technos {
    id_category: number;
    category: string;

    constructor(cat: string) {
        this.id_category = Utils.generateId();
        this.category = cat;
    }
}