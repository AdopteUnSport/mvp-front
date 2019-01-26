import { Component, OnInit  } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatFormFieldControl} from '@angular/material';
declare let L;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  latitude : number;

  longitude : number;

  constructor() {

  }

  ngOnInit() {
      const map = L.map('map').setView([51.505, -0.09], 13);
      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoiamltc29iaWVza2kiLCJhIjoiY2pkYmtqcmJoMXdhMDMzbzI5MmpvdTE0aSJ9.G7SHd5ABI79uOHzj-bOOEA', {
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'your.mapbox.access.token'
      }).addTo(map);
      if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          console.log(position);
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          map.setView([this.latitude, this.longitude], 13);
          L.marker([this.latitude, this.longitude]).addTo(map);
        });
      }
  }
}
