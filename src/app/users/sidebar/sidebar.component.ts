import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {

  }

  changeFilter(item) {
    if (item === 'Logout') {
      sessionStorage.setItem('tableUsers',  JSON.stringify([]));
      localStorage.setItem('isAdmin', 'false');
    }
  }
}
