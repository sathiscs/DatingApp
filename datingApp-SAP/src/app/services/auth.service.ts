import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { registerLocaleData } from '@angular/common';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  decodeToken: any;
  oauthHelper = new JwtHelperService();
  baseUrl = 'http://localhost:5000/api/auth/';
constructor(private http: HttpClient ) { }

login(model: any) {

  return this.http.post(this.baseUrl + 'login', model)
  .pipe(
    map( (response: any) => {
        if (response) {
          localStorage.setItem('token', response.token);
          this.decodeToken = this.oauthHelper.decodeToken(localStorage.getItem('token'));
        }
    })
  );
  }
  registerUser(user: any) {

    return this.http.post(this.baseUrl + 'register', user);

  }

  isLoggedIn() {
    const token = localStorage.getItem('token');
    return ! this.oauthHelper.isTokenExpired(token);
  }

}
