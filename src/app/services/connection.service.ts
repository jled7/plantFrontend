import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ConnectionService {

  private ipAddress: String;
  constructor(public http: Http) {

  }

  connect(ipAddress: String) {
    this.ipAddress = ipAddress;
    return this.http.get('http://' + ipAddress + ':8000/api/connection')
      .timeout(10000)
      .map((response: Response) => {
        return response.json();
      }).catch(err => {
        return Observable.throw(err);
      });
  }

  login(password: String) {
    return this.http.post('http://' + this.ipAddress + ':8000/api/login', {password: password})
      .timeout(10000)
      .map((response: Response) => {
        return response.json();
      }).catch((err) => {
        return Observable.throw(err);
      });
  }
}
