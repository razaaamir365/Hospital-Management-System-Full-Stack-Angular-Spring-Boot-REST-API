import { Component, signal } from '@angular/core';
import { Patient } from '../../class/patient';
import { PatientService } from '../../service/patient-service';
import { Router, RouterLink } from '@angular/router';
import { DocauthenticateService } from '../../service/docauthenticate-service';

@Component({
  selector: 'app-docdesh',
  imports: [RouterLink],
  templateUrl: './docdesh.html',
  styleUrl: './docdesh.css',
})
export class Docdesh {

  patients=signal<Patient[]>([]);

  constructor(
    private patientService:PatientService,
    private router:Router,
    private docauthService:DocauthenticateService
    ){}

  ngOnInit(){
    this.getPatients();
  }

  getPatients(){
    this.patientService.getPatientList().subscribe((data)=>{
      console.log(data);
      this.patients.set(data);
      
    })
  }

    delete(id:number){
    console.log("Delete Click:",id);
    this.patientService.deletePatient(id).subscribe((data)=>{
      console.log("Delete Response:",data);
      this.getPatients();
    });
  }

update(id: number) {
  this.router.navigate(['/update-patient',id])
}

view(id:number){
  this.router.navigate(['view-patient',id]);
}

logout(){
  this.docauthService.userLogout();
  this.router.navigate(['/home'])
}


}
