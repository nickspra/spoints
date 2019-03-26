import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class KeywordScraperService {
  baseUrl: string = 'https://www.randomlists.com';

  constructor(private api: ApiService) { }

  // getPageToScrape() {
  //   const url:string = 'https://www.mondovo.com/keywords/'; //https://en.wikipedia.org/wiki/Something'
  //   return this.api.get(url);
  // }
  getRandomKeywords () {
      const url = `${this.baseUrl}/data/words.json`;
      return this.api.get(url);
  }
}
