import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Http, Headers, RequestOptions } from '@angular/http';
// import 'rxjs/add/operator/map';
import { Storage } from '@ionic/Storage';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  private baseApiPath = "http://localhost/ochapa/painel/";

  constructor(private http: HttpClient, private storage: Storage) { }

  getCompanies(){
    return this.http.get<Array<any>>(this.baseApiPath + "api/fetch_companies/");
  }
}
