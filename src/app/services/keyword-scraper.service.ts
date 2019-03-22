import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class KeywordScraperService {

  constructor(private api: ApiService) { }

  getPageToScrape() {
    const url:string = 'https://www.mondovo.com/keywords/'; //https://en.wikipedia.org/wiki/Something'
    return this.api.get(url);
  }
}
