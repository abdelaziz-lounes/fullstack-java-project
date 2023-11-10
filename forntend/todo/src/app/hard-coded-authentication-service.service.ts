import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAuthenticationServiceService {

  constructor() { }
  authenticate(username:String,password:String){
    return username === "abdo" && password === 'dummy';
  }
}
