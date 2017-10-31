import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WebRequestService {
    returnData: Object;

    constructor(private _http: HttpClient) {}

    getData(url: string): Observable<Object> {
        return this._http.get<Object>(
            'http://api.openweathermap.org/data/2.5/' + url + '&units=metric&appid=ba58afbe01c96697166e22edcbe6a953'
        );
    }
}
