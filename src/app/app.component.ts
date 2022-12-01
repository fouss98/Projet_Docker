import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  number1!:number;
  number2!: number;
  sum!: number;

  calcul(){
    this.sum = this.number1+this.number2;
  }
}
