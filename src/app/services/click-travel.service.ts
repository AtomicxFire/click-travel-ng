import { Destination } from './../interfaces/destination';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClickTravelService {

  private readonly URL = environment.apiUrl

  constructor(private _httpClient: HttpClient) { }

  getDestination() {
    return this._httpClient.get<Destination[]>(this.URL + 'destinations/');
  }
}
