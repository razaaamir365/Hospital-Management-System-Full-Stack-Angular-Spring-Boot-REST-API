import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AdminauthenticateService } from './adminauthenticate-service';

@Injectable({
  providedIn: 'root',
})
export class AdminauthenticateguardService implements CanActivate{

  constructor(
    private adminauthService:AdminauthenticateService,
    private router:Router
  ){}

  canActivate(){
    if (this.adminauthService.isUserLoggedin()) {
      return true;
    }else{
      this.router.navigate(['/admin-login'])
      return false;
    }
  }




}
