import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TraductorService {
  constructor(private _http: HttpClient) {}

  public transtlateText(
    source: string,
    target: string,
    text: string
  ): Observable<any> {
    const httpOptions = {
      /* params: new HttpParams()
        .set('source_language', 'en')
        .set('target_language', 'es')
        .set('text', 'what is your name?'),*/
      headers: new HttpHeaders({
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com',
        'X-RapidAPI-Key': '4061448595msh80e8de79ae5fadcp12a7c0jsn48fe1ff1e58c',
      }),
    };
    const body = new HttpParams()
      .set('source_language', source)
      .set('target_language', target)
      .set('text', text);
    return this._http.post(
      'https://text-translator2.p.rapidapi.com/translate',
      body,
      httpOptions
    );
  }
}
