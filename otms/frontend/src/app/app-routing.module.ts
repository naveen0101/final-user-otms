import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { AdduserCodedrivenComponent } from './adduser-codedriven/adduser-codedriven.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [
  {
    path:"app-home",
    component:HomeComponent
  },
//wheneever someone has list in uri, it will be naviagted to user-list
{
  path:'',
  redirectTo :'app-home',
  pathMatch:'full'
},

  {
    path:'user-details/:id',
    component:UserDetailsComponent
  },
  {
    path:'user-details',
    component:UserDetailsComponent
  },
  {
    path: 'add-user',
    component:AddUserComponent
  },

  {
    path:'adduser-codedriven',
    component: AdduserCodedrivenComponent
  },

  {
    path:'user-list',
    component: UserListComponent
  }
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
