import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AdminauthenticateService } from '../../service/adminauthenticate-service';

@Component({
  selector: 'app-admin-login',
  imports: [FormsModule,RouterLink],
  templateUrl: './admin-login.html',
  styleUrl: './admin-login.css',
})
export class AdminLogin {

  username=signal('');
  password=signal('');

  constructor(
    private adminService:AdminauthenticateService,
    private router:Router
  ){}

  inValdLogin=false;

  checkLogin(){

    if(this.adminService.authenticate(this.username(), this.password())){
      this.router.navigate(['/admin']);
      this.inValdLogin=false
    }else{
      this.inValdLogin=true
      alert("wrong enter username and password")
      this.router.navigate(['/home'])
      
    }
  }
}
