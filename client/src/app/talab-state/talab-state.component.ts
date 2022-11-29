import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-talab-state',
  templateUrl: './talab-state.component.html',
  styleUrls: ['./talab-state.component.css']
})
export class TalabStateComponent implements OnInit {

  Rqm :number;
  Esm :string;
  currunt :any;
  constructor(private httpclient : HttpClient) { }

  ngOnInit(): void {
  }

  Ist3lam()
  {
    this.httpclient.get("https://localhost:7294/khedma/"+this.Rqm).subscribe(
      {
        next:(res)=>{

            console.log(res)
            this.currunt=res;
        },

        error:(err)=>{console.log(err)}
      }
    )
  }

}
