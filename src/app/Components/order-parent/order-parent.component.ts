import { Component } from '@angular/core';
import { Icategory } from 'src/app/Models/icategory';

@Component({
  selector: 'app-order-parent',
  templateUrl: './order-parent.component.html',
  styleUrls: ['./order-parent.component.scss']
})
export class OrderParentComponent {
catList:Icategory[];
selectedCatID:number = 0;
receivedTotalPrice:number = 0;
constructor(){
  this.catList=[
    {id:1,name:"Mobile"},
    {id:2,name:"LabTop"},
    {id:3,name:"TV"}

  ];
}

totalInparentFunc(total:number){
  this.receivedTotalPrice=total;

}
}
