(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_do_searchs_do_searchs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/do-searchs/do-searchs.component */ "./src/app/components/do-searchs/do-searchs.component.ts");




var routes = [
    { path: '', component: _components_do_searchs_do_searchs_component__WEBPACK_IMPORTED_MODULE_3__["DoSearchsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'the-search-for-spoints';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_do_searchs_do_searchs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/do-searchs/do-searchs.component */ "./src/app/components/do-searchs/do-searchs.component.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");








// services

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_do_searchs_do_searchs_component__WEBPACK_IMPORTED_MODULE_7__["DoSearchsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            providers: [_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/do-searchs/do-searchs.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/do-searchs/do-searchs.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" (click)=\"doSearch()\">Do Search</button>\r\n\r\n<button type=\"button\" (click)=\"doMobileSearch()\" class=\"btn\" style=\"width: 100%;height: 100px; margin-top:70px;\">Do Mobile Search</button>\r\n"

/***/ }),

/***/ "./src/app/components/do-searchs/do-searchs.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/do-searchs/do-searchs.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9kby1zZWFyY2hzL2RvLXNlYXJjaHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/do-searchs/do-searchs.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/do-searchs/do-searchs.component.ts ***!
  \***************************************************************/
/*! exports provided: DoSearchsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoSearchsComponent", function() { return DoSearchsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_keyword_scraper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/keyword-scraper.service */ "./src/app/services/keyword-scraper.service.ts");
/* harmony import */ var _assets_keywords_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/keywords.json */ "./src/assets/keywords.json");
var _assets_keywords_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/keywords.json */ "./src/assets/keywords.json", 1);




var DoSearchsComponent = /** @class */ (function () {
    function DoSearchsComponent(keywordScraper) {
        this.keywordScraper = keywordScraper;
        this.requiredPoints = 320;
        this.pointsPerSearch = 3;
        this.totalRequiredSearches = this.requiredPoints / this.pointsPerSearch;
        this.intervalTime = 100; // adjust this parameter to change window spawn rate
    }
    DoSearchsComponent.prototype.ngOnInit = function () {
        this.keywords = _assets_keywords_json__WEBPACK_IMPORTED_MODULE_3__.keywords;
        // this.keywordScraper.getRandomKeywords().subscribe( res => {
        //   console.log(res)
        //   this.keywords = res;
        // });
    };
    DoSearchsComponent.prototype.doMobileSearch = function () {
        this.intervalTime = 100;
        this.requiredPoints = 200;
        this.doSearch();
    };
    DoSearchsComponent.prototype.doSearch = function () {
        var _this = this;
        var count = 0;
        var windows = [];
        var max = this.totalRequiredSearches; //keywords.length; can be adjusted to only search for the maximum number you need
        var intervalTime = this.intervalTime;
        var waitToKillTime = (max * intervalTime) + 1000;
        var myInterval = setInterval(function () {
            if (count < max) {
                var randomNumber = Math.floor((Math.random() * (_this.keywords.length - 1)) + 1);
                var newWindow = window.open("https://www.bing.com/search?q=+" + _this.keywords[randomNumber], '_blank');
                windows.push(newWindow);
            }
            else {
                clearInterval(myInterval);
            }
            count++;
        }, intervalTime);
        //wait for all windows to be added before closing them
        setTimeout(function () {
            windows.forEach(function (windowItem) {
                windowItem.close();
            });
        }, waitToKillTime);
    };
    DoSearchsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-do-searchs',
            template: __webpack_require__(/*! ./do-searchs.component.html */ "./src/app/components/do-searchs/do-searchs.component.html"),
            providers: [_services_keyword_scraper_service__WEBPACK_IMPORTED_MODULE_2__["KeywordScraperService"]],
            styles: [__webpack_require__(/*! ./do-searchs.component.scss */ "./src/app/components/do-searchs/do-searchs.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_keyword_scraper_service__WEBPACK_IMPORTED_MODULE_2__["KeywordScraperService"]])
    ], DoSearchsComponent);
    return DoSearchsComponent;
}());



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Accept': 'text/html'
        });
    }
    ApiService.prototype.get = function (url, params) {
        // let enUrl = encodeURIComponent(url);
        return this.http.get(url);
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/services/keyword-scraper.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/keyword-scraper.service.ts ***!
  \*****************************************************/
/*! exports provided: KeywordScraperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeywordScraperService", function() { return KeywordScraperService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");



var KeywordScraperService = /** @class */ (function () {
    function KeywordScraperService(api) {
        this.api = api;
        this.baseUrl = 'https://www.randomlists.com';
    }
    // getPageToScrape() {
    //   const url:string = 'https://www.mondovo.com/keywords/'; //https://en.wikipedia.org/wiki/Something'
    //   return this.api.get(url);
    // }
    KeywordScraperService.prototype.getRandomKeywords = function () {
        var url = this.baseUrl + "/data/words.json";
        return this.api.get(url);
    };
    KeywordScraperService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], KeywordScraperService);
    return KeywordScraperService;
}());



/***/ }),

/***/ "./src/assets/keywords.json":
/*!**********************************!*\
  !*** ./src/assets/keywords.json ***!
  \**********************************/
