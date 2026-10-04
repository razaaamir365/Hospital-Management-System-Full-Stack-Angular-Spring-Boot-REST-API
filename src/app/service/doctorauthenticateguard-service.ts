import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { DocauthenticateService } from './docauthenticate-service';

@Injectable({
  providedIn: 'root',
})
export class DoctorauthenticateguardService implements CanActivate{

  constructor(
    private docauthService:DocauthenticateService,
    private router:Router
  ){}


  canActivate() {
    if (this.docauthService.isUserLoggedin()){
      return true
    }
    else{
      this.router.navigate(['/doctor-login'])
      return false;
    }
      
  }
}
