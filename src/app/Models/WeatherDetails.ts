 /**
 * forecast model
 */
export class Forecast {
    name: string;
    details: WeatherDetails[] = [];

    constructor(obj: object) {
        this.name = obj['city']['name'];
        const objectList: object[] = obj['list'];
        for (let i = 0; i < objectList.length; i++) {
            this.details.push(new WeatherDetails(objectList[i]));
        }
    }
}

export class WeatherDetails {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
    weather: string;
    desc: string;
    date: string;
    icon: string;

    constructor(obj: object) {
        this.temp = Math.round(obj['main']['temp']);
        this.pressure = Math.round(obj['main']['pressure']);
        this.humidity = Math.round(obj['main']['humidity']);
        this.temp_min = Math.round(obj['main']['temp_min']);
        this.temp_max = Math.round(obj['main']['temp_max']);
        this.weather = obj['weather'][0]['main'];
        this.desc = obj['weather'][0]['description'];
        const resDate: Date = new Date(obj['dt_txt']);
        let minutes: string = resDate.getMinutes() + '';
        let date: string = resDate.getDate() + '';
        let month: string = resDate.getMonth() + '';
        if (resDate.getMinutes() < 10) {
            minutes = '0' + minutes;
        }
        if (resDate.getDate() < 10) {
            date = '0' + date;
        }
        if (resDate.getMonth() < 10) {
            month = '0' + month;
        }
         this.date = date + '/' + month + '/' + resDate.getFullYear() + ' ' + resDate.getHours() + ':' + minutes;
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
