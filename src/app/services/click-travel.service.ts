import { Ticket } from './../interfaces/tickets';
import { Destination } from './../interfaces/destination';
import { HttpClient, HttpParams, HttpUrlEncodingCodec } from '@angular/common/http';
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

  getTickets(destinationCode: string) {
    let params = new HttpParams()
    params = params.set('filter', '{"where":{ "to":"' + destinationCode + '"}}')
    return this._httpClient.get<Ticket[]>(this.URL + 'tickets', { params })
  }

}
