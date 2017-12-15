import { Component } from '@angular/core';
import { PlantService } from './services/plant.service';
import { Http } from '@angular/http/';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*TOKEN: String;
  constructor(public plantService: PlantService, public http: Http) {
    this.http.post('http://localhost:8000/api/login', {password: 'test1234'})
    .subscribe(data => {
      console.log(data);
      this.TOKEN = JSON.parse(data['_body'])['token'];
      console.log(this.TOKEN);
      this.title = this.TOKEN;
      plantService.getPlants(this.TOKEN).subscribe((value) => {
        this.plants = value.plants;
        console.log(this.plants);
      });
    });
  }*/
  title: String;
  plants: any[];
}
