import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { MasterComponent } from './Components/Master/master.Component';
import { AllWeatherComponent } from './Components/AllWeather/AllWeather.Component';
import { WeatherDetailsComponent } from './Components/WeatherDetails/WeatherDetails.Component';
import { NgbdModalContentComponent } from './Components/AddCityModal/AddCityModal.Component';

@NgModule({
  declarations: [
    MasterComponent,
    AllWeatherComponent,
    WeatherDetailsComponent,
    NgbdModalContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: 'Details', component: WeatherDetailsComponent },
      { path: 'Details/:name', component: WeatherDetailsComponent },
      { path: 'MyWeather', component: AllWeatherComponent },
      { path: '', component: AllWeatherComponent }
    ])
  ],
  providers: [],
  bootstrap: [MasterComponent],
  entryComponents: [
    NgbdModalContentComponent
  ]
})
export class AppModule { }
