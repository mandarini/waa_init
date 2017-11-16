import { AfterViewInit, Component, ElementRef, ViewChild, Input } from '@angular/core';
import { GmapService } from '../../../gmap.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.css']
})

export class GmapComponent implements AfterViewInit {

  @Input() spaces: Observable<any>;

  @ViewChild('mapElement') mapElement: ElementRef;
  @ViewChild('inputElement') inputElement: ElementRef;

  private map: any;

  constructor(private gapi: GmapService) {
  }

  ngAfterViewInit(): void {

    /**
     * Init map api [google.maps]
     */
    this.gapi.init.then((maps: any) => {
      const loc = new maps.LatLng(38, 23);

      this.map = new maps.Map(this.mapElement.nativeElement, {
        zoom: 13,
        center: loc,
        scrollwheel: true,
        panControl: false,
        mapTypeControl: false,
        zoomControl: true,
        streetViewControl: false,
        scaleControl: true,
        zoomControlOptions: {
          style: maps.ZoomControlStyle.LARGE,
          position: maps.ControlPosition.RIGHT_BOTTOM
        }
      });

      const input = this.inputElement.nativeElement;
      const options = {
        componentRestrictions: { country: 'gr' }
      };

      const autocomplete = new maps.places.Autocomplete(input, options);

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        const location = place.geometry.location;

        this.map.setZoom(13);
        this.map.setCenter({
          lat: location.lat(),
          lng: location.lng()
        });
      });

        this.spaces.subscribe(x => {
          console.log(x.length);
          x.forEach(one => {
            var pos = {
              lat: one.location.geometry.coordinates[0],
              lng: one.location.geometry.coordinates[1]
            }
            var marker = new maps.Marker({
              position: pos,
              map: this.map
            })
          })
        })
    });
  }

}
