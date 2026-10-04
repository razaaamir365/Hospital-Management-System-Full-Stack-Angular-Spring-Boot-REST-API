import { Component, signal } from '@angular/core';
import { Appointment } from '../../class/appointment';
import { AppointmentService } from '../../service/appointment-service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-appointment-page',
  imports: [CommonModule,RouterLink],
  templateUrl: './appointment-page.html',
  styleUrl: './appointment-page.css',
})
export class AppointmentPage {

     appointments=signal<Appointment[]>([])

  constructor(
    private appointmentService:AppointmentService,
    private router:Router,
    private route:ActivatedRoute
  ){}


  ngOnInit(){
    this.getAppointment();
  }

  getAppointment(){
    this.appointmentService.getAppointments().subscribe((data)=>{
      console.log("API DATA:", data);
      this.appointments.set(data);
    })
  }

  delete(id:number){
    console.log("Delete Click:",id);
    
    this.appointmentService.deleteAppointment(id).subscribe((data)=>{
      console.log("Delete Response:",data);
      this.getAppointment();
      
    });
  }

  update(id:number){
    this.router.navigate(['update-appoint',id]);
  }


}
