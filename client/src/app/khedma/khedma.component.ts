import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { MatSnackBar, SimpleSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Khedma } from '../khedma';
import { KhedmaService } from '../khedma.service';
import { NotificationService } from '../notification.service';
import { AppComponent } from '../app.component';
import { DialogComponent } from '../dialog/dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-khedma',
  templateUrl: './khedma.component.html',
  styleUrls: ['./khedma.component.css']
})
export class KhedmaComponent implements OnInit {

  newKhedma :Khedma =new Khedma();
  signUpForm :FormGroup;
  countries: any[];
  genders = ["male", "female"];
  @ViewChild("newForm") newForm: NgForm ;
  @Input("currentState") currentState ="Pending"
  constructor(public dialog: MatDialog,private router: Router,private http:HttpClient,private _snackBar: MatSnackBar,private noti :NotificationService,private app :AppComponent) { }

  openDialog() {
    this.dialog.open(DialogComponent);
  }
  openSnackBar(message: string, action: string) {

      this._snackBar.open(message, action).onAction().subscribe(() => {
      console.log('The snackbar action was triggered!');
      this.router.navigateByUrl("/talabat")
    });
  }
  ngOnInit(): void {
    this.signUpForm=new FormGroup(
      {

        firstName: new FormControl,
        lastName :new FormControl,
        email : new FormControl,
        mobile:new FormControl,
        nationalId:new FormControl,
        address:new FormControl,
        currentState:new FormControl("pendeing"),
        type :new FormControl,
        countryID: new FormControl(null),
        receiveNewsLetters: new FormControl(null),
      }
    )
  }


  OnSubmitClick(){
    console.log(this.signUpForm.value)
    this.http.post('https://localhost:7294/Khedma/AddKhedma',this.signUpForm.value).subscribe({
      next:(res)=>{console.log(res);
      this.app.ngOnInit();
      // this.router.navigateByUrl("/talabat")
      }
    });
  //   this.router.navigateByUrl('root', { skipLocationChange: false }).then(() => {
  //     this.router.navigate(['khedma']);
  // });
  }
}
