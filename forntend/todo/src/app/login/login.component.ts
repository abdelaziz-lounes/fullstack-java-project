import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

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

  constructor(private router:Router) {
  }
  ngOnInit(){}
  handleLogin() {
    // console.log(this.username);
    if(this.username==="abdo" && this.password === 'dummy') {
      //Redirect to Welcome Page
      this.router.navigate(['welcome', this.username]).then(r =>this.invalidLogin=false );
    } else {
      this.invalidLogin = true
    }
  }
}
