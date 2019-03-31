import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; 
//import { Observable } from 'rxjs/Observable';
import { Observable  } from 'rxjs';


@Injectable()
export class FileService {
  constructor(private http: HttpClient){ }

  public getJSON(): Observable<BusReportModel> {
      return this.http.get<BusReportModel>("./assets/json/bus-services-data.json");
  }

}
