"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Weather App';
        this.provider = 'Yahoo Weather';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-weather',
        // templateUrl: 'test.html',
        template: "<h1>Hello {{name}}</h1> <br /> <h2>{{provider}}</h2> <div ng-app=\"my-app\" ng-controller=\"myWeatherController\">\n    {{greeting}}\n        </div>",
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=AllWeather.Component.js.map