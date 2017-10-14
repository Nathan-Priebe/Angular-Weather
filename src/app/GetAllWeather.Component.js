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
var GetAllWeatherComponent = (function () {
    // Inject HttpClient into your component or service.
    function GetAllWeatherComponent(http) {
        this.http = http;
    }
    GetAllWeatherComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Make the HTTP request:
        this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Brisbane&appid=ba58afbe01c96697166e22edcbe6a953').subscribe(function (data) {
            // Read the result field from the JSON response.
            _this.results = data['results'];
        });
    };
    return GetAllWeatherComponent;
}());
GetAllWeatherComponent = __decorate([
    core_1.Component({}),
    __metadata("design:paramtypes", [http_1.HttpClient])
], GetAllWeatherComponent);
exports.GetAllWeatherComponent = GetAllWeatherComponent;
//# sourceMappingURL=GetAllWeather.Component.js.map