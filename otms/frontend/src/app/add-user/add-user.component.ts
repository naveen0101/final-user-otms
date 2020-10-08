import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { UserService } from '../service/userservice';

@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  constructor(private userService: UserService) {
  }

  user: User;

  addUser(form: any) {
    let data = form.value;
    let userRole = data.userRole;
    let userName = data.userName;
    let password = data.password;
    this.user = new User(userName, password, userRole);
    let successFun = (userArg: User) => {
      this.user = userArg;
    };

    let errFun = err => {
      console.log("err in addusercomponent " + err.message);
    }

    let observable: Observable<User> = this.userService.addUser(this.user);
    observable.subscribe(successFun, errFun);
  }

}
