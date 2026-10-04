import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Medicine } from '../../class/medicine';
import { MedicineService } from '../../service/medicine-service';
import { identifierName } from '@angular/compiler';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-update-medicine',
  imports: [RouterLink,FormsModule],
  templateUrl: './update-medicine.html',
  styleUrl: './update-medicine.css',
})
export class UpdateMedicine {

  id:number=0;
  medicine=signal<Medicine>(new Medicine());

  constructor(
    private medicineService:MedicineService, 
    private route:ActivatedRoute,
    private router:Router
  ){}

   ngOnInit(){
    
    this.id = this.route.snapshot.params['id'];
    this.medicineService.getMedicineById(this.id).subscribe((data)=>{
      console.log(data);
      this.medicine.set(data);
    })
    
   }
  onSubmit(){
    this.medicineService.updateMedicine(this.id, this.medicine()).subscribe((data)=>{
      console.log(data);
      this.goToMedicineList();
    })
  }
  goToMedicineList(){
    this.router.navigate(['view-medicine']);
  }


}
