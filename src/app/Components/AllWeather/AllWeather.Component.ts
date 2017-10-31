import { Component, OnInit } from '@angular/core';
import { Weather } from '../../Models/Weather';
import { AddCityModalComponent } from '../AddCityModal/AddCityModal.Component';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WebRequestService } from '../../Services/WebRequest.Service';

@Component({
    templateUrl: 'AllWeather.html'
})

export class AllWeatherComponent implements OnInit {
    weather: Weather[] = [];
    resp: Object;

    // Inject HttpClient into your component or service.
    constructor(private modalService: NgbModal, private _webRequest: WebRequestService) {}

    ngOnInit(): void {
      // Make the HTTP request:
      this.getWeatherData();
    }

    openModal() {
      this.modalService.open(AddCityModalComponent);
    }

    getWeatherData() {
      // Stand in value until location entry added
      const localCities = localStorage.getItem('myLocations');
      const cities: string[] = localCities.split('|');

      for (let i = 0; i < cities.length; i++) {
          this._webRequest.getData('weather?q=' + cities[i]).subscribe(response => {
            this.resp = response;
            this.weather.push(new Weather(this.resp, i));
          });
      }
    }

    public removeItem(arrayPos: number): void {
      const localCities = localStorage.getItem('myLocations');
      const cities: string[] = localCities.split('|');
      cities.splice(arrayPos, 1);
      let outputString = '';
      for (let i = 0; i < cities.length; i++) {
        if (i === cities.length - 1) {
          outputString = outputString + cities[i];
        } else {
          outputString = outputString + cities[i] + '|';
        }
      }
      localStorage.setItem('myLocations', outputString);
      window.location.reload();
    }
}
