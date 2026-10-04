import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medicine } from '../class/medicine';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MedicineService {

    constructor(private httpClient:HttpClient){}

  private baseURL = "http://localhost:8080/api/medicine/";

  getMedicines():Observable<Medicine[]>{
    return this.httpClient.get<Medicine[]>(`${this.baseURL}`);
  }

  createMedicine(medicine:Medicine){
    return this.httpClient.post<Medicine>(`${this.baseURL}insert`,medicine)

  }

  getMedicineById(id:number){
    return this.httpClient.get<Medicine>(`${this.baseURL}get/${id}`)
  }

  updateMedicine(id:number, medicine:Medicine):Observable<Medicine>{
    return this.httpClient.put<Medicine>(`${this.baseURL}update/${id}`,medicine)
  }

  deleteMedicine(id:number):Observable<Medicine>{
    return this.httpClient.delete<Medicine>(`${this.baseURL}delete/${id}`)
  }


}
