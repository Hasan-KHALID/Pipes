import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name!: string;
  date!: string;
  miles!: string;

  onMilesChange(value:any){
    this.miles = value.target.value;
  }

  onNameChange(values:any){

    this.name = values.target.value;

  }

  noDateChange(date:any){

    this.date = date.target.value

  }

}
