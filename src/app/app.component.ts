import { Component } from '@angular/core';

export class Page { // Aide la navigation
  name: string;
  desc: string;
  url: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  pages: Page[] = [
    {name: "home", desc: "Accueil", url: ""},
    {name: "adding", desc: "Stages", url: "work"}
  ];
}
