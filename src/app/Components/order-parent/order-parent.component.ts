import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Icategory } from 'src/app/Models/icategory';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-order-parent',
  templateUrl: './order-parent.component.html',
  styleUrls: ['./order-parent.component.scss']
})
export class OrderParentComponent implements AfterViewInit {
catList:Icategory[];
selectedCatID:number = 0;
receivedTotalPrice:number = 0;
// Day5

// @ViewChild('userName') user:ElementRef|undefined=undefined;
// @ViewChild('userName') user:ElementRef|null=null;
// @ViewChild('userName') user:ElementRef={} as ElementRef;

// ? => safe navigation operator
// @ViewChild('userName') user?:ElementRef;

// ! => non null assertion operator
@ViewChild('userName') user!:ElementRef;
@ViewChild(ProductsComponent) productComRef!:ProductsComponent;
constructor(){
  this.catList=[
    {id:1,name:"Mobile"},
    {id:2,name:"LabTop"},
    {id:3,name:"TV"}

  ];
}
// Day5
  ngAfterViewInit(): void {
    // if(this.user){
    this.user.nativeElement.value="Value for User Input from ts class";
  // }

  // console.log(this.productComRef.prdListOfCat);

  }
  getProducts(){

    console.log(this.productComRef.prdListOfCat);

  }

totalInparentFunc(total:number){
  this.receivedTotalPrice=total;

}
}
