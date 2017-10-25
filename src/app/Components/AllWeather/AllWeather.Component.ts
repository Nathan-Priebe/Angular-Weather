import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather } from '../../Models/Weather';
import { NgbdModalContentComponent } from '../AddCityModal/AddCityModal.Component';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    templateUrl: 'AllWeather.html'
})

export class AllWeatherComponent implements OnInit {
    weather: Weather[] = [];

    // Inject HttpClient into your component or service.
    constructor(private http: HttpClient, private modalService: NgbModal) {}

    ngOnInit(): void {
      // Make the HTTP request:
      this.getWeatherData();
    }

    openModal() {
      this.modalService.open(NgbdModalContentComponent);
    }

    getWeatherData(): void {
      // Stand in value until location entry added
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
