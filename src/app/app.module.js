"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var router_1 = require("@angular/router");
var AllWeather_Component_1 = require("./Components/AllWeather/AllWeather.Component");
var WeatherDetails_Component_1 = require("./Components/WeatherDetails/WeatherDetails.Component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            AllWeather_Component_1.AllWeatherComponent,
            WeatherDetails_Component_1.WeatherDetailsComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpClientModule,
            ng_bootstrap_1.NgbModule,
            router_1.RouterModule.forRoot([
                { path: 'Details', component: WeatherDetails_Component_1.WeatherDetailsComponent },
                { path: 'MyWeather', component: AllWeather_Component_1.AllWeatherComponent },
                { path: '', component: AllWeather_Component_1.AllWeatherComponent }
            ], { useHash: true })
        ],
        providers: [],
        bootstrap: [AllWeather_Component_1.AllWeatherComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map