import { JsonPipe } from '@angular/common';
import { HttpClient,HttpBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Khedma } from './khedma';

@Injectable({
  providedIn: 'root'
})
export class KhedmaService {


  constructor(private http :HttpClient ,private httpBackend: HttpBackend) { }

  addTalap(newkhedma: Khedma): Observable<Khedma> {

    let ss={
      "projectID": 2,
      "projectName": "COVID-19 Tracker",
      "dateOfStart": "2020-03-15",
      "teamSize": 17,
      "Active": false,
      "status": "Support",
      "clientLocationID": 2,
      "clientLocation": {
          "clientLocationID": 2,
          "clientLocationName": "London"
      }
  };

    console.log(newkhedma)
   return this.http.get<Khedma>('https://localhost:7294/WeatherForecast');

  }
}
