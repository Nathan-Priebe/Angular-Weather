import { Component, Input } from '@angular/core';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    templateUrl: 'AddCityModal.html'
})

export class AddCityModalComponent {
    @Input() name: any;
    closeResult: string;

    constructor(public modalService: NgbModal) {}

    addCity(cityName: string, regionName: string) {
        if (cityName == null || cityName === '') {
            alert('City is mandatory');
        } else {
            let cities: string = localStorage.getItem('myLocations');
            if (regionName == null || cityName === '') {
                cities = cities + '|' + cityName;
            } else {
                cities = cities + '|' + cityName + ',' + regionName;
            }
            localStorage.setItem('myLocations', cities);
            location.reload();
        }
    }
}
