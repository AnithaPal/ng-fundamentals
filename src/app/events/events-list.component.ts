import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  template: `
            <div>
              <h1> Upcoming Events </h1>
              <hr>
              <div class="row">
                <div class="col-md-5"  *ngFor="let event of events" >
                  <event-thumbnail (click)="handleThumbnailClick(event.name)" #thumbnail [event] ="event" > </event-thumbnail>
                </div>
              </div>

              <button class="btn btn-primary" (click)="thumbnail.logFoo()"> Log Some Foo!</button>
          </div>
            `
})
export class EventsListComponent implements OnInit{
  events:any
  constructor(private eventService: EventService, private toastrService: ToastrService, private route: ActivatedRoute ) {

  }

  handleEventClicked(data) {
    console.log(data)
  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events']
  }

  handleThumbnailClick(eventName) {
    this.toastrService.success(eventName);
  }


}
