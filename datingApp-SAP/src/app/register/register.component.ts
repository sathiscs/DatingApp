import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: any = {};
  @Output() cancelEmiter = new EventEmitter();
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  registerUser() {
    this.authService.registerUser(this.user).subscribe(
      () => {console.log('register success'); },
      error => {console.log(error); }
    );
  }

  cancel() {
    return this.cancelEmiter.emit(false);
  }

}
