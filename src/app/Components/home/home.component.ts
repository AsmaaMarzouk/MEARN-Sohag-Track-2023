import { Component } from '@angular/core';
import { ClassData } from 'src/app/Models/class-data';
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

// Day2
// class
classData:ClassData;
//1- intialize values
constructor(){
this.classData=new ClassData('Hello World',"https://images.unsplash.com/photo-1600703136783-bdb5ea365239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVkJTIwZmxvd2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",['item1','item2','item3']);
}

// 

showImg:boolean=true;
toggleImg(){
this.showImg=!this.showImg;
}




userFeedback:string="Very Good";



}
