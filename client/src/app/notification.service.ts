import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Khedma } from './khedma';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notifications : number;
  constructor(private httpClient :HttpClient) { }

  // getNotification(){
  //   this.httpClient.get("https://localhost:7294/khedma").subscribe({
  //     next:(res:Khedma[])=>{
  //       this.notifications=res;

  //       console.log(res)
  //     },
  //     error:(err)=>{console.log(err)}
  //   })
  //   return this.notifications
  // }
}
