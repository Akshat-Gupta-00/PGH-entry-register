import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  login(email:any,password:any) {
    if (email.value == '') {
      alert('Please Enter Email');

    }else{


      if (password == '') {
        alert('Please Entr Password');
      
      }else {

        this.signin(email,password)}
     
    }

  }

  signin(email:string,password:string) {
    const user: string = 'asg';
    const pass: string = 'pass';
    if (email === user) {

      if (password === pass) {
        this.router.navigate(['/view'])

      } else {
        alert("enter valid Passsword")
        this.router.navigate([''])
      }

    }else
    alert("enter valid Username")
  }
}
