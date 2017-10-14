import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather } from '../../Models/Weather';

@Component({
    selector: 'app-root',
    templateUrl: 'AllWeather.html'
})

export class AllWeatherComponent implements OnInit {
    weather: Weather[] = [];

    // Inject HttpClient into your component or service.
    constructor(private http: HttpClient) {}

    ngOnInit(): void {
      // Make the HTTP request:
      // Stand in value until location entry added
      const localCities = 'Brisbane,Aus|Sydney,Aus';
      const cities: string[] = localCities.split('|');
      cities.forEach(city => {
        this.http.get(
          'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=ba58afbe01c96697166e22edcbe6a953'
        ).subscribe(data => {
          this.weather.push(new Weather(data));
        });
      });
    }
}
