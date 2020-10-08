import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { UserService } from '../service/userservice';

@Component({
  selector: 'adduser-codedriven',
  templateUrl: './adduser-codedriven.component.html',
  styleUrls: ['./adduser-codedriven.component.css']
})

export class AdduserCodedrivenComponent implements OnInit {

  userForm:FormGroup;

  userNameCtrl:FormControl;

  passwordCtrl:FormControl;

  userRoleCtrl:FormControl;

  user:User;

  constructor(private userService:UserService,fb:FormBuilder) { 
    this.userNameCtrl=fb.control('',[Validators.minLength(2), Validators.required]);
    this.passwordCtrl=fb.control('',[Validators.required]);
    this.userRoleCtrl=fb.control('',[Validators.required]);
    this.userForm=fb.group({
    username:  this.userNameCtrl,
    age: this.passwordCtrl,
    salary:this.userRoleCtrl

    });
  }

  ngOnInit(): void {
  }

  addUser(){
    let userName:string=this.userNameCtrl.value;
    let password:string=this.passwordCtrl.value;
    let userRole:string=this.userRoleCtrl.value;
    this.user=new User(userName,password,userRole);
    let observable:Observable<User>=this.userService.addUser(this.user);
     observable.subscribe(
       userArg=>{
         this.user=userArg;
       },
       err=>{
         console.log("add suer code driven, err is ="+err.message);
       }
     )
  }

}
