(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["voicetitle-voicetitle-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/voicetitle/voicetitle.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/voicetitle/voicetitle.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>voicetitle</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"container\">\n\n\n        <div class=\"inactive\" id=\"response-correct-wrapper\">\n            <div class=\"correct-container\" id=\"response-correct-container\">\n                <img src=\"../img/correct.png\" alt=\"\" class=\"correct-tick\">\n                <div class=\"second-row\">\n                    <button class=\"btn-third\" onclick=\"retryCorrect()\">\n                        <img src=\"../img/retry.png\" alt=\"\" class=\"correct-retry\">\n                    </button>\n                    <span class=\"separate\" id=\"instance-2\"></span>\n                    <button class=\"btn-third\" onclick=\"nextUrl()\">\n                        <img src=\"../img/next.png\" alt=\"\" class=\"correct-next\">\n                    </button>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"inactive\" id=\"response-incorrect-wrapper\">\n            <div class=\"incorrect-container\" id=\"response-incorrect-container\">\n                <img src=\"../img/sad.png\" alt=\"\" class=\"incorrect-tick\">\n                <div class=\"second-row\">\n                    <button class=\"btn-third btn-incorrect\" onclick=\"retryIncorrect()\">\n                        <img src=\"../img/retry.png\" alt=\"\" class=\"incorrect-retry\">\n                    </button>\n                    <span class=\"separate\" id=\"instance-2\"></span>\n                    <button class=\"btn-third btn-incorrect\" onclick=\"nextUrl()\">\n                        <img src=\"../img/help.png\" alt=\"\" class=\"incorrect-next\">\n                    </button>\n                </div>\n            </div>\n        </div>\n\n\n\n        <div class=\"header-container\">\n            <a href=\"../index.html\">\n                <i class=\"left\"></i>\n                <img src=\"../img/home.png\" alt=\"Home Button\" class=\"home-link\">\n            </a>\n            <img src=\"../img/logo_white.png\" alt=\"=Logo White\" class=\"header-logo\">\n        </div>\n        \n        <p class=\"title\">Click microphone and say the word you see, below.</p>\n\n<h1 class=\"hints\">word</h1>\n\n        <div class=\"content\">\n            <div id=\"container\">\n\n                <div class=\"load-pie\">\n                    <div class=\"load-left\">\n                        <div class=\"left-load-block\" id=\"left-load\"> </div>\n                    </div>\n                    <div class=\"load-right\">\n                        <div class=\"right-load-block\" id=\"right-load\"> </div>\n                    </div>\n                </div>\n            </div>\n<!-- <h1>Speech checker - add in querystring to this.</h1>\n--> <!-- <button onClick=\"speakit()\">speak </button> -->\n\n   \n            <button id=\"record\" class=\"btn-main\" onClick=\"speakit()\"> \n            <!-- button onClick=\"speakit()\">speak </button -->\n                <img src=\"../img/mic-white.png\" alt=\"\" class=\"incorrect-retry\" >\n            </button>\n            <button id=\"play\" class=\"btn-main\">play</button>\n        </div>\n         \n    <!-- div>\n        <p class=\"output\"><em>...diagnostic messages</em></p>\n    </div -->\n        \n<!--        <img src=\"../img/pat.jpg\" alt=\"Pat\" class=\"visual-cue\">\n-->\t\n\n       <!--  <script src=\"../js/voice_record.js\"></script> -->\n        \n    </div>\n    <!-- <ion-button expand=\"full\" color=\"secondary\" (click)=\"isSpeechSupported()\">Is speech supported</ion-button>\n    <ion-button expand=\"full\" color=\"secondary\" (click)=\"getPermission()\">Get Permission</ion-button>\n    <ion-button expand=\"full\" color=\"success\" (click)=\"listen()\">Start listening</ion-button>\n    <ion-button expand=\"full\" color=\"danger\" (click)=\"stop()\">Stop listening</ion-button>\n    <ion-button expand=\"full\" color=\"secondary\" (click)=\"check()\">Check answer</ion-button>\n    <p>{{console}}</p>\n    <p>{{feedback}}</p>\n    \n    <ion-card *ngFor=\"let speech of responseList\">\n      <ion-card-content>{{speech}}</ion-card-content>\n    </ion-card> -->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/voicetitle/voicetitle.module.ts":
/*!*************************************************!*\
  !*** ./src/app/voicetitle/voicetitle.module.ts ***!
  \*************************************************/
/*! exports provided: VoicetitlePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoicetitlePageModule", function() { return VoicetitlePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _voicetitle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./voicetitle.page */ "./src/app/voicetitle/voicetitle.page.ts");







const routes = [
    {
        path: '',
        component: _voicetitle_page__WEBPACK_IMPORTED_MODULE_6__["VoicetitlePage"]
    }
];
let VoicetitlePageModule = class VoicetitlePageModule {
};
VoicetitlePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_voicetitle_page__WEBPACK_IMPORTED_MODULE_6__["VoicetitlePage"]]
    })
], VoicetitlePageModule);



/***/ }),

/***/ "./src/app/voicetitle/voicetitle.page.scss":
/*!*************************************************!*\
  !*** ./src/app/voicetitle/voicetitle.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZvaWNldGl0bGUvdm9pY2V0aXRsZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/voicetitle/voicetitle.page.ts":
/*!***********************************************!*\
  !*** ./src/app/voicetitle/voicetitle.page.ts ***!
  \***********************************************/
/*! exports provided: VoicetitlePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoicetitlePage", function() { return VoicetitlePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/speech-recognition/ngx */ "./node_modules/@ionic-native/speech-recognition/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let VoicetitlePage = class VoicetitlePage {
    constructor(speech, router) {
        this.speech = speech;
        this.router = router;
        this.responseList = [];
        this.answers = ['Cat', 'Dog', 'Sat', 'Constantinople'];
        this.stepper = 0;
        this.correctAnswer = this.answers[this.stepper];
        this.console = this.answers[this.stepper];
    }
    check() {
        (this.responseList.indexOf(this.correctAnswer) != -1) ? this.feedback = 'CORRECT' : this.feedback = 'NOT CORRECT';
        (this.stepper < this.answers.length - 1) ? this.stepper++ : this.stepper = 0;
        this.console = this.answers[this.stepper];
        this.correctAnswer = this.answers[this.stepper];
    }
    listen() {
        setTimeout(function () {
            this.stop();
        }, 5000);
        this.speech.startListening({ matches: 1 })
            .subscribe((matches) => { this.responseList = matches; }, (onerror) => console.log('error:', onerror));
    }
    stop() {
        this.speech.stopListening();
        setTimeout(this.getPermission, 1000);
        //console.log(this.responseList);
    }
    getPermission() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const permission = yield this.speech.requestPermission();
            }
            catch (e) {
            }
        });
    }
    isSpeechSupported() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const isAvailable = yield this.speech.isRecognitionAvailable();
            console.log(isAvailable);
            return isAvailable;
        });
    }
    ngOnInit() {
    }
};
VoicetitlePage.ctorParameters = () => [
    { type: _ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_2__["SpeechRecognition"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
VoicetitlePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-voicetitle',
        template: __webpack_require__(/*! raw-loader!./voicetitle.page.html */ "./node_modules/raw-loader/index.js!./src/app/voicetitle/voicetitle.page.html"),
        styles: [__webpack_require__(/*! ./voicetitle.page.scss */ "./src/app/voicetitle/voicetitle.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_2__["SpeechRecognition"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], VoicetitlePage);



/***/ })

}]);
//# sourceMappingURL=voicetitle-voicetitle-module-es2015.js.map