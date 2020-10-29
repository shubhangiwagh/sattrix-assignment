import { Component, OnInit } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { UserService } from './services/user-service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user = [];
  error: string = null;
  hide = true;
  name = '';
  email = '';
  phone = '';
  city = '';
  id: any;
  constructor( 
    public userService: UserService
   ) {
    this.user = userService.getItem();
    console.log('user', this.user)
  }

  ngOnInit() {
    if (this.user) {
      this.name = this.user['name'];
      this.email = this.user['email'];
      this.phone = this.user['contact'];
      this.city = this.user['city'];
      this.id = this.user['id']
    }
    
  }

  register() {
    let tableUsers;
    const item = {
      id: UUID.UUID(),
      name: this.name,
      email: this.email,
      contact: this.phone,
      city: this.city
    };
    tableUsers = JSON.parse(sessionStorage.getItem('tableUsers'));
    console.log('bbb',tableUsers );
    
    if (tableUsers) {
      console.log('bbb1',tableUsers );
    if (tableUsers.length > 0) {
      console.log('bbb2',tableUsers );
      tableUsers.forEach((row) => {
        if (row.id === this.id) {
         row.id= this.id;
         row.name= this.name;
         row.email= this.email;
         row.contact= this.phone;
         row.city= this.city;
         } 
      })
    } else {
      tableUsers = [item]
      console.log('ccc',tableUsers );
    }
  } else {
      tableUsers = [item]
      console.log('ccc',tableUsers );
    }
    
    sessionStorage.setItem('tableUsers',  JSON.stringify(tableUsers));
    this.name = '';
  this.email = '';
  this.phone = '';
  this.city = '';
  }

}
