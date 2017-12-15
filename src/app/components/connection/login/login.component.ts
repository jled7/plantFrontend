import { Component, OnInit } from '@angular/core';

import { ConnectionService } from '../../../services/connection.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private connecting: Boolean = false;
  private ipAddress: String;
  private errors: Boolean = false;
  private error: any;
  private password: String;

  constructor(private connectionService: ConnectionService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(input) {
    this.connecting = true;
    this.ipAddress = localStorage.getItem('ipAddress');
    this.password = input.password;
    this.connectionService.login(this.password)
      .subscribe(data => {
        console.log(data);
        if (data.status === 200) {
          localStorage.setItem('token', data.token);
          this.router.navigate(['dashboard']);
        } else if (data.status === 500) {
          this.error = 'Incorrect password';
        } else {
          this.error = 'Error with the GreenPlants server';
        }
        this.connecting = false;
        this.errors = true;
      },
      err => {
        if (err.name === 'TimeoutError') {
          this.error = 'Error with the GreenPlants device';
        }
        this.connecting = false;
        this.errors = true;
      }
      );
  }

}
