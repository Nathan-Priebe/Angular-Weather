import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather } from './Models/Weather';

@Component({
    selector: 'app-root',
    templateUrl: 'AllWeather.html'
})

export class AllWeatherComponent implements OnInit {
    weather: Weather;

    // Inject HttpClient into your component or service.
    constructor(private http: HttpClient) {}

    ngOnInit(): void {
      // Make the HTTP request:
      this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Brisbane&appid=ba58afbe01c96697166e22edcbe6a953').subscribe(data => {
        // Read the result field from the JSON response.
        this.weather = new Weather(data);

      });
    }
}
