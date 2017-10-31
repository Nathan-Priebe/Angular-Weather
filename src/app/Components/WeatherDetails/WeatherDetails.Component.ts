import { Component, OnInit } from '@angular/core';
import { WeatherDetails, Forecast } from '../../Models/WeatherDetails';
import { ActivatedRoute, Router } from '@angular/router';
import { WebRequestService } from '../../Services/WebRequest.Service';

@Component({
    templateUrl: 'WeatherDetails.html'
})

export class WeatherDetailsComponent implements OnInit {
    forecast: Forecast;

    // Inject HttpClient into your component or service.
    constructor(private _webRequest: WebRequestService, private _route: ActivatedRoute) {}

    ngOnInit() {
      const city: string = this._route.snapshot.paramMap.get('name');
      this.getWeatherData(city);
    }

    getWeatherData(city: string): void {
      // Stand in value until location entry added
        this._webRequest.getData('forecast?id=' + city
        ).subscribe(data => {
          this.forecast = new Forecast(data);
        });
    }
}
