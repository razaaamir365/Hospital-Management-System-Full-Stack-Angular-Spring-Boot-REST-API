import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminauthenticateService {

  constructor(){}

  authenticate(username2:string,password2:string){
    if (username2=='sifan' && password2=='sifan@123') {
      sessionStorage.setItem('username2',username2)
      return true;  
    }else{
    return false
    }
  }

  isUserLoggedin(){
    console.log("login user successfully");
    let user = sessionStorage.getItem('username2');
    return !(user==null)
  }


  logout(){
    console.log("logout user");
    sessionStorage.removeItem('username2');
  }
}
