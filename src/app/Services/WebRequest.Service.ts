import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WebRequestService {
    returnData: Object;

    constructor(private _http: HttpClient) {}

    getData(url: string) {
        this._http.get(
            'http://api.openweathermap.org/data/2.5/' + url + '&appid=ba58afbe01c96697166e22edcbe6a953'
        ).subscribe(data => {
            this.returnData = data;
        });
        return this.returnData;
    }
}
