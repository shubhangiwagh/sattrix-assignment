import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error = false;
  hide = true;
  registraionPHide = true;
  registraionCHide = true;
  username = '';
  password = '';
  registraionPassword = '';
  registraionConfirmPassword = '';
  registraionUsername = '';
  registraionEmail = '';
  isCorrect = false;
  loginRegisterToggle = true;
  constructor(
    private router: Router
  ) { 
    if (localStorage.getItem('isAdmin')==='true') {
      this.router.navigate(['/dashboard']);
    }
  }

  ngOnInit() {
  }

  login () {
    let registeredUsers = [];
    registeredUsers =   JSON.parse(sessionStorage.getItem('registeredUsers'));
    
    if (registeredUsers !== null || registeredUsers !== undefined) {
      registeredUsers.forEach((row) => {
        console.log('kkkk', Object.entries(row).toString() === Object.entries({username: this.username,
          password: this.password}).toString());
        if (Object.entries(row).toString() === Object.entries({username: this.username,
          password: this.password}).toString()) {
          localStorage.setItem('isAdmin', 'true');
          this.isCorrect = false;
          this.error = false;
          this.router.navigate(['/dashboard']);
        } else {
          localStorage.setItem('isAdmin', 'false');
          this.isCorrect = true;
          this.error = true;
        }
      })
      
    } else {
      this.error = true;
    }
    
  }

  register() {
    const userDetails = {
      username: this.registraionUsername,
      password: this.registraionPassword,
    }
    let registeredUsers = [];
    registeredUsers =   JSON.parse(sessionStorage.getItem('registeredUsers'));
    if (registeredUsers === null || registeredUsers === undefined ) {
     
      registeredUsers = [userDetails]
    } else {
      registeredUsers.push(userDetails);
    }   
    sessionStorage.setItem('registeredUsers',  JSON.stringify(registeredUsers));
    this.loginRegisterToggle = true;
  }
}
