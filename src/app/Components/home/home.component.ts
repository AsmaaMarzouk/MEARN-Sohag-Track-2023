import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Subscription } from 'rxjs';
import { ClassData } from 'src/app/Models/class-data';
import { HomeAdsService } from 'src/app/Services/home-ads.service';
import { ItiInfo } from '../../Models/iti-info';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {
// title:string="Hello MEARN Track";

// sayHello(){
//   return "This from ts , "+ this.title;
// }

// Interface
iti:ItiInfo={trackName:"MEARN Track",trackLogo:"https://miro.medium.com/max/1400/1*k0SazfSJ-tPSBbt2WDYIyw.png",itiBranches:["Smart","Qena","Sohag"]};

// Day2
// class
classData:ClassData;
//1- intialize values


// Day6
// subscription!:Subscription;
subscription:Subscription[]=[];

constructor(private homeAds:HomeAdsService){
this.classData=new ClassData('Hello World',"https://images.unsplash.com/photo-1600703136783-bdb5ea365239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVkJTIwZmxvd2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",['item1','item2','item3']);
}


  ngOnInit(): void {
    // as callback functions
    // object
    // let observer={

    //   next:(data:string) => {
    //     console.log(data);

    //   },
    //   error:(err:string) => {
    //     console.log(err);
    //   },
    //   complete:() => {
    //     console.log("Ads Finished");

    //   }
    // }

    // this.homeAds.getSquenceAds(2).subscribe(observer);

    // this.subscription= this.homeAds.getSquenceAds(2).subscribe({
  //     let ads= this.homeAds.getSquenceAds(2).subscribe({
  //       next:(data:string) => {
  //         console.log(data);
  //       },
  //       error:(err:string) => {
  //         console.log(err);
  //       },
  //       complete:() => {
  //         console.log("Ads Finished");

  //       }
  // })
  // this.subscription.push(ads);



let observer={

      next:(data:string) => {
        console.log(data);

      },
      error:(err:string) => {
        console.log(err);
      },
      complete:() => {
        console.log("Ads Finished");

      }
    };
let filteredData=this.homeAds.getSquenceAds(2).pipe(
  filter(ad=>ad.includes("Black friday")
  ),map(ad=>"Our Ads: "+ad)
);
let ad=filteredData.subscribe(observer);
this.subscription.push(ad)


  }

//
ngOnDestroy(): void {
  // this.subscription.unsubscribe();

  for(let sub of this.subscription){
  sub.unsubscribe();
  }
}


// ######################################//
showImg:boolean=true;
toggleImg(){
this.showImg=!this.showImg;
}




userFeedback:string="Very Good";



}
