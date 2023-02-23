import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  prd:Iproduct|undefined =undefined;
  constructor(private activatedRoute:ActivatedRoute,private prdService:ProductService,private location:Location) {}
  ngOnInit(): void {
    // let prdID=this.activatedRoute.snapshot.paramMap.get('pid');
    // console.log(prdID);


    let prdID:number=(this.activatedRoute.snapshot.paramMap.get('pid'))?Number(this.activatedRoute.snapshot.paramMap.get('pid')):0;


    let  foundPrd=this.prdService.getProductByID(prdID);
    // console.log(foundPrd);
    // console.log(this.prd);
    if(foundPrd){
      this.prd=foundPrd;
    }
    else{
      alert("Product not found");
      this.location.back();
    }
    
    


    
  }




}
