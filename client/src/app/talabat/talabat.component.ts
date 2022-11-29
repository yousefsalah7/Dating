import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Khedma } from '../khedma';
import { KhedmaService } from '../khedma.service';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-talabat',
  templateUrl: './talabat.component.html',
  styleUrls: ['./talabat.component.css']
})
export class TalabatComponent implements OnInit {

talabat: MatTableDataSource<Khedma>;

displayedColumns: any[]=['firstName','lastName','email','mobile','nationalId','currentState','address','type','receiveNewsLetters','Action'];
 @ViewChild(MatPaginator) paginator :MatPaginator;
constructor(private http :HttpClient) { }

  ngOnInit(): void {

    this.http.get("https://localhost:7294/khedma").subscribe({
      next:(res:Khedma[])=>{
        this.talabat=new MatTableDataSource<Khedma>(res);
        this.talabat.paginator=this.paginator;
        console.log(res)
      },
      error:(err)=>{console.log(err)}
    })
  }

  OnPassClick(x:Khedma)
  {
    x.currentState="Under Police review"
    this.http.put("https://localhost:7294/Khedma/UpdateState",x).subscribe(
      {
        next:(res)=>{console.log(res)},
        error:(err)=>{console.log(err)}
      }
    )
  }
  OnRejictClick(x:Khedma)
  {
    x.currentState="Rejected"
    this.http.put("https://localhost:7294/Khedma/UpdateState",x).subscribe(
      {
        next:(res)=>{console.log(res)},
        error:(err)=>{console.log(err)}
      }
    )
  }
}
