import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import {User} from '../model/user'
import { UserService } from '../service/userservice';


@Component({
  selector: 'user-details',
  templateUrl: 'user-details.component.html',
  styleUrls: ['user-details.component.css']
})
export class UserDetailsComponent  {

  constructor(private route:ActivatedRoute, private userService:UserService) {

   let observable =route.paramMap;//param map is the property in activated route
   observable.subscribe((params:ParamMap)=>{
    let idVal:string =params.get("userId");
    let idNum:number=Number(idVal);//converting string to number
    console.log("id available is "+idNum);
    this.findUserById(idNum);
   })
   }

   user:User;


   findUserById(userId:number){
    let observable:Observable<User>=this.userService.getUser(userId);
    observable.subscribe(
      userArg=>{
        this.user=userArg;
      },

      err=>{
        console.log("isnide user details, err is "+err.message);
      }

    );
   }

  findUser(form:any){
    let data=form.value;
    let userId=data.userId;
   this.findUserById(userId);
  }

}
