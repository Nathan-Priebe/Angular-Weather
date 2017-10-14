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
var AllWeatherComponent = (function () {
    // Inject HttpClient into your component or service.
    function AllWeatherComponent(http) {
        this.http = http;
        this.weather = [];
    }
    AllWeatherComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Make the HTTP request:
        // Stand in value until location entry added
        var localCities = 'Brisbane,Aus|Sydney,Aus';
        var cities = localCities.split('|');
        cities.forEach(function (city) {
            _this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Brisbane&appid=ba58afbe01c96697166e22edcbe6a953').subscribe(function (data) {
                // Read the result field from the JSON response.
                _this.weather.push(new Weather_1.Weather(data));
                console.log(_this.weather[0]);
            });
        });
    };
    return AllWeatherComponent;
}());
AllWeatherComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        templateUrl: 'AllWeather.html'
    }),
    __metadata("design:paramtypes", [http_1.HttpClient])
], AllWeatherComponent);
exports.AllWeatherComponent = AllWeatherComponent;
//# sourceMappingURL=AllWeather.Component.js.map