import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,HttpClientModule
    ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: login;
  constructor(private http: HttpClient,private router: Router) {
    this.loginObj = new login();


  }

  onLogin() {
    

    this.http.post(' https://freeapi.miniprojectideas.com/api/User/Login', this.loginObj).subscribe((res:any)=> {
      if (res.result) {
        alert("login succes")
      } else {
  
      alert("res.message")
    }

  })
}
}

export class login {

  EmailId: string;
  Password: string;
  constructor() {
    this.EmailId = '',
      this.Password = '';

  }
}
