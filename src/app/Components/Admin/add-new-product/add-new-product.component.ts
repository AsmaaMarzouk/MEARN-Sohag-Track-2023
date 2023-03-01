import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Icategory } from 'src/app/Models/icategory';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductApiService } from 'src/app/Services/product-api.service';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss']
})
export class AddNewProductComponent {
  prd:Iproduct = {} as Iproduct;
 catList:Icategory[];
constructor(private prdAPIService:ProductApiService,private router:Router){
  this.catList=[
    {id:1,name:"Mobile"},
    {id:2,name:"LabTop"},
    {id:3,name:"TV"}
  ];
}

addnewPrd(){
// let prd:Iproduct={
//   id:82,
//   name:"new Mobile",
//   quantity:2,
//   price:55,
//   catID:1,
//   imgURL:"https://images.pexels.com/photos/50614/pexels-photo-50614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
// };
// this.prdAPIService.addNewProduct(prd).subscribe({
//   next:(prd)=>{
//     console.log(prd);

//     this.router.navigate(['/Products'])

//   },
//   error:(err)=>{

//     console.log(err);

//   }
// })

this.prdAPIService.addNewProduct(this.prd).subscribe({
  next:(newPrd)=>{
    console.log(newPrd);
    this.router.navigate(['/Products']);

  },
  error:(err)=>{
    console.log(err);

  }
})
}
}
