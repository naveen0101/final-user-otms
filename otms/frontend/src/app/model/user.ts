export class User{
    userId:number;
    userName:string;
    password:string;
    userRole:string;

    constructor(userName : string, password:string, userRole:string){
      this.userName=userName;
      this.password=password;
      this.userRole=userRole;
    }
    getId():number{
      return this.userId;
    }
  
    getUsername():string{
      return this.userName;
    }
  
    getPassword():string{
      return this.password;
    }
  
    getRole():string{
      return this.userRole;
    }

  }
  