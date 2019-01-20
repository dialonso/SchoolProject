import {Utils} from './utils';;

export class Student {
    id_student: number;
    name: string;
    firstname: string

    constructor(name: string, firstname: string) {
        this.id_student = Utils.generateId();
        this.name = name;
        this.firstname = firstname;
    }
}