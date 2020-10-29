import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';   

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor( public router: Router) { }

  // Call check authenticated user api request when user is active
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let grant = false
    grant= localStorage.getItem("isAdmin") === 'true'? true : false;
    console.log('grant', grant);
    if (!grant) {
      localStorage.clear();
      this.router.navigate(['/']);
      return grant;
    }
    return grant;
  }
}
