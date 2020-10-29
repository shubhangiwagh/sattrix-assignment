import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { UserService } from '../services/user-service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'phone', 'city', 'action'];
  data = JSON.parse(sessionStorage.getItem('tableUsers'));
  dataSource = new MatTableDataSource(this.data);
  constructor(
    public router : Router,
    public userService: UserService
  ) { }

  ngOnInit() {
    
  }

  editItem(item) {
    console.log('aaaa', item)
    this.userService.setItem(item);
    this.router.navigate(['/dashboard']);
  }

  deleteItem(item) {
    console.log(item);
    const i = this.dataSource.data.indexOf(item);
    console.log(i);
    this.dataSource.data.splice(i, 1);
    sessionStorage.setItem('tableUsers', JSON.stringify(this.dataSource.data));
    this.dataSource._updateChangeSubscription();
  }

}
