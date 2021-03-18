import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarResoponseModel } from 'src/app/models/carResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44325/api/cars/getcardetails";

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<CarResoponseModel> {
    return this.httpClient.get<CarResoponseModel>(this.apiUrl)
  }
}
