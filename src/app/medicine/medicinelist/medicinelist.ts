import { Component, signal } from '@angular/core';
import { Medicine } from '../../class/medicine';
import { MedicineService } from '../../service/medicine-service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-medicinelist',
  imports: [RouterLink],
  templateUrl: './medicinelist.html',
  styleUrl: './medicinelist.css',
})
export class Medicinelist {

  medicines=signal<Medicine[]>([]);

  constructor(private medicineService:MedicineService ,private router:Router){}


  ngOnInit(){
    this.getMedicine();
  }

  getMedicine(){
    this.medicineService.getMedicines().subscribe((data)=>{
      console.log(data);
      this.medicines.set(data);
      
    })
  }

  update(id:number){
    this.router.navigate(['update-medicine',id])

  }

    delete(id:number){
      this.medicineService.deleteMedicine(id).subscribe((data)=>{
        console.log(data);
        this.getMedicine();
        
      })

  }



}
