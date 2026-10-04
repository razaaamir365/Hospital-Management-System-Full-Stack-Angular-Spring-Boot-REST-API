import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../class/appointment';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {

  constructor(private httpClient:HttpClient){}

  private firstChildURL = "http://localhost:8080/api/appointment/";

  getAppointments():Observable<Appointment[]>{
    return this.httpClient.get<Appointment[]>(`${this.firstChildURL}`);
  }

  createAppointment(appointment:Appointment):Observable<Appointment>{
    return this.httpClient.post<Appointment>(`${this.firstChildURL}insert`, appointment)
  }

  deleteAppointment(id:number):Observable<Appointment>{
    return this.httpClient.delete<Appointment>(`${this.firstChildURL}delete/${id}`);
  }

  getAppointmentById(id:number):Observable<Appointment>{
    return this.httpClient.get<Appointment>(`${this.firstChildURL}get/${id}`);
  }

  updataData(id:number, appointment:Appointment):Observable<Appointment>{
    return this.httpClient.put<Appointment>(`${this.firstChildURL}update/${id}`,appointment)
  }


}
