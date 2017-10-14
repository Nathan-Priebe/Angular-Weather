import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AllWeatherComponent } from './Components/AllWeather/AllWeather.Component';

@NgModule({
  declarations: [
    AllWeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AllWeatherComponent]
})
export class AppModule { }
