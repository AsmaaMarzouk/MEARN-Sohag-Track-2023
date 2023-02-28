import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// Day6
@Injectable({
  providedIn: 'root'
})
export class HomeAdsService {

 private adsList:string[];
  constructor() {

    this.adsList=["Sale up to 50%",
                   "Big Discounts in Black friday",
                   "Mother's Day Offers",
                  //  "",
                   "Specail Black friday offers",
                  "White Friday sales"]
   }
// setInterval
// getSquenceAds(3)
// getSquenceAds(4000)
getSquenceAds(intervalSecondsNum:number):Observable<string>{
return new Observable<string>((observer)=>{
  // observer.next();
  // observer.error();
  // observer.complete();
  let counter=0;
  let adsTimer=setInterval(()=>{
    if(counter==this.adsList.length)
    {
      observer.complete();
    }
    if(this.adsList[counter]==""){
      observer.error("Error case: Empty Ad");
    }

    observer.next(this.adsList[counter]);
    counter++;


  },intervalSecondsNum*1000);

  return{
    unsubscribe(){

      // call in three cases
      // 1-Error
      // 2-Complete
      // 3-unsubscribe()
      clearInterval(adsTimer);
      console.log("In unsubscribe case....");

    }
  }
})
}
}
