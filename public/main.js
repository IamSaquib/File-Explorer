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



var routes = [];
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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-3\">\n  <h2>File Explorer</h2>\n  <app-list-dir></app-list-dir>\n</div>"

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
        this.title = 'client-frontend';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_list_dir_list_dir_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/list-dir/list-dir.component */ "./src/app/components/list-dir/list-dir.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_list_dir_list_dir_component__WEBPACK_IMPORTED_MODULE_5__["ListDirComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/list-dir/list-dir.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/list-dir/list-dir.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n    color: #007bff!important;\n    text-decoration: none;\n    background-color: transparent;\n    cursor: pointer;\n}"

/***/ }),

/***/ "./src/app/components/list-dir/list-dir.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/list-dir/list-dir.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav aria-label=\"breadcrumb\">\n  <ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\" aria-current=\"page\" *ngFor=\"let crumb of breadcrumb\" (click)=\"onCrumbClick(crumb)\">{{crumb}}\n    </li>\n  </ol>\n</nav>\n\n<ul class=\"list-group\" *ngIf=\"isDir === 'dir'; else elseBlock\">\n  <li class=\"list-group-item\" *ngFor=\"let file of files\">\n    <div class=\"row\" (click)=\"onItemClick(file)\">\n      <div class=\"col-md-4\">\n        <a>{{file.name}}</a>\n      </div>\n      <div class=\"col-md-4\">\n          {{file.size}} bytes\n      </div>\n      <div class=\"col-md-4\">\n          {{file.type}}\n      </div>\n    </div>\n  </li>\n</ul>\n<ng-template #elseBlock>\n    <div *ngIf=\"isDir === 'txt'\" [innerText]=\"content\"></div>\n    <div *ngIf=\"isDir === 'png' || isDir === 'jpg' || isDir === 'jpeg'\">\n        <img [src]=\"content\" alt=\"\">\n    </div>\n    <div *ngIf=\"isDir === 'mp3'\">\n      <audio id=\"player\" controls>\n        <source [src]=\"content\" type=\"audio/mpeg\">\n      </audio>\n    </div>\n    <div *ngIf=\"isDir === 'mp4'\">\n      <video id=\"videoPlayer\" controls>\n        <source [src]=\"content\" type=\"video/mp4\">\n      </video>\n    </div>\n    <div *ngIf=\"isDir === 'other'\">\n      <p>File Downloaded</p>\n    </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/components/list-dir/list-dir.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/list-dir/list-dir.component.ts ***!
  \***********************************************************/
/*! exports provided: ListDirComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListDirComponent", function() { return ListDirComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_service_explorer_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/explorer-service.service */ "./src/app/service/explorer-service.service.ts");




