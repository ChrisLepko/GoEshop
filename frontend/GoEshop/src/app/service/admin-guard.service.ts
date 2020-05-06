import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BasicAuthenticationService } from './basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {

  constructor(private basicAuthenticationService: BasicAuthenticationService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.basicAuthenticationService.isUserLoggedIn()){
      if(this.basicAuthenticationService.getUserRole() == 'ROLE_ADMIN'){
        return true;
      }
      this.router.navigate(['products'])
      return false;
    }

    this.router.navigate(['login'])
    return false;
  }
}
