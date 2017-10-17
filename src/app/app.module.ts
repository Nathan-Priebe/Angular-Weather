import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { AppComponent } from './Components/Shared/app.Component';
import { AllWeatherComponent } from './Components/AllWeather/AllWeather.Component';
import { WeatherDetailsComponent } from './Components/WeatherDetails/WeatherDetails.Component';

@NgModule({
  declarations: [
    AppComponent,
    AllWeatherComponent,
    WeatherDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot([
      { path: 'Details', component: WeatherDetailsComponent },
      { path: 'Details/:name', component: WeatherDetailsComponent },
      { path: 'MyWeather', component: AllWeatherComponent },
      { path: '', component: AllWeatherComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
