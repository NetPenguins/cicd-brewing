import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  get(query: string){
    let q = query.length === 5
    ? `https://api.openbrewerydb.org/breweries?by_postal=${query}` 
    : `https://api.openbrewerydb.org/breweries?per_page=50`;
    return this.http.get(q)
  }
  getState(query: string){
    query = query.replace(' ', '_');
    return this.http.get(`https://api.openbrewerydb.org/breweries?by_state=${query}`)
  }
}
