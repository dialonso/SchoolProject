import { Student } from './student';
import { Techno } from './techno';
import { Cat_technos } from './category';
import { Company } from './company';
import { Internship } from './internship';
import { Internships_techno } from './internship_techno';

export class dummy {

    // Liste d'étudiants
    students: Student[] = [
        new Student('Martin','Jean'),
        new Student('Dupont','Arthur'),
        new Student('Mclan','Elisa'),
        new Student('Boulla','Christine'),
        new Student('Tinchar','Gary'),
        new Student('Bouilier','Pierre'),
        new Student('Mazor','Maël')
    ];

    // Liste des entreprises
    companies: Company[] = [
        new Company('Atos'),
        new Company('Michelin'),
        new Company('Périscope'),
        new Company('Zohir Agency'),
        new Company('Apple'),
        new Company('Google Inc'),
        new Company('Electrolux'),
        new Company('Tales'),
        new Company('Airbus'),
        new Company('CGI'),
        new Company('Boulanger'),
        new Company('Auchan'),
        new Company('Capgemini'),
        new Company('El Fouzi Intenationnal Exchanges'),
        new Company('The Boring Company'),
    ];

    // Liste des stages
    internships: Internship[] = [
        new Internship('Développement d\'une application mobile',         'https://www.dropbox.com/repo/F4dZ1f5',this.students[0],this.companies[5], new Date('2007-06-31')),
        new Internship('Création d\'un site Web sous le CMS WordPress',   'https://www.dropbox.com/repo/D5s2Sa2',this.students[5],this.companies[11],new Date('2008-06-31')),
        new Internship('Appels d’Offres, Restauration collective',        'https://www.dropbox.com/repo/As11qzQ',this.students[2],this.companies[5], new Date('2009-06-31')),
        new Internship('Réalisation d’un site web pour l’hippodrome ',    'https://www.dropbox.com/repo/ER15dF2',this.students[6],this.companies[9], new Date('2007-06-31')),
        new Internship('Développement d’applications spécifiques',        'https://www.dropbox.com/repo/XX15sZ8',this.students[2],this.companies[8], new Date('2010-06-31')),
        new Internship('Mobilité Multimodale',                            'https://www.dropbox.com/repo/889S7Sf',this.students[2],this.companies[1], new Date('2012-06-31')),
        new Internship('Migration de site internet',                      'https://www.dropbox.com/repo/ww1X4ds',this.students[1],this.companies[2], new Date('2013-06-31')),
        new Internship('Evolutions d’un site web e-commerce',             'https://www.dropbox.com/repo/ffgh4r7',this.students[0],this.companies[4], new Date('2011-06-31')),
        new Internship('Vichy Val d’Allier Développement',                'https://www.dropbox.com/repo/Xcc4f15',this.students[3],this.companies[5], new Date('2009-06-31')),
        new Internship('Vente des produits électroniques\r\nEn ligne',    'https://www.dropbox.com/repo/e7r4f5s',this.students[4],this.companies[6], new Date('2013-06-31')),
        new Internship('Mise en place d’un réseau local d’entreprise',    'https://www.dropbox.com/repo/WXXh4g5',this.students[4],this.companies[3], new Date('2016-06-31')),
        new Internship('Gestion de Projets WEB',                          'https://www.dropbox.com/repo/G55fR8f',this.students[0],this.companies[7], new Date('2017-06-31')),
        new Internship('Mise en œuvre du site EcoReunion.com',            'https://www.dropbox.com/repo/RR74f45',this.students[1],this.companies[12],new Date('2015-06-31')),
        new Internship('Suivi en ligne des stagiaires',                   'https://www.dropbox.com/repo/FF45s58',this.students[5],this.companies[8], new Date('2014-06-31')),
        new Internship('Le webmarketing dans une agence de communication','https://www.dropbox.com/repo/YY1c4d5',this.students[5],this.companies[10],new Date('2010-06-31')),
    ];

    // Liste des catégories
    categories: Cat_technos[] = [
        new Cat_technos('Langage de Programmation'),
        new Cat_technos('Logiciel'),
        new Cat_technos('CMS'),
    ];

    // Lislte des technologies
    technos: Techno[] = [
        new Techno(this.categories[0],'php'),        //0
        new Techno(this.categories[0],'html'),       //1
        new Techno(this.categories[0],'c++'),        //2
        new Techno(this.categories[0],'java'),       //3
        new Techno(this.categories[0],'javascript'), //4
        new Techno(this.categories[2],'prestashop'), //5
        new Techno(this.categories[1],'illustrator'),//6
    ];

    // Tableau de relations pour remplir les technos d'un stage
    link_techno_internship: Internships_techno[] = [
        new Internships_techno(this.internships[0],this.technos[0]),
        new Internships_techno(this.internships[0],this.technos[1]),
        new Internships_techno(this.internships[0],this.technos[4]),
        new Internships_techno(this.internships[1],this.technos[5]),
        new Internships_techno(this.internships[2],this.technos[2]),
        new Internships_techno(this.internships[2],this.technos[1]),
        new Internships_techno(this.internships[3],this.technos[0]),
        new Internships_techno(this.internships[3],this.technos[1]),
        new Internships_techno(this.internships[3],this.technos[4]),
        new Internships_techno(this.internships[4],this.technos[3]),
        new Internships_techno(this.internships[5],this.technos[3]),
        new Internships_techno(this.internships[5],this.technos[6]),
        new Internships_techno(this.internships[6],this.technos[0]),
        new Internships_techno(this.internships[7],this.technos[0]),
        new Internships_techno(this.internships[8],this.technos[3]),
        new Internships_techno(this.internships[8],this.technos[6]),
        new Internships_techno(this.internships[8],this.technos[1]),
        new Internships_techno(this.internships[9],this.technos[5]),
        new Internships_techno(this.internships[10],this.technos[3]),
        new Internships_techno(this.internships[10],this.technos[2]),
        new Internships_techno(this.internships[11],this.technos[0]),
        new Internships_techno(this.internships[11],this.technos[1]),
        new Internships_techno(this.internships[11],this.technos[4]),
        new Internships_techno(this.internships[12],this.technos[5]),
        new Internships_techno(this.internships[12],this.technos[1]),
        new Internships_techno(this.internships[13],this.technos[0]),
        new Internships_techno(this.internships[13],this.technos[4]),
        new Internships_techno(this.internships[14],this.technos[0]),
        new Internships_techno(this.internships[14],this.technos[1])
    ];

    public sendStudents(): Student[] {
        return this.students;
    }
    public sendCompanies(): Company[] {
        return this.companies;
    }
    public sendInternships(): Internship[] {
        return this.internships;
    }
    public sendCategories(): Cat_technos[] {
        return this.categories;
    }
    public sendTechnos(): Techno[] {
        return this.technos;
    }
    public sendTable(): Internships_techno[] {
        return this.link_techno_internship;
    }
}