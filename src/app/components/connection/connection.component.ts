import { Component, OnInit } from '@angular/core';

import { ConnectionService } from '../../services/connection.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  constructor(private route: Router) {}
  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token !== null) {
      this.route.navigate(['dashboard']);
    }
  }
}
