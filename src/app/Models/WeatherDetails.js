"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
* forecast model
*/
var Forecast = (function () {
    function Forecast(obj) {
        this.details = [];
        this.name = obj['city']['name'];
        var objectList = obj['list'];
        for (var i = 0; i < objectList.length; i++) {
            this.details.push(new WeatherDetails(objectList[i]));
        }
    }
    return Forecast;
}());
exports.Forecast = Forecast;
var WeatherDetails = (function () {
    function WeatherDetails(obj) {
        this.temp = Math.round(obj['main']['temp']);
        this.pressure = Math.round(obj['main']['pressure']);
        this.humidity = Math.round(obj['main']['humidity']);
        this.temp_min = Math.round(obj['main']['temp_min']);
        this.temp_max = Math.round(obj['main']['temp_max']);
        this.weather = obj['weather'][0]['main'];
        this.desc = obj['weather'][0]['description'];
        this.date = obj['dt_txt'];
    }
    return WeatherDetails;
}());
exports.WeatherDetails = WeatherDetails;
//# sourceMappingURL=WeatherDetails.js.map