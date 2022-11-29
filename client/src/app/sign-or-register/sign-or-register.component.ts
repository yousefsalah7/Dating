import { HttpClient } from '@angular/common/http';
import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-sign-or-register',
  templateUrl: './sign-or-register.component.html',
  styleUrls: ['./sign-or-register.component.css']
})
export class SignOrRegisterComponent implements OnInit {

  signUpForm :FormGroup;
  LoginForm :FormGroup;
  ress:User ;
  username:User ;

  constructor(private http : HttpClient,private router :Router) { }

  ngOnInit(): void {
    this.LoginForm= new FormGroup(
      {
        UserName :new FormControl,
        passwd:new FormControl
      }
    )
    this.signUpForm = new FormGroup(
      {
          UserName:new FormControl,
          passwd: new FormControl,
          confirmpasswd: new FormControl,
          Email :new FormControl,
          role :new FormControl("User"),
          company :new FormControl,
          lastname :new FormControl,
          firstname :new FormControl,
    }
    )
  }

  OnRegisterClick()
  {
    console.log(this.signUpForm.value);
    this.http.post("https://localhost:7294/addUser",this.signUpForm.value).subscribe({
      next:(res)=>{

        console.log(res)},
      error:(err)=>{console.log(err)}
    })

  }

  Onloginclick()
  {
    this.username = this.LoginForm.value.UserName;
    console.log(this.LoginForm.value.passwd)
    console.log(this.username)
    this.http.get("https://localhost:7294/user?user="+this.username).subscribe(
      {
        next:(res :User)=>{
         this.ress = res;
          console.log(res)
      console.log("this is respone obj " + res[0].passwd)
          if (res[0].passwd== this.LoginForm.value.passwd) {
            sessionStorage.setItem("userdata",JSON.stringify(res[0]) )
            this.router.navigateByUrl("DashBoard");
          }
        },
        error:(err)=>{console.log(err)}
      }
    )

    // if (this.ress.passwd == this.LoginForm.value.passwd ) {
    //   this.router.navigateByUrl("DashBoard")
    //     }
  }
}
