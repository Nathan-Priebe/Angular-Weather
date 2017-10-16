import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather } from '../../Models/Weather';

@Component({
    templateUrl: 'AllWeather.html'
})

export class AllWeatherComponent implements OnInit {
    weather: Weather[] = [];

    // Inject HttpClient into your component or service.
    constructor(private http: HttpClient) {}

    ngOnInit(): void {
      // Make the HTTP request:
      this.getWeatherData();
    }

    getWeatherData(): void {
      // Stand in value until location entry added
      localStorage.setItem('myLocations', 'Brisbane,Aus|Sydney,Aus');
      const localCities = localStorage.getItem('myLocations');
      const cities: string[] = localCities.split('|');
      for (let i = 0; i < cities.length; i++) {
        this.http.get(
          'http://api.openweathermap.org/data/2.5/weather?q=' + cities[i] + '&units=metric&appid=ba58afbe01c96697166e22edcbe6a953'
        ).subscribe(data => {
          this.weather.push(new Weather(data, i));
        });
      }
    }
}
