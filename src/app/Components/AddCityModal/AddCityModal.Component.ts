import { Component, Input } from '@angular/core';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    template: `
    <div class="modal-header">
        <h4 class="modal-title col-md-11">Add City</h4>
            <button type="button" class="close" aria-label="Close" (click)="d('Cross click')">
                <span aria-hidden="true">&times;</span>
            </button>
    </div>
    <div class="modal-body">
        <form>
            <div class="form-group">
                <label for="cityName">City Name</label>
                <input type="text" class="form-control" #cityName placeholder="City Name">
            </div>
            <div class="form-group">
                <label for="regionName">Region</label>
                <input type="text" class="form-control" #regionName placeholder="Region, e.g AUS, UK, US etc">
            </div>
        </form>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-outline-dark" (click)="c('Close click')">Close</button>
        <button type="button" class="btn btn-outline-dark" (click)="addCity(cityName.value, regionName.value)">Add City</button>
    </div>`
})

export class NgbdModalContentComponent {
    @Input() name: any;

    constructor(public modalService: NgbModal) {}

    addCity(cityName: string, regionName: string) {
        let cities: string = localStorage.getItem('myLocations');
        cities = cities + '|' + cityName + ',' + regionName;
        localStorage.setItem('myLocations', cities);
        location.reload();
      }
}
