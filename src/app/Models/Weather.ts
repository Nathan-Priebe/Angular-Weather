 /**
 weather model
 */

export class Weather {
    name: string;
    id: number;
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
    weather: string;
    desc: string;
    arrayPos: number;
    icon: string;

    constructor(obj: object, arrayPosition?: number) {
        this.temp = Math.round(obj['main']['temp']);
        this.pressure = Math.round(obj['main']['pressure']);
        this.humidity = Math.round(obj['main']['humidity']);
        this.temp_min = Math.round(obj['main']['temp_min']);
        this.temp_max = Math.round(obj['main']['temp_max']);
        this.weather = obj['weather'][0]['main'];
        this.desc = obj['weather'][0]['description'];
        this.name = obj['name'];
        this.arrayPos = arrayPosition;
        this.id = obj['id'];
        if (this.weather === 'Clouds') {
            this.icon = 'fa-cloud';
        } else if (this.weather === 'Rain') {
            this.icon = 'fa-tint';
        } else if (this.weather === 'Snow') {
            this.icon = 'fa-snowflake-o';
        } else if (this.weather === 'Storm') {
            this.icon = 'fa-bolt';
        } else if (this.weather === 'Clear') {
            this.icon = 'fa-sun-o';
        } else {
            this.icon = 'fa-cloud';
        }
    }
}
