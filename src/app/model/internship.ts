import {Student} from './student';
import {Company} from './company';
import { Utils } from './utils';

export class Internship {
    id_internship: number;
    title: string;
    link_pdf;
    author: Student; //to student
    company: Company; //to company
    year: Date;

    constructor(t: string, l: string, a: Student, c: Company, y: Date) {
        this.id_internship = Utils.generateId(),
        this.title = t;
        this.link_pdf = l;
        this.author = a;
        this.company = c;
        this.year = y;
    }
}