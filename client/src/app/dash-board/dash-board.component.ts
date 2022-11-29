import { Component, OnInit } from '@angular/core';
import { SignOrRegisterComponent } from '../sign-or-register/sign-or-register.component';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var user =JSON.parse(sessionStorage.getItem("userdata"));
    console.log(user)
  }

}
