import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Khedma } from '../khedma';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  last :Khedma = new Khedma;

  constructor(private http :HttpClient) { }

  ngOnInit(): void {

    this.http.get("https://localhost:7294/last").subscribe(
      {

        next:(res:Khedma)=>{
          console.log(res);
          this.last=res;

        },
        error:(err)=>{console.log(err)}
      }
    )
      console.log(this.last)
  }

}
