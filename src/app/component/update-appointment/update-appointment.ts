import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Appointment } from '../../class/appointment';
import { AppointmentService } from '../../service/appointment-service';

@Component({
  selector: 'app-update-appointment',
  imports: [FormsModule,RouterLink],
  templateUrl: './update-appointment.html',
  styleUrl: './update-appointment.css',
})
export class UpdateAppointment {

  id:number=0;
  appointment=signal<Appointment>(new Appointment());

  constructor(
    private appointmentService:AppointmentService,
    private router:Router,
    private route:ActivatedRoute
  ){}

  ngOnInit(){
    this.id= this.route.snapshot.params['id'];
    this.appointmentService.getAppointmentById(this.id).subscribe((data)=>{
      console.log(data);
      this.appointment.set(data);
      
    })
  }

  onSubmit(){
    this.appointmentService.updataData(this.id, this.appointment()).subscribe((item)=>{
      console.log(item);
      this.goToAppointment();
    })
  }

  goToAppointment(){
    this.router.navigate(['/appoint']);
  }


}
