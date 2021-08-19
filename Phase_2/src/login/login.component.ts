import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { PortfolioComponent } from '../portfolio/portfolio.component';
//import { FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

       email:string='';
       password:string='';
       message:string=''
       users:User[]=[];
  // loginRef = new FormGroup({
  //   username:new FormControl(),
  //   pass: new FormControl()

  // });
  // msg:string=" "


  constructor(public router:Router) { 
   
  }

  ngOnInit(): void {

  }



  checkUser(){


    this.users=JSON.parse(window.sessionStorage.getItem("users")|| '{}');
 for(let user of this.users){
  if(this.email==user.email && this.password==user.password){
    this.router.navigate(["portfolio"]);
  }else{
    this.message="Invalid Credentials. Please, try again."
  }
 }
    
  }
// console.log(this.email);
// console.log(this.password);
// }
}

interface User{
  firstname:string;
  lastname:string;
  email:string;
  password:string;
}