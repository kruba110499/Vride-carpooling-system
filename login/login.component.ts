import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../serviceapi.service.spec';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'admin'
   password = 'admin'
  constructor() { private router : Router , private hardcodedAuthenticationService:HardcodedAuthenticationService}

  ngOnInit(): void {
  }
  handleLogin()
  {
    //if(this.username ==='agilesh' && this.password ==='dummy')
    if(this.hardcodedAuthenticationService.authenticate(this.username,this.password))
    {
      this.router.navigate(['welcome',this.username])
      
    }
    else
    {
     this.router.navigate(['/home'])
    }
    
  }
