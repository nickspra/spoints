import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
    let headers = new HttpHeaders({
      'Accept':'text/html'
    });
  }

  get(url: string, params?: string) {
    let enUrl = encodeURIComponent(url);
    return this.http.get('http://www.whateverorigin.org/get?url=${enUrl}');
  }
}
