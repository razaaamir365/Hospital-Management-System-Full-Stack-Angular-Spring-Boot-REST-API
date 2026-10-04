import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Appointment } from '../../class/appointment';
import { AppointmentService } from '../../service/appointment-service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-appointment',
  imports: [FormsModule,RouterLink],
  templateUrl: './create-appointment.html',
  styleUrl: './create-appointment.css',
})
export class CreateAppointment {

  appointment:Appointment =new  Appointment();


  constructor(private appointmentService:AppointmentService, private router:Router){}

  saveAppointment(){
    this.appointmentService.createAppointment(this.appointment).subscribe((data)=>{
      console.log(data);
      this.goToAppointment();
      
    })
  }

  onSubmit(){
    this.saveAppointment();
  }

  goToAppointment(){
    this.router.navigate(['/appoint'])
  }
}
