import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { DistrictMapComponent } from './map/district-map/district-map.component';

const routes: Routes = [{ path: 'home', component: HomeComponent },
{ path: 'map', component: DistrictMapComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
