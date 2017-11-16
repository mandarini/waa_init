import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { GmapService } from '../../../gmap.service';

@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.css']
})

export class GmapComponent implements AfterViewInit {

  @ViewChild('mapElement') mapElement: ElementRef;
  @ViewChild('inputElement') inputElement: ElementRef;

  private map: any;

  constructor(private gapi: GmapService) {
  }

  ngOnInit() {
  }

}
