 /**
 * weather model
 */
export class Weather {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
    weather: string;
    desc: string;

    /**
     * constructor
     * @param title
     * @param pages
     */
    constructor(obj: object) {
       this.temp = obj['main']['temp'];
       this.pressure = obj['main']['pressure'];
       this.humidity = obj['main']['humidity'];
       this.temp_min = obj['main']['temp_min'];
       this.temp_max = obj['main']['temp_max'];
       this.weather = obj['weather'][0]['main'];
       this.desc = obj['weather'][0]['description'];
    }
}
