import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  lat = -2.778042;
  lng = -78.760791;
  zoom=18;
  
  currentLocation: any;  

  centerLocation={
    latitude: null,
    longitude: null
  }  

  icons = {
    client: "https://cdn1.iconfinder.com/data/icons/ecommerce-61/48/eccomerce_-_location-48.png",
    shop: "https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/48/Map-Marker-Marker-Outside-Chartreuse.png",
    center: "https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/48/Map-Marker-Marker-Inside-Chartreuse.png",
    pointer: "https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/48/Map-Marker-Ball-Azure.png"
  };
  
  constructor(private locationService:LocationService) {
    
  }

  async ngOnInit() {
    this.currentLocation = this.locationService.getCurrentLocation();
    console.log(this.currentLocation)
  }
  
  newAddress(event){
    if(event){
      this.centerLocation.latitude = event.lat;
      this.centerLocation.longitude = event.lng;

      this.locationService.getAddressOfLocation(this.centerLocation)
      console.log(this.centerLocation)
    }
  }

}
