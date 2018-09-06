import { RI } from "./ri";

export class User {
  userId = 0; //primary key  
  username = '';
    password = '';
    firstName = '';
    lastName = '';
    email = '';
    role = '';  
    reinbursement: RI[] = [];  

  constructor(userId?: number, username?: string, password?: string,
    firstName? : string,  lastName? : string , email?:string , role?: string, reinbursement?: RI[]) {

    userId && (this.userId = userId);
    username && (this.username = username);
    password && (this.password = password);
    firstName && (this.firstName = firstName);
    lastName && (this.lastName = lastName);
    email && (this.email = email);
    role && (this.role = role);
    reinbursement && (this.reinbursement = reinbursement);
  }
}