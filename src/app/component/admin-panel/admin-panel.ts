import { Component, signal, Signal } from '@angular/core';
import { PatientService } from '../../service/patient-service';
import { Patient } from '../../class/patient';
import { CommonModule } from '@angular/common';
import { Router, RouterLinkWithHref } from '@angular/router';
import { AdminauthenticateService } from '../../service/adminauthenticate-service';

@Component({
  selector: 'app-admin-panel',
  imports: [CommonModule,RouterLinkWithHref],
  templateUrl: './admin-panel.html',
  styleUrl: './admin-panel.css',
})
export class AdminPanel {

  patients = signal<Patient[]>([]);
  constructor(
    private patientService:PatientService,
    private router:Router,
    private adminauthService:AdminauthenticateService
  ){}

  ngOnInit(){
    this.getPatient();
  }


  getPatient() {
  this.patientService.getPatientList().subscribe((data) => {
      console.log("API DATA:", data);
      this.patients.set(data);
    });
  }

  delete(id:number){
    this.patientService.deletePatient(id).subscribe((data)=>{
      console.log("Delete:",data);
      this.getPatient();
      
    })
  }
  
update(id: number) {

  this.router.navigate(['/update-patient',id])


}

logout(){
  this.adminauthService.logout();
  this.router.navigate(['/home'])
}



}
