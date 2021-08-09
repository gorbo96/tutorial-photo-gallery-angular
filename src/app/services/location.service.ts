import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private platform: Platform) { }

  async getCurrentLocation(withAddress: boolean = true): Promise<any> {
    let location: any = {};

    return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      var options = {
        frequency: 1000,
        timeout: 15000,
        enableHighAccuracy: true
      };
      navigator.geolocation.getCurrentPosition(
        position => {
          location.latitude = position.coords.latitude;
          location.longitude = position.coords.longitude;
          if (withAddress) {
            let geocoder = new google.maps.Geocoder();
            let latlng = { lat: location.latitude, lng: location.longitude };
            geocoder.geocode({ location: latlng }, (results, status) => {
              if (results != null && results != undefined) {
                location.address = results[0].formatted_address;
              } //end if
              resolve(location);
            });
          } else {
            resolve(location);
          } //end if
        },
        error => {
          resolve(null);
        },
        options
      );
    } //end if
  });
  } 

  async getAddressOfLocation(location: any) {
    let geocoder = new google.maps.Geocoder();
    let latlng = { lat: location.latitude, lng: location.longitude };
    geocoder.geocode({ location: latlng }, (results, status) => {
      if (results != null) {
        console.log(results)
        location.address = results[0].formatted_address;
        location.address2 = results[0].address_components[1].long_name+"  "+results[0].address_components[0].short_name+" "+
                            results[1].address_components[1].long_name+"  "+results[1].address_components[0].short_name;
        return location.address;
      } 
    });
  } 

}