/*! exports provided: keywords, default */
/***/ (function(module) {

module.exports = {"keywords":["game game","no internet games","internet games","the internet games","games new games","game kid game","internet free games","games play games","play games play games","games all games","free games free games","game the game","games online games","online games online games","online games in internet","internet games online","internet game online","games cool games","fun internet games","games free online games","internet games play","games to play on the internet","internet games archive","internet games best","internet connection games","internet spades games","internet games to download","internet games for kids","internet games download","internet games free","internet card games hearts","internet games multiplayer","internet games to play","internet pokemon games","internet drinking games","internet games free play","internet card games","internet games shooting","internet games car database","internet games database","internet games hearts","cool internet games","good internet games","play games free online games","internet games for 2 players","no internet games iphone","2 player internet games","internet card games solitaire","internet games 2 player","internet mahjong games","internet war games","internet bridge games","internet explorer games","internet games chess","best online games in internet","how to download internet games","internet cafe games near me","internet games free download","internet games car racing","best internet games online","internet less games","internet sweepstakes games","internet games to play with friends","internet games to play now","internet games spider solitaire","internet archive video games","internet cafe games online","internet nfl games","internet games rpg","rpg internet games","free games play free online games","internet games addiction","internet safety games for middle school students","do you need internet to install games on xbox one","internet backgammon games free","internet safety games ks2","no internet games download","free internet games no download","internet games for ipad","internet word games","internet trivia games","internet quiz games","internet puzzle games","internet pool games","internet golf games","internet browser games","internet games backgammon","internet magic games","internet games to play when bored","no internet games responded to the query","how to play internet games","internet games for toddlers","internet video games database","internet cafe games list","online games internet usage","no internet games android","internet casino games free","internet zombie games","internet barbie games","internet mario games","internet board games","internet games sites","internet co op games","facebook","youtube","google","gmail","hotmail","amazon","translator","facebook login","yahoo","google translate","yahoomail","google maps","ebay","whatsapp","instagram","traductor","weather","redtube","netflix","outlook","pokemon go","twitter","fahrenheit","olx","craigslist","msn","grammes","beeg","youtube mp3","snapchat","you","messenger","news","ali express","walmart","bbc news","google trad","clash of clans","linkedin","tubidy","pinterest","vminecraft","glob","whatsapp web","mincraft","ikea","live score","cnn","cable news network","e okul","youtube to mp3","olympics","auol","uolo","speed test","speedometer test","minecraft","traduttore","game","games","paypal","tiempos","daily mail","crikbuzz","sahibinden","MercadoLibre","ok google","libero mail","milliyet","bild","marca","marcar","google tradutor","euro 2016","google onedrive","ryanair","traduttor","myn","skype","aleg","espn","ebay kleinanzeigen","factory automation","football association","mail","mailen","mails","allegro","convertidos","wp","flipkart","home depot","home-depot","hotel","hotelaria","restaurant","restauration","fox news","iphone 7","chaturbate","ebay uk","national basketball association","nba","g drive","google drive","bet365","pokemom","after service","akciova spolecnost","dropbox","bed 365","bookers","booking","zalando","oranges","calcu","omegle","indeed","calculator","calculators","mp3","pandora","target","zara","airbnb","best buy","brazzers","irctc","cricbuzz","uc browser","satta matka","tubemate","traductor google","juegos","hotels","putlocker","donald trump","patriot ordnance factory","pof","restaurants","bbc sports","wells fargo","pirate bay","tumblr","office 365","office365","youtube converter","goggle docs","billionaire boys club","bbc","wikipedia","el mundo","traduzir","cam4","leboncoin","pizza hut","pizzahut deals","santander","hentai","el pais","subway surfers","brazzer","brazzers","roblox","soundcloud","bank of america","google play","gum tree","spotify","dominos","interia","goggle chrome","staeam","steam","international mathematics olympiad","playstore","apple","groupon","itube.com","amazon uk","amazon united kingdom","cricinfo","argos","atgis","augos","facebook lite","adna klasnik","odnoklassniki","imdb","aol mail","aol mailbox","sports","man united","justin bieber","state bank india online","american online inc","sbi online","google docs","backpages","lowes","cosco","aol","bing","wwe","anti virus","dich","hdfc netbanking","auto trader","candy crush","perfect girl","expedia","vodafone","adidas","kooora","trivago","liber","nike","viber","google chrome","chrome","chromed","trip advisor","automated surface observing system","whatsapp messenger","line","macys","skyscanner","facebook en espa ol","decathlon","shareit","snap deal","snapdeal","24h","internet movie database","banco de venezuela","reddit","icloud","uber","trump","game of thrones","aright move","peppa pig","deadpool","national football league","nfl","samsung","world star hip hop","aloewishes","anime goog","mp3xd","lotto","meenakshisundaram","metros","monsieur","alvyda","american airlines","ansaa","flashscore","real madrid","itunes","accuweather","yandex","youtube downloader","capital one","dailymotion","hsbc","email","pages jaunes","google earth","mcdonalds","asck","clean master","amazon prime","ask","imo","usps tracking","zillows","kohls","paytm","gta","costco","facebook messenger","happy wheels","kim kardashian","toys r us","cricket scoreboard","cricket scores","traducir","mercado libre","mexican restaurants near me","nfl scores","dravi","star wars","google scholar","cooi math gams","cool math game","solitaire","afton bladet","google news","google images","tinder","chase","goggle images","caf","iltalehti","vpn","goggle news","iphone 6s","selena gomez","mp3 converter","aresanel","driver","suicide squad","mobile","mobili","wallpapers","wc","forever 21","powerball","ticketmaster","web whatsapp","a erocam aor omes","asrnel","bbc weather","hotmaillogin","corrosion of conformity","windows 10","easyjet","hot","litre","mapquest","vn express","kizi","youtube videos","bradesco","lol","clarin","photo edit","photography editing","trenitalia","candy crush saga","fanatik","mappy","b6 12","meteos","celsius","firefox","grand theft auto","greater toronto area","kik","next","victoria secret","teamviewer","etsy","bla bla car","indian railway","lazada","pnr-status","hotstar","bidmate","jogos","mfacebook","la caixa","t-mobile","hillary clinton","restaurant near me","ymz","tmz","Ariana Grande","sky news","mp3 juice","ig","cool math","the walking dead","ilta-sanomat","arsenal","asana","barca","barcelona","barcelonistas","sky sports","ultimate fighting championship","taylor swift","banisteriopsis","general motors","genetically modified","gm","le monde","web","kurir","chased","prince","123movies","kayak","b lic","minion","music downloader","youtube music","edmodo","cars","hola","att","happy birthday","dee","iphone 6","wish","papa johns","sat","major league baseball","mlb","australian broadcasting corporation","index","indexer","credit karma","snap tube","aloha tube","banco estado","kickass","aphotoshop","abc","fifa 16","db","deutsche bahn","iphone 5s","actualitees","messi","kylie jenner","utorrent","image","terra","google classrooms","rediffmail","torrents","extra torrent","xdj","starbucks","movies","matka","wordreference","anime","sarkari result","retrica","4shared","kahoot","habe","ups track","9 gag","antozone","auroson","auroxone","gazeteler","tesco","bank2u","downloads","mango","ok","qvc","unicredit","banco bilbao vizcaya argentaria","bbvas","horoscope","24 sata","baqnesco","credit agricole","bed bath and beyond","buienradar","old navy","arefour","dictionaries","dictionary","foot locker","footlocker","j.c. penney","pnr status","amerikano","aricanas","gamestop","nordstrom","bookmyshow","liverpool","rambler","major league baseball scores","mlb scores","nba scores","the pirate bay","golden state warriors","onedrive","cheap flights","vertalen","cheapest flights","citi bank","outlook 365","chase online","watch series","david bowie","google flights","bbc football","united airlines","bernie sanders","testing","tests","toyota","webmail","ajva","fitbit","java","american express","ivanovic","television guide","tv guide","cristiano ronaldo","rihanna","southwest airlines","sw airlines","java -djava.security.policy","oppure","ovvero","spider man","online sbi","bmw","music","ynet","dragon ball super","iphones","anerucab exoress","verizon","icicinet banking","roku","popcorn time","delfi","sabah","hello","eme","winrar","youtubes music","n","united states post office","east","premier league","piano","skies","sky","mp3 downloader","asda","geometry dash","foot","football","flashlight","mobile de","tubegalore","photoshop","ps4","360 security","thesaurus","ups","uninterrupted power supply","adobe reader","subway","league of legends","movistar","guardian","guardians","fedex","gmail login","applock","naruto","apps","grand theft auto 5","o2","anemei","currency converter","emoji","walgreen","john lewis","milf","wechat","download","moto gp","sears","autozone","huffington post","telecinco","chatro","chatroulet","la repubblica","photo grid","animal jam","apple store","avitop","palmeiras","aldis","cinemark","new look","times of india","truecaller","antera vasna","fnac","live cricket score","live cricket scoreboard","program tv","netbanking","conor mcgregor","comcast","mail online","halifax","adobe flash player","coco","pubmed","honda","lottery","plenty of fish","a bola","bee bee","expressing","expression","lloyds","amel","amelie","adele","frozen","people","video one","hyundai","spiegel","captain america civil war","kendall jenner","national hockey league","federation internationale de football association","fifa","natwest","beyonce","dragon city","drudge report","iphone se","fandango","google-analytics","bod","harry potter","champions league","us bank","microsoft","mundo deportivo","fc barcelona","hay day","chelsea","le figaro","mp3 music downloading","xbox one","ford","volkswagen","angelina jolie","leos","el confidencial","michael kors","translate google","british airways","eurosport","afipo","la nacion","mega","warrior","jota","record","b anco do brasil","fallout 4","nicki minaj","pac-man","mercedes","rojadirecta","slither","societe generale","avob","avon","mia khalifa","one piece","fifa 15","booking.com","jav","ancosantander","chromecast","lego","cartolas","telegram","radio","myfreecams","shazam","sudoku","asds","jeux","urban dictionary","deezer","marks and spencer","air france","cars game","staple","video downloader","acura games","camera 360","car g","car game","la poste","vlc","abast","airasia","mahjong","paris","pdf","portable document format","temple run 2","avast","avsst","dainikbhaskar","fedex track","fedex tracking","whatsapp download","9apps","k mart","launcher","otto","laredoute","serie a","conforama","debenhams","kmart","white pages","whitepages","meetic","cinepolis","lojas americanas","redbox","bershka","garanti","mx player","tokopedia","zalo","viamichelin","correios","tredyol","cargams","traductor de google","yahoo finance","johnny depp","leonardo dicaprio","ok cupid","buzzfeed","bancoombia","pizza","george boole","corriere","expressen","anime flv","aprint","earth day","periscope","spanish to english","xfinity","rezultati","asprint","william hill","william shakespeare","nordea","sprint","scholar","scholarship","barclay","barclays","ask.fm","national lottery","tiscali","cub","el comercio","isis","samsung galaxy s7","audi","blogger","el universal","the revenant","quot","quotes","rio 2016","google analytics","halloween","miniclip","western union","katy perry","one direction","boo hoo","focus","neymar","banco provincial","yelp","delta","drake","film streaming","nissan","batman","hoverboard","quizlet","snap","yahoo news","british telecom","brad pitt","copa america","juventus","sonic","bekmen","tesla","avianca","google calendar","verizon wireless","hangout","jworg","barbie","bundesliga","chatting","moneycontrol","television online","meme","photo","free games","free gaming","freeware games","need for speed","cricket","harley quinn","provincial","michael jackson","tango","vivo","goggle mail","cartoon network","paris saint-germain","burger king","camera","comuniazo","primark","angry birds","alibaba","boot","global positioning system","office depot","batman vs superman","dragon ball z","party city","banki","adblock","euro","imgur","akinator","curries","curry","flash player","google mail","opera","piano tiles","planetromeo","banco do brasil","kfc","bancosantander chile","keyboard","pacman","8ball pool","bnp","british national party","el corte ingles","f1","zedge","app lock","applications lock","jennifer lawrence","literot","literotica","louis vuitton","river island","bluestacks","galinha pintadinha","gossip","margot robbie","miley cyrus","barnes and noble","gitt","make my trip","michael","pegasus","plants vs zombies","hobby lobby","waze","canadian tire","e-mag","american eagle","gta san andreas","dubsmash","falabella","gazeta","stradivarius","uc mini","urban outfitters","zing","extras","casto","rotten tomatoes","stephen curry","club penguin","mlb standings","cat","kanye west","cici","scratch","zeta","national rail","train running status","vikings","time","free mobile","adobe","aback","abaft","abandoned","abashed","aberrant","abhorrent","abiding","abject","ablaze","able","abnormal","aboard","aboriginal","abortive","abounding","abrasive","abrupt","absent","absorbed","absorbing","abstracted","absurd","abundant","abusive","acceptable","accessible","accidental","accurate","acid","acidic","acoustic","acrid","actually","ad hoc","adamant","adaptable","addicted","adhesive","adjoining","adorable","adventurous","afraid","aggressive","agonizing","agreeable","ahead","ajar","alcoholic","alert","alike","alive","alleged","alluring","aloof","amazing","ambiguous","ambitious","amuck","amused","amusing","ancient","angry","animated","annoyed","annoying","anxious","apathetic","aquatic","aromatic","arrogant","ashamed","aspiring","assorted","astonishing","attractive","auspicious","automatic","available","average","awake","aware","awesome","awful","axiomatic","bad","barbarous","bashful","bawdy","beautiful","befitting","belligerent","beneficial","bent","berserk","best","better","bewildered","big","billowy","bite-sized","bitter","bizarre","black","black-and-white","bloody","blue","blue-eyed","blushing","boiling","boorish","bored","boring","bouncy","boundless","brainy","brash","brave","brawny","breakable","breezy","brief","bright","bright","broad","broken","brown","bumpy","burly","bustling","busy","cagey","calculating","callous","calm","capable","capricious","careful","careless","caring","cautious","ceaseless","certain","changeable","charming","cheap","cheerful","chemical","chief","childlike","chilly","chivalrous","chubby","chunky","clammy","classy","clean","clear","clever","cloistered","cloudy","closed","clumsy","cluttered","coherent","cold","colorful","colossal","combative","comfortable","common","complete","complex","concerned","condemned","confused","conscious","cooing","cool","cooperative","coordinated","courageous","cowardly","crabby","craven","crazy","creepy","crooked","crowded","cruel","cuddly","cultured","cumbersome","curious","curly","curved","curvy","cut","cute","cute","cynical","daffy","daily","damaged","damaging","damp","dangerous","dapper","dark","dashing","dazzling","dead","deadpan","deafening","dear","debonair","decisive","decorous","deep","deeply","defeated","defective","defiant","delicate","delicious","delightful","demonic","delirious","dependent","depressed","deranged","descriptive","deserted","detailed","determined","devilish","didactic","different","difficult","diligent","direful","dirty","disagreeable","disastrous","discreet","disgusted","disgusting","disillusioned","dispensable","distinct","disturbed","divergent","dizzy","domineering","doubtful","drab","draconian","dramatic","dreary","drunk","dry","dull","dusty","dusty","dynamic","dysfunctional","eager","early","earsplitting","earthy","easy","eatable","economic","educated","efficacious","efficient","eight","elastic","elated","elderly","electric","elegant","elfin","elite","embarrassed","eminent","empty","enchanted","enchanting","encouraging","endurable","energetic","enormous","entertaining","enthusiastic","envious","equable","equal","erect","erratic","ethereal","evanescent","evasive","even","excellent","excited","exciting","exclusive","exotic","expensive","extra-large","extra-small","exuberant","exultant","fabulous","faded","faint","fair","faithful","fallacious","false","familiar","famous","fanatical","fancy","fantastic","far","far-flung","fascinated","fast","fat","faulty","fearful","fearless","feeble","feigned","female","fertile","festive","few","fierce","filthy","fine","finicky","first","five","fixed","flagrant","flaky","flashy","flat","flawless","flimsy","flippant","flowery","fluffy","fluttering","foamy","foolish","foregoing","forgetful","fortunate","four","frail","fragile","frantic","free","freezing","frequent","fresh","fretful","friendly","frightened","frightening","full","fumbling","functional","funny","furry","furtive","future","futuristic","fuzzy","gabby","gainful","gamy","gaping","garrulous","gaudy","general","gentle","giant","giddy","gifted","gigantic","glamorous","gleaming","glib","glistening","glorious","glossy","godly","good","goofy","gorgeous","graceful","grandiose","grateful","gratis","gray","greasy","great","greedy","green","grey","grieving","groovy","grotesque","grouchy","grubby","gruesome","grumpy","guarded","guiltless","gullible","gusty","guttural","habitual","half","hallowed","halting","handsome","handsomely","handy","hanging","hapless","happy","hard","hard-to-find","harmonious","harsh","hateful","heady","healthy","heartbreaking","heavenly","heavy","hellish","helpful","helpless","hesitant","hideous","high","highfalutin","high-pitched","hilarious","hissing","historical","holistic","hollow","homeless","homely","honorable","horrible","hospitable","hot","huge","hulking","humdrum","humorous","hungry","hurried","hurt","hushed","husky","hypnotic","hysterical","icky","icy","idiotic","ignorant","ill","illegal","ill-fated","ill-informed","illustrious","imaginary","immense","imminent","impartial","imperfect","impolite","important","imported","impossible","incandescent","incompetent","inconclusive","industrious","incredible","inexpensive","infamous","innate","innocent","inquisitive","insidious","instinctive","intelligent","interesting","internal","invincible","irate","irritating","itchy","jaded","jagged","jazzy","jealous","jittery","jobless","jolly","joyous","judicious","juicy","jumbled","jumpy","juvenile","kaput","keen","kind","kindhearted","kindly","knotty","knowing","knowledgeable","known","labored","lackadaisical","lacking","lame","lamentable","languid","large","last","late","laughable","lavish","lazy","lean","learned","left","legal","lethal","level","lewd","light","like","likeable","limping","literate","little","lively","lively","living","lonely","long","longing","long-term","loose","lopsided","loud","loutish","lovely","loving","low","lowly","lucky","ludicrous","lumpy","lush","luxuriant","lying","lyrical","macabre","macho","maddening","madly","magenta","magical","magnificent","majestic","makeshift","male","malicious","mammoth","maniacal","many","marked","massive","married","marvelous","material","materialistic","mature","mean","measly","meaty","medical","meek","mellow","melodic","melted","merciful","mere","messy","mighty","military","milky","mindless","miniature","minor","miscreant","misty","mixed","moaning","modern","moldy","momentous","motionless","mountainous","muddled","mundane","murky","mushy","mute","mysterious","naive","nappy","narrow","nasty","natural","naughty","nauseating","near","neat","nebulous","necessary","needless","needy","neighborly","nervous","new","next","nice","nifty","nimble","nine","nippy","noiseless","noisy","nonchalant","nondescript","nonstop","normal","nostalgic","nosy","noxious","null","numberless","numerous","nutritious","nutty","oafish","obedient","obeisant","obese","obnoxious","obscene","obsequious","observant","obsolete","obtainable","oceanic","odd","offbeat","old","old-fashioned","omniscient","one","onerous","open","opposite","optimal","orange","ordinary","organic","ossified","outgoing","outrageous","outstanding","oval","overconfident","overjoyed","overrated","overt","overwrought","painful","painstaking","pale","paltry","panicky","panoramic","parallel","parched","parsimonious","past","pastoral","pathetic","peaceful","penitent","perfect","periodic","permissible","perpetual","petite","petite","phobic","physical","picayune","pink","piquant","placid","plain","plant","plastic","plausible","pleasant","plucky","pointless","poised","polite","political","poor","possessive","possible","powerful","precious","premium","present","pretty","previous","pricey","prickly","private","probable","productive","profuse","protective","proud","psychedelic","psychotic","public","puffy","pumped","puny","purple","purring","pushy","puzzled","puzzling","quack","quaint","quarrelsome","questionable","quick","quickest","quiet","quirky","quixotic","quizzical","rabid","racial","ragged","rainy","rambunctious","rampant","rapid","rare","raspy","ratty","ready","real","rebel","receptive","recondite","red","redundant","reflective","regular","relieved","remarkable","reminiscent","repulsive","resolute","resonant","responsible","rhetorical","rich","right","righteous","rightful","rigid","ripe","ritzy","roasted","robust","romantic","roomy","rotten","rough","round","royal","ruddy","rude","rural","rustic","ruthless","sable","sad","safe","salty","same","sassy","satisfying","savory","scandalous","scarce","scared","scary","scattered","scientific","scintillating","scrawny","screeching","second","second-hand","secret","secretive","sedate","seemly","selective","selfish","separate","serious","shaggy","shaky","shallow","sharp","shiny","shivering","shocking","short","shrill","shut","shy","sick","silent","silent","silky","silly","simple","simplistic","sincere","six","skillful","skinny","sleepy","slim","slimy","slippery","sloppy","slow","small","smart","smelly","smiling","smoggy","smooth","sneaky","snobbish","snotty","soft","soggy","solid","somber","sophisticated","sordid","sore","sore","sour","sparkling","special","spectacular","spicy","spiffy","spiky","spiritual","spiteful","splendid","spooky","spotless","spotted","spotty","spurious","squalid","square","squealing","squeamish","staking","stale","standing","statuesque","steadfast","steady","steep","stereotyped","sticky","stiff","stimulating","stingy","stormy","straight","strange","striped","strong","stupendous","stupid","sturdy","subdued","subsequent","substantial","successful","succinct","sudden","sulky","super","superb","superficial","supreme","swanky","sweet","sweltering","swift","symptomatic","synonymous","taboo","tacit","tacky","talented","tall","tame","tan","tangible","tangy","tart","tasteful","tasteless","tasty","tawdry","tearful","tedious","teeny","teeny-tiny","telling","temporary","ten","tender","tense","tense","tenuous","terrible","terrific","tested","testy","thankful","therapeutic","thick","thin","thinkable","third","thirsty","thirsty","thoughtful","thoughtless","threatening","three","thundering","tidy","tight","tightfisted","tiny","tired","tiresome","toothsome","torpid","tough","towering","tranquil","trashy","tremendous","tricky","trite","troubled","truculent","true","truthful","two","typical","ubiquitous","ugliest","ugly","ultra","unable","unaccountable","unadvised","unarmed","unbecoming","unbiased","uncovered","understood","undesirable","unequal","unequaled","uneven","unhealthy","uninterested","unique","unkempt","unknown","unnatural","unruly","unsightly","unsuitable","untidy","unused","unusual","unwieldy","unwritten","upbeat","uppity","upset","uptight","used","useful","useless","utopian","utter","uttermost","vacuous","vagabond","vague","valuable","various","vast","vengeful","venomous","verdant","versed","victorious","vigorous","violent","violet","vivacious","voiceless","volatile","voracious","vulgar","wacky","waggish","waiting","wakeful","wandering","wanting","warlike","warm","wary","wasteful","watery","weak","wealthy","weary","well-groomed","well-made","well-off","well-to-do","wet","whimsical","whispering","white","whole","wholesale","wicked","wide","wide-eyed","wiggly","wild","willing","windy","wiry","wise","wistful","witty","woebegone","womanly","wonderful","wooden","woozy","workable","worried","worthless","wrathful","wretched","wrong","wry","yellow","yielding","young","youthful","yummy","zany","zealous","zesty","zippy","zonked","account","achiever","acoustics","act","action","activity","actor","addition","adjustment","advertisement","advice","aftermath","afternoon","afterthought","agreement","air","airplane","airport","alarm","amount","amusement","anger","angle","animal","ants","apparatus","apparel","appliance","approval","arch","argument","arithmetic","arm","army","art","attack","attraction","aunt","authority","babies","baby","back","badge","bag","bait","balance","ball","base","baseball","basin","basket","basketball","bat","bath","battle","bead","bear","bed","bedroom","beds","bee","beef","beginner","behavior","belief","believe","bell","bells","berry","bike","bikes","bird","birds","birth","birthday","bit","bite","blade","blood","blow","board","boat","bomb","bone","book","books","boot","border","bottle","boundary","box","boy","brake","branch","brass","breath","brick","bridge","brother","bubble","bucket","building","bulb","burst","bushes","business","butter","button","cabbage","cable","cactus","cake","cakes","calculator","calendar","camera","camp","can","cannon","canvas","cap","caption","car","card","care","carpenter","carriage","cars","cart","cast","cat","cats","cattle","cause","cave","celery","cellar","cemetery","cent","chalk","chance","change","channel","cheese","cherries","cherry","chess","chicken","chickens","children","chin","church","circle","clam","class","cloth","clover","club","coach","coal","coast","coat","cobweb","coil","collar","color","committee","company","comparison","competition","condition","connection","control","cook","copper","corn","cough","country","cover","cow","cows","crack","cracker","crate","crayon","cream","creator","creature","credit","crib","crime","crook","crow","crowd","crown","cub","cup","current","curtain","curve","cushion","dad","daughter","day","death","debt","decision","deer","degree","design","desire","desk","destruction","detail","development","digestion","dime","dinner","dinosaurs","direction","dirt","discovery","discussion","distance","distribution","division","dock","doctor","dog","dogs","doll","dolls","donkey","door","downtown","drain","drawer","dress","drink","driving","drop","duck","ducks","dust","ear","earth","earthquake","edge","education","effect","egg","eggnog","eggs","elbow","end","engine","error","event","example","exchange","existence","expansion","experience","expert","eye","eyes","face","fact","fairies","fall","fang","farm","fear","feeling","field","finger","finger","fire","fireman","fish","flag","flame","flavor","flesh","flight","flock","floor","flower","flowers","fly","fog","fold","food","foot","force","fork","form","fowl","frame","friction","friend","friends","frog","frogs","front","fruit","fuel","furniture","gate","geese","ghost","giants","giraffe","girl","girls","glass","glove","gold","government","governor","grade","grain","grandfather","grandmother","grape","grass","grip","ground","group","growth","guide","guitar","gun","hair","haircut","hall","hammer","hand","hands","harbor","harmony","hat","hate","head","health","heat","hill","history","hobbies","hole","holiday","home","honey","hook","hope","horn","horse","horses","hose","hospital","hot","hour","house","houses","humor","hydrant","ice","icicle","idea","impulse","income","increase","industry","ink","insect","instrument","insurance","interest","invention","iron","island","jail","jam","jar","jeans","jelly","jellyfish","jewel","join","judge","juice","jump","kettle","key","kick","kiss","kittens","kitty","knee","knife","knot","knowledge","laborer","lace","ladybug","lake","lamp","land","language","laugh","leather","leg","legs","letter","letters","lettuce","level","library","limit","line","linen","lip","liquid","loaf","lock","locket","look","loss","love","low","lumber","lunch","lunchroom","machine","magic","maid","mailbox","man","marble","mark","market","mask","mass","match","meal","measure","meat","meeting","memory","men","metal","mice","middle","milk","mind","mine","minister","mint","minute","mist","mitten","mom","money","monkey","month","moon","morning","mother","motion","mountain","mouth","move","muscle","name","nation","neck","need","needle","nerve","nest","night","noise","north","nose","note","notebook","number","nut","oatmeal","observation","ocean","offer","office","oil","orange","oranges","order","oven","page","pail","pan","pancake","paper","parcel","part","partner","party","passenger","payment","peace","pear","pen","pencil","person","pest","pet","pets","pickle","picture","pie","pies","pig","pigs","pin","pipe","pizzas","place","plane","planes","plant","plantation","plants","plastic","plate","play","playground","pleasure","plot","plough","pocket","point","poison","pollution","popcorn","porter","position","pot","potato","powder","power","price","produce","profit","property","prose","protest","pull","pump","punishment","purpose","push","quarter","quartz","queen","question","quicksand","quiet","quill","quilt","quince","quiver","rabbit","rabbits","rail","railway","rain","rainstorm","rake","range","rat","rate","ray","reaction","reading","reason","receipt","recess","record","regret","relation","religion","representative","request","respect","rest","reward","rhythm","rice","riddle","rifle","ring","rings","river","road","robin","rock","rod","roll","roof","room","root","rose","route","rub","rule","run","sack","sail","salt","sand","scale","scarecrow","scarf","scene","scent","school","science","scissors","screw","sea","seashore","seat","secretary","seed","selection","self","sense","servant","shade","shake","shame","shape","sheep","sheet","shelf","ship","shirt","shock","shoe","shoes","shop","show","side","sidewalk","sign","silk","silver","sink","sister","sisters","size","skate","skin","skirt","sky","slave","sleep","sleet","slip","slope","smash","smell","smile","smoke","snail","snails","snake","snakes","sneeze","snow","soap","society","sock","soda","sofa","son","song","songs","sort","sound","soup","space","spade","spark","spiders","sponge","spoon","spot","spring","spy","square","squirrel","stage","stamp","star","start","statement","station","steam","steel","stem","step","stew","stick","sticks","stitch","stocking","stomach","stone","stop","store","story","stove","stranger","straw","stream","street","stretch","string","structure","substance","sugar","suggestion","suit","summer","sun","support","surprise","sweater","swim","swing","system","table","tail","talk","tank","taste","tax","teaching","team","teeth","temper","tendency","tent","territory","test","texture","theory","thing","things","thought","thread","thrill","throat","throne","thumb","thunder","ticket","tiger","time","tin","title","toad","toe","toes","tomatoes","tongue","tooth","toothbrush","toothpaste","top","touch","town","toy","toys","trade","trail","train","trains","tramp","transport","tray","treatment","tree","trees","trick","trip","trouble","trousers","truck","trucks","tub","turkey","turn","twig","twist","umbrella","uncle","underwear","unit","use","vacation","value","van","vase","vegetable","veil","vein","verse","vessel","vest","view","visitor","voice","volcano","volleyball","voyage","walk","wall","war","wash","waste","watch","water","wave","waves","wax","way","wealth","weather","week","weight","wheel","whip","whistle","wilderness","wind","window","wine","wing","winter","wire","wish","woman","women","wood","wool","word","work","worm","wound","wren","wrench","wrist","writer","writing","yak","yam","yard","yarn","year","yoke","zebra","zephyr","zinc","zipper","zoo","accept","add","admire","admit","advise","afford","agree","alert","allow","amuse","analyse","announce","annoy","answer","apologise","appear","applaud","appreciate","approve","argue","arrange","arrest","arrive","ask","attach","attack","attempt","attend","attract","avoid","back","bake","balance","ban","bang","bare","bat","bathe","battle","beam","beg","behave","belong","bleach","bless","blind","blink","blot","blush","boast","boil","bolt","bomb","book","bore","borrow","bounce","bow","box","brake","branch","breathe","bruise","brush","bubble","bump","burn","bury","buzz","calculate","call","camp","care","carry","carve","cause","challenge","change","charge","chase","cheat","check","cheer","chew","choke","chop","claim","clap","clean","clear","clip","close","coach","coil","collect","colour","comb","command","communicate","compare","compete","complain","complete","concentrate","concern","confess","confuse","connect","consider","consist","contain","continue","copy","correct","cough","count","cover","crack","crash","crawl","cross","crush","cry","cure","curl","curve","cycle","dam","damage","dance","dare","decay","deceive","decide","decorate","delay","delight","deliver","depend","describe","desert","deserve","destroy","detect","develop","disagree","disappear","disapprove","disarm","discover","dislike","divide","double","doubt","drag","drain","dream","dress","drip","drop","drown","drum","dry","dust","earn","educate","embarrass","employ","empty","encourage","end","enjoy","enter","entertain","escape","examine","excite","excuse","exercise","exist","expand","expect","explain","explode","extend","face","fade","fail","fancy","fasten","fax","fear","fence","fetch","file","fill","film","fire","fit","fix","flap","flash","float","flood","flow","flower","fold","follow","fool","force","form","found","frame","frighten","fry","gather","gaze","glow","glue","grab","grate","grease","greet","grin","grip","groan","guarantee","guard","guess","guide","hammer","hand","handle","hang","happen","harass","harm","hate","haunt","head","heal","heap","heat","help","hook","hop","hope","hover","hug","hum","hunt","hurry","identify","ignore","imagine","impress","improve","include","increase","influence","inform","inject","injure","instruct","intend","interest","interfere","interrupt","introduce","invent","invite","irritate","itch","jail","jam","jog","join","joke","judge","juggle","jump","kick","kill","kiss","kneel","knit","knock","knot","label","land","last","laugh","launch","learn","level","license","lick","lie","lighten","like","list","listen","live","load","lock","long","look","love","man","manage","march","mark","marry","match","mate","matter","measure","meddle","melt","memorise","mend","mess up","milk","mine","miss","mix","moan","moor","mourn","move","muddle","mug","multiply","murder","nail","name","need","nest","nod","note","notice","number","obey","object","observe","obtain","occur","offend","offer","open","order","overflow","owe","own","pack","paddle","paint","park","part","pass","paste","pat","pause","peck","pedal","peel","peep","perform","permit","phone","pick","pinch","pine","place","plan","plant","play","please","plug","point","poke","polish","pop","possess","post","pour","practise","pray","preach","precede","prefer","prepare","present","preserve","press","pretend","prevent","prick","print","produce","program","promise","protect","provide","pull","pump","punch","puncture","punish","push","question","queue","race","radiate","rain","raise","reach","realise","receive","recognise","record","reduce","reflect","refuse","regret","reign","reject","rejoice","relax","release","rely","remain","remember","remind","remove","repair","repeat","replace","reply","report","reproduce","request","rescue","retire","return","rhyme","rinse","risk","rob","rock","roll","rot","rub","ruin","rule","rush","sack","sail","satisfy","save","saw","scare","scatter","scold","scorch","scrape","scratch","scream","screw","scribble","scrub","seal","search","separate","serve","settle","shade","share","shave","shelter","shiver","shock","shop","shrug","sigh","sign","signal","sin","sip","ski","skip","slap","slip","slow","smash","smell","smile","smoke","snatch","sneeze","sniff","snore","snow","soak","soothe","sound","spare","spark","sparkle","spell","spill","spoil","spot","spray","sprout","squash","squeak","squeal","squeeze","stain","stamp","stare","start","stay","steer","step","stir","stitch","stop","store","strap","strengthen","stretch","strip","stroke","stuff","subtract","succeed","suck","suffer","suggest","suit","supply","support","suppose","surprise","surround","suspect","suspend","switch","talk","tame","tap","taste","tease","telephone","tempt","terrify","test","thank","thaw","tick","tickle","tie","time","tip","tire","touch","tour","tow","trace","trade","train","transport","trap","travel","treat","tremble","trick","trip","trot","trouble","trust","try","tug","tumble","turn","twist","type","undress","unfasten","unite","unlock","unpack","untidy","use","vanish","visit","wail","wait","walk","wander","want","warm","warn","wash","waste","watch","water","wave","weigh","welcome","whine","whip","whirl","whisper","whistle","wink","wipe","wish","wobble","wonder","work","worry","wrap","wreck","wrestle","wriggle","x-ray","yawn","yell","zip","zoom"]};

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Nick\sites\theSearchForSpoint\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map