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
    function Weather(obj) {
        this.temp = obj['main']['temp'];
        this.pressure = obj['main']['pressure'];
        this.humidity = obj['main']['humidity'];
        this.temp_min = obj['main']['temp_min'];
        this.temp_max = obj['main']['temp_max'];
        this.weather = obj['weather'][0]['main'];
        this.desc = obj['weather'][0]['description'];
    }
    return Weather;
}());
exports.Weather = Weather;
//# sourceMappingURL=Weather.js.map