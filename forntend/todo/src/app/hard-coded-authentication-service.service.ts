import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAuthenticationServiceService {

  constructor() { }
  authenticate(username:string,password:string){
    if(password === 'dummy' && username === 'abdo'){
      sessionStorage.setItem('authenticatedUser',username);
      return true;
    }else return false;
  }

  isLogedIn(){
    let user=sessionStorage.getItem('authenticatedUser');
  }
}
