import { Component, OnInit } from '@angular/core';

import { dummy } from '../model/_dummy-data';
import { Company } from '../model/company';
import { Student } from '../model/student';
import { Internship } from '../model/internship';
import { Cat_technos } from '../model/category';
import { Techno } from '../model/techno';
import { Internships_techno } from '../model/internship_techno';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  // Fetching the data
  dummyData = new dummy();

  students: Student[] = this.dummyData.sendStudents();
  companies: Company[] = this.dummyData.sendCompanies();
  internships: Internship[] = this.dummyData.sendInternships();
  categories: Cat_technos[] = this.dummyData.sendCategories();
  technos: Techno[] = this.dummyData.sendTechnos();
  link_techno_internship: Internships_techno[] = this.dummyData.sendTable();

  //Définition des valeurs pour le Pie Chart 'Pourcentage des technos'
  pieChartLabels: Array<string> = new Array(); 
  pieChartData: Array<number> = new Array();
  pieChartType: string = 'pie';
  polarAreaLegend: boolean = true;

  // Custom données pour la page Home
  submitted = false;
  desc = "Le but de ce siteweb est de montrer les technologies utilisés pour le développement d'applications lors de stages SIPPE !";  

  constructor() {
  }

  ngOnInit() {
    this.preparePieChart();
  }

  getStudentsNames(list: Student[]): string[] {
    let resTab = new Array();
    this.students.forEach(stu => {
      let label = stu.firstname + " " + stu.name;
      resTab.push(label);
    });
    return resTab;
  }

  preparePieChart() {
    // Fill the data and table
    this.technos.forEach(tech => {
      let techIndex = 0;
      this.link_techno_internship.forEach(link => {
        if (link.id_techno_internship.name == tech.name) {
          techIndex++;
        }
      });
      this.pieChartLabels.push(tech.name);
      this.pieChartData.push(techIndex);
    });
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
