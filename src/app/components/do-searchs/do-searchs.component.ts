import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { KeywordScraperService } from '../../services/keyword-scraper.service';
import keywords from '../../../assets/keywords.json';

@Component({
  selector: 'app-do-searchs',
  templateUrl: './do-searchs.component.html',
  styleUrls: ['./do-searchs.component.scss'],
  providers: [ KeywordScraperService ]
})
export class DoSearchsComponent implements OnInit {
  keywords:any;
  requiredPoints: number = 120;
  pointsPerSearch: number = 3;
  totalRequiredSearches: number = this.requiredPoints / this.pointsPerSearch;
  intervalTime: number = 1000; // adjust this parameter to change window spawn rate

  constructor(private keywordScraper: KeywordScraperService) { }

  ngOnInit() {
    this.keywords = keywords.keywords;
    // this.keywordScraper.getRandomKeywords().subscribe( res => {
    //   console.log(res)
    //   this.keywords = res;
    // });

  }
  doMobileSearch() {
    this.intervalTime = 100;
    this.requiredPoints = 200;
    this.doSearch();
  }
  doSearch() {
    let count = 0;
  	let windows = [];
  	const max = this.totalRequiredSearches; //keywords.length; can be adjusted to only search for the maximum number you need
  	const intervalTime = this.intervalTime;
  	const waitToKillTime = (max * intervalTime) + 1000;

  	let myInterval = setInterval(() => {
  		if(count < max) {
        const randomNumber = Math.floor((Math.random() * (this.keywords.length-1)) + 1);
  			let newWindow = window.open(`https://www.bing.com/search?q=+${this.keywords[randomNumber]}`,'_blank');
  			windows.push(newWindow);
  	    } else {
  	    	clearInterval(myInterval);
  	    }
  		count++;

  	}, intervalTime);

  	//wait for all windows to be added before closing them
  	setTimeout(() => {
  		windows.forEach(windowItem => {
  			windowItem.close();
  		});
  	}, waitToKillTime);
  }
}
