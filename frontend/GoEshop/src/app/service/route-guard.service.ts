import { Injectable } from '@angular/core';
import { BasicAuthenticationService } from './basic-authentication.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private basicAuthenticationService: BasicAuthenticationService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.basicAuthenticationService.isUserLoggedIn()){
      return true;
    }

    this.router.navigate(['login'])
    return false;
  }

  isAdmin(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.basicAuthenticationService.getUserRole() == 'ROLE_ADMIN'){
      return true;
    }

    this.router.navigate(['products'])
    return false;
  }
}
