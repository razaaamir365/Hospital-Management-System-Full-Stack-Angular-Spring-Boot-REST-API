import { Component } from '@angular/core';
import { Medicine } from '../../class/medicine';
import { MedicineService } from '../../service/medicine-service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-medicine',
  imports: [FormsModule,RouterLink],
  templateUrl: './create-medicine.html',
  styleUrl: './create-medicine.css',
})
export class CreateMedicine {

  medicines:Medicine=new Medicine;

  constructor(private medicineService:MedicineService, private router:Router){}

  onSubmit(){
    this.saveMedicine();
  }

  saveMedicine(){
    this.medicineService.createMedicine(this.medicines).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['/view-medicine']);

    });
  }
}
