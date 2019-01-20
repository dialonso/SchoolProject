import {Internship} from './internship';
import {Techno} from './techno';
 
export class Internships_techno {
    id_internship_techno: Internship;
    id_techno_internship: Techno;

    constructor(stage: Internship, tech: Techno) {
        this.id_internship_techno = stage;
        this.id_techno_internship = tech;
    }
}