import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertifyService } from '../services/alertify.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  constructor(public authService: AuthService, private alertify: AlertifyService, private route: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.route.navigate(['/members']);
      this.alertify.success('Logged in successfully');
    }, error => {this.alertify.error(error); } );
  }

  isLoggedin() {

    return this.authService.isLoggedIn();
  }

  loggedout() {
    localStorage.removeItem('token');
    this.alertify.message('logged out successfully');
    this.route.navigate(['/home']);
  }

}
