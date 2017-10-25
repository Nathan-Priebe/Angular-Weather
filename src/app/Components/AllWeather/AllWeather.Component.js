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
var AddCityModal_Component_1 = require("../AddCityModal/AddCityModal.Component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var AllWeatherComponent = (function () {
    // Inject HttpClient into your component or service.
    function AllWeatherComponent(http, modalService) {
        this.http = http;
        this.modalService = modalService;
        this.weather = [];
    }
    AllWeatherComponent.prototype.ngOnInit = function () {
        // Make the HTTP request:
        this.getWeatherData();
    };
    AllWeatherComponent.prototype.openModal = function () {
        this.modalService.open(AddCityModal_Component_1.NgbdModalContentComponent);
    };
    AllWeatherComponent.prototype.getWeatherData = function () {
        var _this = this;
        // Stand in value until location entry added
        var localCities = localStorage.getItem('myLocations');
        var cities = localCities.split('|');
        var _loop_1 = function (i) {
            this_1.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + cities[i] + '&units=metric&appid=ba58afbe01c96697166e22edcbe6a953').subscribe(function (data) {
                _this.weather.push(new Weather_1.Weather(data, i));
            });
        };
        var this_1 = this;
        for (var i = 0; i < cities.length; i++) {
            _loop_1(i);
        }
    };
    AllWeatherComponent.prototype.removeItem = function (arrayPos) {
        var localCities = localStorage.getItem('myLocations');
        var cities = localCities.split('|');
        cities.splice(arrayPos, 1);
        var outputString = '';
        for (var i = 0; i < cities.length; i++) {
            if (i === cities.length - 1) {
                outputString = outputString + cities[i];
            }
            else {
                outputString = outputString + cities[i] + '|';
            }
        }
        localStorage.setItem('myLocations', outputString);
        window.location.reload();
    };
    return AllWeatherComponent;
}());
AllWeatherComponent = __decorate([
    core_1.Component({
        templateUrl: 'AllWeather.html'
    }),
    __metadata("design:paramtypes", [http_1.HttpClient, ng_bootstrap_1.NgbModal])
], AllWeatherComponent);
exports.AllWeatherComponent = AllWeatherComponent;
//# sourceMappingURL=AllWeather.Component.js.map