import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather } from '../../Models/Weather';

@Component({
    templateUrl: 'WeatherDetails.html'
})

export class WeatherDetailsComponent {
    weatherDetails: Weather;

    // Inject HttpClient into your component or service.
    constructor(private http: HttpClient) {}

    getWeatherData(city: string): void {
      // Stand in value until location entry added
        this.http.get(
          'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=ba58afbe01c96697166e22edcbe6a953'
        ).subscribe(data => {
          this.weatherDetails = new Weather(data);
      });
    }
}
