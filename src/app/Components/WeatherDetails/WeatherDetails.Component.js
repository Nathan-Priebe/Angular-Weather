"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var Weather_1 = require("../../Models/Weather");
var WeatherDetailsComponent = (function () {
    // Inject HttpClient into your component or service.
    function WeatherDetailsComponent(http) {
        this.http = http;
    }
    WeatherDetailsComponent.prototype.getWeatherData = function (city) {
        var _this = this;
        // Stand in value until location entry added
        this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=ba58afbe01c96697166e22edcbe6a953').subscribe(function (data) {
            _this.weatherDetails = new Weather_1.Weather(data);
        });
    };
    return WeatherDetailsComponent;
}());
WeatherDetailsComponent = __decorate([
    core_1.Component({
        templateUrl: 'WeatherDetails.html'
    }),
    __metadata("design:paramtypes", [http_1.HttpClient])
], WeatherDetailsComponent);
exports.WeatherDetailsComponent = WeatherDetailsComponent;
//# sourceMappingURL=WeatherDetails.Component.js.map