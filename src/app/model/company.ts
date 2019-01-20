import { Utils } from './utils';

export class Company {
    id_company: number;
    company: string;

    constructor(com: string) {
        this.id_company = Utils.generateId();
        this.company = com;
    }
}