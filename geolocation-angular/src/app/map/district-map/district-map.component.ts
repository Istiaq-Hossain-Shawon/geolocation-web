import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/localstorage.service';
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: 'app-district-map',
  templateUrl: './district-map.component.html',
  styleUrls: ['./district-map.component.scss']
})
export class DistrictMapComponent implements OnInit {

  lat = 23.777628;
  lng = 90.405449;
  zoom = 7;
  markers = [];
  constructor(private authService: AuthService, private mapService: MapService, private authStorageService: LocalStorageService) {
  }

  ngOnInit(): void {
    this.loginProcessAndGetLocations();
  }
  loginProcessAndGetLocations() {
    const user: User = {
      username: 'user1',
      password: '123456',
    };
    var token = this.authStorageService.get("token");
    console.log(token);
    if (token == null || token == "") {
      this.authService.login(user).subscribe(result => {
        this.authStorageService.set("token", result.jwt);
        this.getLocations(result.jwt);
      })
    }
    else if (this.authService.tokenExpired(this.authStorageService.get("token"))) {
      this.authService.login(user).subscribe(result => {
        this.authStorageService.set("token", result.jwt);
        this.getLocations(result.jwt);
      })
    } else {
      console.log("token exist and valid:");
      console.log(token);
      this.getLocations(token);
    }

  }
  private getLocations(token) {
    this.mapService.getLocations(token).subscribe(locationResult => {
      this.markers = locationResult;
    });
  }

}
