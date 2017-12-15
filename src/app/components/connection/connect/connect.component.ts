import { Component, OnInit } from '@angular/core';

import { ConnectionService } from '../../../services/connection.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {

  private connecting: Boolean = false;
  private ipAddress: String;
  private errors: Boolean = false;
  private error: any;

  constructor(private connectionService: ConnectionService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(input) {
    this.connecting = true;
    this.ipAddress = input.ipAddress;
    this.connectionService.connect(this.ipAddress)
      .subscribe(data => {
        if (data.message.startsWith('PlantAPI')) {
          if (data.status === 200) {
            localStorage.setItem('ipAddress', this.ipAddress.toString());
            this.router.navigate(['login'], { skipLocationChange: true });
          } else if (data.status === 204) {
            console.log('To account creation');
          } else {
            this.error = 'Error with the GreenPlants server';
          }
        } else {
          this.error = 'Doesn\'t look like a GreenPlants device IP';
        }
        this.connecting = false;
      },
      err => {
        if (err.name === 'TimeoutError') {
          this.error = 'Doesn\'t look like a GreenPlants device IP';
        } else {
          this.error = 'Incorrect URI or IP';
        }
        this.connecting = false;
        this.errors = true;
      }
      );
  }
}
