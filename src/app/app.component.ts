import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular + Camunda prototyping';

  constructor(){}

  showStandard(){
    window.alert("test");
  }
}
