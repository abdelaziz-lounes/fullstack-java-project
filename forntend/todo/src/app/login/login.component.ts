import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HardCodedAuthenticationServiceService} from "../hard-coded-authentication-service.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  username = 'abdo'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  constructor(
    private router:Router,
    private hardCodedAuthenticationService:HardCodedAuthenticationServiceService
              ) {}
  ngOnInit(){}
  handleLogin() {
    // console.log(this.username);
    if(this.hardCodedAuthenticationService.authenticate(this.username,this.password)) {
      //Redirect to Welcome Page
      this.router.navigate(['welcome', this.username]).then(r =>this.invalidLogin=false );
    } else {
      this.invalidLogin = true
    }
  }
}
