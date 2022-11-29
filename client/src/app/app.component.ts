import { HttpClient } from '@angular/common/http';
import { Component, SimpleChanges } from '@angular/core';
import { async } from 'rxjs';
import { Khedma } from './khedma';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Dating App';
  notifications : number;
  Users:any;
  /**
   *
   */
  constructor(private httpClient :HttpClient, private notifici :NotificationService ){}
  ngOnInit()  : void  {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.httpClient.get("https://localhost:5001/users").subscribe(
    //   {
    //     next:(res)=>{
    //         this.Users=res;
    //     },
    //     error:(err)=>{console.log(err)}
    //   }
    // )
    // this.notifici.getNotification();
    this.httpClient.get("https://localhost:7294/khedma").subscribe({
      next:(res:Khedma[])=>{
        this.notifications=res.length;

        console.log(res)
      },
      error:(err)=>{console.log(err)}
    })
    this.notifici.notifications=this.notifications
    console.log(this.notifications)
  }
}
