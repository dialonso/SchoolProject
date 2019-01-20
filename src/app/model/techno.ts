import { Cat_technos } from './category';
import { Utils } from './utils';

export class Techno {
    id_techno: number;
    category: Cat_technos;
    name: string;

    constructor(cat: Cat_technos, name: string) {
        this.id_techno + Utils.generateId();
        this.category = cat;
        this.name = name;
    }
}