import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HoroscopoService {
  constructor(private _http: HttpClient) {}

  public getHoroscopo(sign: string, day: string) {
    const httpOptions = {
      params: new HttpParams().set('sign', sign).set('day', day),
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com',
        'X-RapidAPI-Key': '4061448595msh80e8de79ae5fadcp12a7c0jsn48fe1ff1e58c',
      }),
    };

    return this._http.post(
      'https://sameer-kumar-aztro-v1.p.rapidapi.com/',
      null,
      httpOptions
    );
  }
}
