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
    console.log(params)
    return this._httpClient.get<Ticket[]>(this.URL + 'tickets', { params })
  }

  convertAnyToHttp(params: {}): { [param: string]: string | string[]; }{
    params = Object.assign({}, params);
    Object.keys(params).forEach(key => {
      if(typeof params[key] === 'object'){
        params[key] = JSON.stringify(params[key]);
      } else if(!params[key]) {
        delete params[key];
      }
    });
    return params;
  }
}
