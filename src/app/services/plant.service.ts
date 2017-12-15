import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';


@Injectable()
export class PlantService {
  constructor(public http: Http) {

  }

   getPlants(token: String) {
    return this.http.get('http://localhost:8000/api/plants?token=' + token)
      .map((response: Response) => {
        return response.json();
      });
   }
}

interface Plant {
  name;
  description;
}
