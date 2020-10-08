import { Injectable } from '@angular/core';
import { from, observable, Observable } from 'rxjs';
import { User } from '../model/user';
import {HttpClient} from '@angular/common/http'

@Injectable()
export class UserService{

    baseUrl="http://localhost:8686/users";

    constructor(private http:HttpClient){

    }

    addUser(user:User):Observable<User>{
     let url=this.baseUrl+"/adduser";   
     let observable:Observable<User>=this.http.post<User>(url,user);
     return observable;
    }

    getUser(id:number):Observable<User>{
        let url=this.baseUrl+"/get/"+id;
        let observable:Observable<User>=this.http.get<User>(url);
        return observable;
    }

   getAllUsers():Observable<User[]>{
       let url=this.baseUrl+"/alluser";
       let observable:Observable<User[]>=this.http.get<User[]>(url);
       return observable;
   }

   removeUser(id:number):Observable<void>{
       let url=this.baseUrl+"/delete/"+id;
       let observable:Observable<void>=this.http.delete<void>(url);
       return observable;
   }

}
