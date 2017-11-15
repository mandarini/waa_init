import { Component, OnInit } from '@angular/core';
import Map from 'ol/map';
import View from 'ol/view';
import TileLayer from 'ol/layer/tile';
import XYZSource from 'ol/source/xyz';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    new Map({
      target: 'main-map',
      layers: [
        new TileLayer({
            source: new XYZSource({
              url: 'http://{a-c}.tile.stamen.com/terrain/{z}/{x}/{y}.jpg'
            })
          })
      ],
      view: new View({
        center: [0, 0],
        zoom: 2
      })
    });
  }

}
