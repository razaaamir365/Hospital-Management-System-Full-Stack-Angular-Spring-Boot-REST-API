import { Component, signal } from '@angular/core';
import { Patient } from '../../class/patient';
import { PatientService } from '../../service/patient-service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-patient',
  imports: [RouterLink, FormsModule],
  templateUrl: './view-patient.html',
  styleUrl: './view-patient.css',
})
export class ViewPatient {

  id:number=0;

  patient = signal<Patient | undefined>(undefined);

  constructor(private patientService:PatientService,private route:ActivatedRoute){}

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    this.patientService.getPatientById(this.id).subscribe((data)=>{
      console.log(data);
      this.patient.set(data);
      
    })
  }

}
