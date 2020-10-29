import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(
        private http: HttpClient,

    ) { }

    item: any;

    setItem(item) {
        this.item = item;
    }

    getItem() {
      return this.item;
    }
   
   
}