import { Component, OnInit } from '@angular/core';
import { Marker } from 'src/app/models/Marker';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: 'app-district-map',
  templateUrl: './district-map.component.html',
  styleUrls: ['./district-map.component.scss']
})
export class DistrictMapComponent implements OnInit {

  lat =23.777628;
  lng = 90.405449;
  zoom=7;
  markers =[];
  constructor(private authService:AuthService,private mapService:MapService) { 

    
  }

  ngOnInit(): void {
    this.loginProcess();
  }
  loginProcess(){
    const user: User = {
      username: 'user1',
      password: '123456',
    }; 
    this.authService.login(user).subscribe(result=>{
      console.log(result);
      if(result.jwt){
        this.mapService.getLocations(result.jwt).subscribe(locationResult=>{
          console.log("locationResult");
          console.log(locationResult);
          this.markers=locationResult;
        });
      }
    },err => {
      console.log("Error:")
      console.log(err)
    })
  }
  
 
}
