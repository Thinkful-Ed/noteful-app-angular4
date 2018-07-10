import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class Login {
  username: string;
  password: string;
}
export class User {
  username: string;
  password: string;
  fullname: string;
}

export class LoginComponent implements OnInit {
  
  constructor(private auth: AuthService) { }

  credentials = new Login();
  user = new User();

  onLogin(credentials) {
    this.auth.login(credentials.value);
  }
  onRegister(user) {
    this.auth.register(user.value);
  }
  onLogout() {
    this.auth.logout();
  }
  isAuthenticated() {
  return this.auth.isAuthenticated();
  }

  ngOnInit() {
  }

}
