import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-googlemap",
  templateUrl: "./googlemap.component.html",
  styleUrls: ["./googlemap.component.scss"]
})
export class GooglemapComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.codeAddress();
  }

  codeAddress() {
    const geocoder = new google.maps.Geocoder();
    var address = "Nungambakkam, Chennai, Tamil Nadu 600034";
    geocoder.geocode({ address: address }, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        alert("Latitude: " + results[0].geometry.location.lat());
        alert("Longitude: " + results[0].geometry.location.lng());
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  }
}
