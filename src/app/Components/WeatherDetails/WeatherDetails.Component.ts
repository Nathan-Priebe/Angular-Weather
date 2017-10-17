import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherDetails, Forecast } from '../../Models/WeatherDetails';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    templateUrl: 'WeatherDetails.html'
})

export class WeatherDetailsComponent implements OnInit {
    forecast: Forecast;

    // Inject HttpClient into your component or service.
    constructor(private http: HttpClient, private _route: ActivatedRoute) {}

    ngOnInit() {
      const city: string = this._route.snapshot.paramMap.get('name');
      this.getWeatherData(city);
    }

    getWeatherData(city: string): void {
      // Stand in value until location entry added
        this.http.get(
          'http://api.openweathermap.org/data/2.5/forecast?id=' + city + '&units=metric&appid=ba58afbe01c96697166e22edcbe6a953'
        ).subscribe(data => {
          this.forecast = new Forecast(data);
      });
    }
}
