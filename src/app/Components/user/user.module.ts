import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditUserProfileComponent } from './edit-user-profile/edit-user-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { UserAutheGuard } from 'src/app/Guards/user-authe.guard';


const routes: Routes = [
  {path:'userProfile',component:UserProfileComponent,title:'User Profile',canActivate:[UserAutheGuard]},
  {path:'editUserProfile',component:EditUserProfileComponent,title:'Edit User Profile',canActivate:[UserAutheGuard]},
];
@NgModule({
  declarations: [
    UserProfileComponent,
    EditUserProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
