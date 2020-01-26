import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {AlertifyService} from '../services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: any = {};
  @Output() cancelEmiter = new EventEmitter();
  constructor(private authService: AuthService, private alertify: AlertifyService ) { }

  ngOnInit() {
  }

  registerUser() {
    this.authService.registerUser(this.user).subscribe(
      () => {this.alertify.success('register successful'); },
      error => {this.alertify.error(error); }
    );
  }

  cancel() {
    return this.cancelEmiter.emit(false);
  }

}
