import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../class/patient';

@Injectable({
  providedIn: 'root',
})
export class PatientService {

  constructor(private httpClient:HttpClient){}

  private baseURL = "http://localhost:8080/api/patients";

  getPatientList():Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(`${this.baseURL}/`);
  } 
  
  deletePatient(id:number):Observable<object>{
    return this.httpClient.delete(`${this.baseURL}/delete/${id}`);
  }

  createPatient(patients:Patient):Observable<Patient>{
    return this.httpClient.post<Patient>(`${this.baseURL}/insert`,patients)
  }

  getPatientById(id:number):Observable<Patient>{
    return this.httpClient.get<Patient>(`${this.baseURL}/get/${id}`)
  }


  updatePatient(id:number|undefined, patient:Patient):Observable<object>{
    return this.httpClient.put<Patient>(`${this.baseURL}/update/${id}`,patient)
  }



}
