import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
userLogged:boolean;
constructor(private userService:UserAuthService){
  this.userLogged=this.userService.UserState;
}
  ngOnInit(): void {
    // this.user=this.userService.UserState;
    // console.log(this.user);
    this.userService.getUserStatus().subscribe(status=>{
      this.userLogged=status;
      console.log(this.userLogged);

    })

  }

}
