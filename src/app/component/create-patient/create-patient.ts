import { Component } from '@angular/core';
import { Patient } from '../../class/patient';
import { PatientService } from '../../service/patient-service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-patient',
  imports: [FormsModule,RouterLink,CommonModule],
  templateUrl: './create-patient.html',
  styleUrl: './create-patient.css',
})
export class CreatePatient {

  
  patients:Patient =new  Patient();


  constructor(private patientService:PatientService, private router:Router){}

  create(){
    this.patientService.createPatient(this.patients).subscribe((data)=>{
      console.log(data);
      this.goToPatient();
      
    })
  }

  onSubmit(){
    this.create();
  }

  goToPatient(){
    this.router.navigate(['/admin'])
  }


}
