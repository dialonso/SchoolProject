import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { dummy } from '../model/_dummy-data';
import { Company } from '../model/company';
import { Student } from '../model/student';
import { Internship } from '../model/internship';
import { Cat_technos } from '../model/category';
import { Techno } from '../model/techno';
import { Internships_techno } from '../model/internship_techno';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.sass']
})
export class WorkComponent implements OnInit {

  searchForm: FormGroup;

  // Fetching the data
  dummyData = new dummy();

  students: Student[] = this.dummyData.sendStudents();
  companies: Company[] = this.dummyData.sendCompanies();
  internships: Internship[] = this.dummyData.sendInternships();
  categories: Cat_technos[] = this.dummyData.sendCategories();
  technos: Techno[] = this.dummyData.sendTechnos();
  link_techno_internship: Internships_techno[] = this.dummyData.sendTable();

  constructor(private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      search: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  goto(url: any) {
    window.open(url, "_blank");
  }

  htmlStr: string;

  search() {
    let toSearch = this.searchForm.controls.search.value.toLowerCase();
    this.htmlStr = "<h2>Recherche pour <b>" + toSearch +"</b></h2>";
    this.link_techno_internship.forEach(link => {
      let res: string;
      let resCo = link.id_techno_internship.name.toLowerCase();
      if (resCo.includes(toSearch)) {
        res = ` <div class="container">
                  <ul>
                    <li>`+ link.id_internship_techno.title + ' <b>par</b> ' + link.id_internship_techno.author.firstname + ' ' + link.id_internship_techno.author.name + `</li>
                  </ul>
                </div>`;
        this.htmlStr += res;
      }
    });
  }
}
