import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      console.log('Login Successfully');
    }, error => {console.log(error); } );
  }

  isLoggedin() {
    const token = localStorage.getItem('token');
    return !! token;
  }

  loggedout() {
    localStorage.removeItem('token');
  }

}
