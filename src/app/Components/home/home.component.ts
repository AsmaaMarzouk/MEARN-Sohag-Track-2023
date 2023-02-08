import { Component } from '@angular/core';
import { ItiInfo } from '../../Models/iti-info';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
// title:string="Hello MEARN Track";

// sayHello(){
//   return "This from ts , "+ this.title;
// }

// Interface
iti:ItiInfo={trackName:"MEARN Track",trackLogo:"https://miro.medium.com/max/1400/1*k0SazfSJ-tPSBbt2WDYIyw.png",itiBranches:["Smart","Qena","Sohag"]};


}