var ListDirComponent = /** @class */ (function () {
    function ListDirComponent(http, explorer) {
        var _this = this;
        this.http = http;
        this.explorer = explorer;
        this.dir = '/';
        // this.explorer.setBread().push('Root');
        this.explorer.setDir('dir');
        this.explorer.breadCrumb.subscribe(function (data) {
            _this.breadcrumb = data.split('/');
        });
        this.explorer.getDir(this.dir).subscribe(function (data) {
            _this.files = data;
            if (data.type === 'isFile') {
                _this.explorer.setDir('file');
            }
            else {
                _this.explorer.setDir('dir');
            }
            _this.explorer.isDir.subscribe(function (dir) {
                _this.isDir = dir;
                if (dir === 'file') {
                    _this.explorer.getFile(_this.dir).subscribe(function (content) {
                        _this.content = content;
                    });
                }
            });
        });
    }
    ListDirComponent.prototype.ngOnInit = function () {
    };
    ListDirComponent.prototype.onItemClick = function (file) {
        var _this = this;
        if (file.name.length === 1) {
            this.dir = file.name;
        }
        else if (this.dir.length === 1) {
            this.dir = '/' + file.name;
        }
        else {
            this.dir += '/' + file.name;
        }
        this.explorer.setBread('Root' + this.dir);
        this.explorer.getDir(this.dir).subscribe(function (data) {
            _this.files = data;
            if (data.type) {
                _this.explorer.setDir(data.type);
                _this.isDir = data.type;
            }
            else {
                _this.explorer.setDir('dir');
                _this.isDir = 'dir';
            }
            if (_this.isDir === 'mp3' || _this.isDir === 'mp4' || _this.isDir === 'png' || _this.isDir === 'jpg' || _this.isDir === 'jpeg') {
                _this.content = 'http://localhost:8080/get_file?path=' + _this.dir;
            }
            else if (_this.isDir === 'txt' || _this.isDir === 'cpp') {
                _this.explorer.setDir('txt');
                _this.explorer.getFile(_this.dir).subscribe(function (content) {
                    _this.content = content.body;
                });
            }
            else if (_this.isDir !== 'dir') {
                _this.explorer.setDir('other');
                var content_1 = 'http://localhost:8080/get_file?path=' + _this.dir;
                _this.explorer.getAttachment(content_1).subscribe(function (download) {
                    window.open(content_1, '_blank');
                });
            }
        });
        this.explorer.isDir.subscribe(function (dir) {
            _this.isDir = dir;
        });
    };
    ListDirComponent.prototype.onCrumbClick = function (crumb) {
        var newCrumb = '';
        var breadcrumb = this.breadcrumb.splice(1, this.breadcrumb.length);
        if (crumb === 'Root') {
            var file = {
                name: '/'
            };
            this.onItemClick(file);
        }
        else {
            for (var _i = 0, breadcrumb_1 = breadcrumb; _i < breadcrumb_1.length; _i++) {
                var i = breadcrumb_1[_i];
                if (i === crumb) {
                    newCrumb += '/' + i;
                    break;
                }
                else {
                    newCrumb += '/' + i;
                }
            }
            var name_1 = newCrumb.split('/');
            var file = {
                name: name_1[name_1.length - 1]
            };
            this.breadcrumb = newCrumb.split('/');
            this.breadcrumb = this.breadcrumb.splice(1, this.breadcrumb.length - 2);
            this.breadcrumb.unshift('Root');
            this.dir = newCrumb.substr(0, newCrumb.lastIndexOf('/'));
            this.onItemClick(file);
        }
    };
    ListDirComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-dir',
            template: __webpack_require__(/*! ./list-dir.component.html */ "./src/app/components/list-dir/list-dir.component.html"),
            styles: [__webpack_require__(/*! ./list-dir.component.css */ "./src/app/components/list-dir/list-dir.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            src_app_service_explorer_service_service__WEBPACK_IMPORTED_MODULE_3__["ExplorerServiceService"]])
    ], ListDirComponent);
    return ListDirComponent;
}());



/***/ }),

/***/ "./src/app/service/explorer-service.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/service/explorer-service.service.ts ***!
  \*****************************************************/
/*! exports provided: ExplorerServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExplorerServiceService", function() { return ExplorerServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var ExplorerServiceService = /** @class */ (function () {
    function ExplorerServiceService(http) {
        this.http = http;
        // public url = 'http://localhost:8080';
        this.currentDir = null;
        this.bread = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('Root');
        this.isDir = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('none');
        this.breadCrumb = this.bread.asObservable();
        this.url = window.location.protocol + '//' + window.location.host;
    }
    ExplorerServiceService.prototype.getDir = function (dir) {
        this.currentDir = dir;
        return this.http.get(this.url + '/list_dir', { params: { path: dir } });
    };
    ExplorerServiceService.prototype.getFile = function (dir) {
        this.currentDir = dir;
        return this.http.get(this.url + '/get_file', { params: { path: dir } });
    };
    ExplorerServiceService.prototype.setBread = function (crumb) {
        this.bread.next(crumb);
    };
    ExplorerServiceService.prototype.setDir = function (dir) {
        this.isDir.next(dir);
    };
    ExplorerServiceService.prototype.getAttachment = function (content) {
        return this.http.get(content);
    };
    ExplorerServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ExplorerServiceService);
    return ExplorerServiceService;
}());



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

module.exports = __webpack_require__(/*! /home/nerdovert/Dev_Nerdovert/File-Explorer/client-frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);