"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
* weather model
*/
var Weather = (function () {
    /**
     * constructor
     * @param title
     * @param pages
     */
    function Weather(obj, arrayPosition) {
        this.temp = Math.round(obj['main']['temp']);
        this.pressure = Math.round(obj['main']['pressure']);
        this.humidity = Math.round(obj['main']['humidity']);
        this.temp_min = Math.round(obj['main']['temp_min']);
        this.temp_max = Math.round(obj['main']['temp_max']);
        this.weather = obj['weather'][0]['main'];
        this.desc = obj['weather'][0]['description'];
        this.name = obj['name'];
        this.arrayPos = arrayPosition;
    }
    return Weather;
}());
exports.Weather = Weather;
//# sourceMappingURL=Weather.js.map