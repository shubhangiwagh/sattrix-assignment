import { Component, OnInit } from '@angular/core';
import { Router, Event} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'sattrix-assignment';
  isAdmin = localStorage.getItem('isAdmin');
  hide = true;
  username = '';
  password = '';
  isCorrect = false;

  constructor(
    private router: Router
  ) { 
    this.router.events.subscribe((event: Event) => {
      this.isAdmin = localStorage.getItem('isAdmin');
  });
  }

  ngOnInit() {
    this.isAdmin = localStorage.getItem('isAdmin');
}
}
