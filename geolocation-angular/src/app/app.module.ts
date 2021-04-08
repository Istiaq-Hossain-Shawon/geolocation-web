import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { DistrictMapComponent } from './map/district-map/district-map.component';
import { AgmCoreModule } from '@agm/core';
import { LocalStorageService } from './services/localstorage.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DistrictMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBgQzIeYakAUCINrppgKl59-7_ISKWpT3s',
      libraries: ['places']
    })
  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
