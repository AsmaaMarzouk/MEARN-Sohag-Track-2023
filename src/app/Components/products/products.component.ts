import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductApiService } from 'src/app/Services/product-api.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit,OnChanges {
// iterface => array of objects
// productList:Iproduct[];


// Day3
@Input() receivedCatID:number = 0;
prdListOfCat:Iproduct[]=[];
orderTotalPrice:number = 0;
// declare event
@Output() totalPriceChangedEv:EventEmitter<number>;
// categories => id:1 (Mobiles) || id:2 (LabTop) || id:3 (TV)
// Day4 => inject inside constructor


// Day5
date1:Date = new Date();
constructor(private prdService:ProductService,private router:Router,private productAPIService:ProductApiService){
  this.totalPriceChangedEv=new EventEmitter<number>();
  // this.productList=[
  //   {id:1,name:"Samgsung",price:12000,quantity:1,catID:1,imgURL:"https://images.pexels.com/photos/50614/pexels-photo-50614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
  //   {id:24,name:"IPhone",price:35000,quantity:0,catID:1,imgURL:"https://images.pexels.com/photos/50614/pexels-photo-50614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
  //   {id:13,name:"Dell",price:31200,quantity:5,catID:2,imgURL:"https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
  //   {id:55,name:"HP",price:50000,quantity:2,catID:2,imgURL:"https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
  //   {id:43,name:"LG",price:60000,quantity:0,catID:3,imgURL:"https://images.pexels.com/photos/1046639/pexels-photo-1046639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
  //   {id:23,name:"Tornado",price:33500,quantity:7,catID:3,imgURL:"https://images.pexels.com/photos/1046639/pexels-photo-1046639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
  // ];
}

// Day3
  ngOnChanges(): void {
    // this.getProductsOfCat();
// Day4
  //  this.prdListOfCat = this.prdService.getProductByCategoryID(this.receivedCatID);

  //  Day6
  if(this.receivedCatID==0){
    this.productAPIService.getAllProducts().subscribe(data=>{
      this.prdListOfCat=data;
    })
  }
  else{
  this.productAPIService.getProductsByCategoryId(this.receivedCatID).subscribe(data=>{

    this.prdListOfCat=data;
  })
}
  }
  ngOnInit(): void {
    // this.getProductsOfCat()

    // Day7
    this.productAPIService.getAllProducts().subscribe(data=>{
      this.prdListOfCat=data;
    })
  }


// private getProductsOfCat()
// {
//   if(this.receivedCatID==0){
//     this.prdListOfCat=Array.from(this.productList);
//     return;
//   }

//  this.prdListOfCat= this.productList.filter((prd)=>prd.catID==this.receivedCatID)

// }

updateTotalPrice(prdPrice:number,itemsCount:any){


  // this.orderTotalPrice=prdPrice*itemsCount;
  // convert string to number
  // this.orderTotalPrice += prdPrice * parseInt(itemsCount);
  // this.orderTotalPrice += prdPrice * Number(itemsCount);
  // this.orderTotalPrice += prdPrice * itemsCount as number;
  this.orderTotalPrice += prdPrice * +itemsCount;
  this.totalPriceChangedEv.emit(this.orderTotalPrice);

}
openDetailsOfProduct(prdID:number){
// this.router.navigate([path,parameter])
this.router.navigate(['Products',prdID])
}


}
