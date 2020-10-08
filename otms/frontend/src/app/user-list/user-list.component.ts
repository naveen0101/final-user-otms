import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { UserService } from '../service/userservice';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent  {


  users:User[];

  constructor(private userService:UserService) {
    let observable:Observable<User[]>=userService.getAllUsers();
    observable.subscribe(
      userArr=>{
        this.users=userArr;
      },
      err=>{
        console.log("inside UserListComponent err is "+err.message);
      }

    );
   }



  removeUser(userId:number){
 let observable=this.userService.removeUser(userId);
 observable.subscribe(
   res=>{
    this.removeLocalElement(userId);
   },
   err=>{
     console.log("inside removeuser, err is "+err.message);
   }
 );
  }

  removeLocalElement(userId:number):void{
    console.log("before user removed,length="+this.users.length); 
    for(let i=0 ;i<this.users.length;i++ ){
       let user=this.users[i];
        if(user.userId===userId){
            //index and number of elements to remove
            this.users.splice(i,1);
        }
     }
       
}
}
