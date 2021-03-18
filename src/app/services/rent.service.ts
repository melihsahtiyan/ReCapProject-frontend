import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentResoponseModel } from '../models/rentResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentService {

  apiUrl = "https://localhost:44325/api/rents/getallrentdetails";

  constructor(private httpClient:HttpClient) { }

  getRents():Observable<RentResoponseModel>{
    return this.httpClient.get<RentResoponseModel>(this.apiUrl)
  }

}
