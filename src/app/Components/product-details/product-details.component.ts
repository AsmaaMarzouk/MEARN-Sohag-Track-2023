import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  prd:Iproduct|undefined =undefined;
  // Day5
  prdIDList:number[]=[];
  currentProductID:number=0;
  currentIndex:number=0;
  constructor(private activatedRoute:ActivatedRoute,private prdService:ProductService,private location:Location,private router:Router) {}
  ngOnInit(): void {
    // let prdID=this.activatedRoute.snapshot.paramMap.get('pid');
    // console.log(prdID);

    // Day5
   this.prdIDList = this.prdService.getProductsListID();

   console.log(this.prdIDList);


    // let prdID:number=(this.activatedRoute.snapshot.paramMap.get('pid'))?Number(this.activatedRoute.snapshot.paramMap.get('pid')):0;
    // Day5
  //  this.currentProductID =(this.activatedRoute.snapshot.paramMap.get('pid'))?Number(this.activatedRoute.snapshot.paramMap.get('pid')):0;


  //   // let  foundPrd=this.prdService.getProductByID(prdID);
  //   // Day5
  //   let  foundPrd=this.prdService.getProductByID(this.currentProductID);
  //   // console.log(foundPrd);
  //   // console.log(this.prd);
  //   if(foundPrd){
  //     this.prd=foundPrd;
  //   }
  //   else{
  //     alert("Product not found");
  //     this.location.back();
  //   }
this.activatedRoute.paramMap.subscribe(paramMap=>{
this.currentProductID=paramMap.get('pid')?Number(paramMap.get('pid')):0;
let  foundPrd=this.prdService.getProductByID(this.currentProductID);
  if(foundPrd){
    this.prd=foundPrd;
  }
  else{
    alert("Product not found");
    this.location.back();
  }
});



  }

  GoPrevFunc(){

   this.currentIndex= this.prdIDList.findIndex((item)=>item==this.currentProductID);
  //  console.log(this.currentIndex);
  //  console.log(this.prdIDList[this.currentIndex]);
  this.router.navigate(['/Products',this.prdIDList[--this.currentIndex]])

  }

  GoNextFunc(){
    this.currentIndex= this.prdIDList.findIndex((item)=>item==this.currentProductID);
    this.router.navigate(['/Products',this.prdIDList[++this.currentIndex]])
  }


  searchByProduct(productName:string){

   let result= this.prdService.searchByProductName(productName);
   if(result){
    this.prd=result;
   }
   else{
    alert("Product not found")
   }

  }



}
