import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireAction } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';

import { Artist } from '../../artist';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  artists: Observable<Artist[]>;
  spaces: Observable<any[]>;
  uuid$: BehaviorSubject<string|null>;
  selectedArtist: Artist;
  artistDetails: Object;

  onSelect(artist: Artist): void {
    this.selectedArtist = artist;
    console.log(artist);
    this.uuid$.next(artist.uuid);
  }

  constructor(db: AngularFireDatabase) {
    this.artists = db.list('/participants').valueChanges();
    this.artists.subscribe(x => {
      console.log(x);
    });
    this.spaces = db.list('spaces').valueChanges();
    this.spaces.subscribe(x => {
      console.log(x);
    });
    this.uuid$ = new BehaviorSubject(null);
    var queryObservable = this.uuid$.switchMap(uuid =>
      db.list('/participantDetails', ref => ref.orderByChild('uuid').equalTo(uuid)).valueChanges()
    );

    this.uuid$.subscribe({
      next: (v) => queryObservable.subscribe(v => {
        console.log(v);
        this.artistDetails=v;
      })
    });
  }

  ngOnInit() {
  }
}
