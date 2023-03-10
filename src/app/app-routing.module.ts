import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewProductComponent } from './Components/Admin/add-new-product/add-new-product.component';
import { HomeComponent } from './Components/home/home.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { OrderParentComponent } from './Components/order-parent/order-parent.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductsComponent } from './Components/products/products.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { UserRegisterComponent } from './Components/user-register/user-register.component';
import { UserAutheGuard } from './Guards/user-authe.guard';
// Day4
// array of objects
const routes: Routes = [
  // First match wins
  // {path:'',redirectTo:'/Home',pathMatch:'full'},//Default path
  // {path:'Home',component:HomeComponent,title:'Home'},
  // {path:'Products',component:ProductsComponent,title:'Products'},
  // {path:'Order',component:OrderParentComponent,title:'Order page'},
  // {path:'**',component:NotFoundComponent},//not found path //wildcard path


  // Second test case
  // {path:'main',component:MainLayoutComponent,children:[
  //   {path:'',redirectTo:'/Home',pathMatch:'full'},//Default path
  //   {path:'Home',component:HomeComponent,title:'Home'},
  //   {path:'Products',component:ProductsComponent,title:'Products'},
  //   {path:'Order',component:OrderParentComponent,title:'Order page'},
  // ]},
  // {path:'**',component:NotFoundComponent},//not found path //wildcard path

   {path:'',component:MainLayoutComponent,children:[
    {path:'',redirectTo:'/Home',pathMatch:'full'},//Default path
    {path:'Home',component:HomeComponent,title:'Home page'},
    {path:'Products',component:ProductsComponent,title:'Products page',canActivate:[UserAutheGuard]},
    {path:'Order',component:OrderParentComponent,title:'Order page',canActivate:[UserAutheGuard]},
    {path:'Products/:pid',component:ProductDetailsComponent,title:'Product details page'},
    {path:'newProduct',component:AddNewProductComponent,title:'New product page'},
    {path:'editProduct/:pid',component:AddNewProductComponent,title:'Edit product page'},
     {
      path: 'user',
      loadChildren: () => import('src/app/Components/user/user.module').then(m => m.UserModule)
     },

  ]},
  {path:'Login',component:UserLoginComponent,title:'Login page'},
  {path:'Logout',component:UserLoginComponent,title:'Logout page'},
  {path:'register',component:UserRegisterComponent},
  {path:'**',component:NotFoundComponent},//not found path //wildcard path




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
