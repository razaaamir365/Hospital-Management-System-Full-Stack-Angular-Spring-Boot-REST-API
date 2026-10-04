import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DocauthenticateService {

  constructor(private httpClient:HttpClient){}

  authenticate(username:string, password:string){
    if (username=="aamir" && password=="aamir@123") {
      sessionStorage.setItem("username",username);
      console.log(username);
      return true;
    }
    else{
      return false;
    }

  }

  isUserLoggedin(){
    console.log("Doctor login success");
    
    let user = sessionStorage.getItem('username');
    return !(user==null)
  }

  userLogout(){
    console.log("Doctor logout success");
    sessionStorage.removeItem('username')
  }


}

