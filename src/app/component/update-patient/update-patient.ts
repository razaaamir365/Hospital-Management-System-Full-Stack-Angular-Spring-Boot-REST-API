import { Component, signal } from '@angular/core';
import { single } from 'rxjs';
import { Patient } from '../../class/patient';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PatientService } from '../../service/patient-service';

@Component({
  selector: 'app-update-patient',
  imports: [RouterLink,FormsModule],
  templateUrl: './update-patient.html',
  styleUrl: './update-patient.css',
})
export class UpdatePatient {

  id:number=0;
  patientlist= signal<Patient>(new Patient());

  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit() {

    this.id=this.route.snapshot.params['id'];
    this.patientService.getPatientById(this.id).subscribe((data)=>{
      console.log("getPatientById is call : ",data);
      this.patientlist.set(data);
      
    })

  }

  onSubmit() {

    this.patientService.updatePatient(this.id, this.patientlist()).subscribe((data)=>{
      console.log(data);
      this.goToAdminPanel();
      
    })
  }

  goToAdminPanel(){
    this.router.navigate(['/admin'])
  }


}
