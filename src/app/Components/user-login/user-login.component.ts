import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
user:boolean=false;
constructor(private userService:UserAuthService){}
  ngOnInit(): void {
    this.user=this.userService.UserState;
  }
  userLogin(){
    this.userService.login('admin@gmail.com','password12');
    this.user=this.userService.UserState;//true
  }
  userLogout(){
    this.userService.logout();
    this.user=this.userService.UserState;//false
  }
}
