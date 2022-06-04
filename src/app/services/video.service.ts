import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class VideoService {
  constructor(private _http: HttpClient) {}

  public searchVideo(query: string): Observable<any> {
    const httpOptions = {
      params: new HttpParams().set('query', query),
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'simple-youtube-search.p.rapidapi.com',
        'X-RapidAPI-Key': '73b25607c1msh11892e103645f02p17f7a9jsn304b654f98c6',
      }),
    };

    return this._http.get(
      'https://simple-youtube-search.p.rapidapi.com/search',
      httpOptions
    );
  }
}
