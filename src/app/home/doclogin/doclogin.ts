import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { DocauthenticateService } from '../../service/docauthenticate-service';

@Component({
  selector: 'app-doclogin',
  imports: [FormsModule, RouterLink ],
  templateUrl: './doclogin.html',
  styleUrl: './doclogin.css',
})
export class Doclogin {

  username=signal<string>('');
  password=signal<string>('');

  constructor(
    private docauthService:DocauthenticateService,
    private router:Router)
    {}

inValidLogin=false;

  checkLogin(){
    if (this.docauthService.authenticate(this.username(),this.password())) {
      console.log(this.username);
      this.router.navigate(['/docdesh']);
      this.inValidLogin=false;
    }
    else{
      alert("Wrong Username and Password")
      this.router.navigate(['/home'])
      this.inValidLogin=true;
    }
  }


}
