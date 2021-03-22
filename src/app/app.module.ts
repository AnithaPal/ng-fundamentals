import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
    EventDetailsComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    CreateEventComponent,
    EventListResolver,
    CreateSessionComponent,
    SessionListComponent,
    DurationPipe,
    UpvoteComponent,
    VoterService,
    LocationValidator
} from './events/index';

import {
JQ_TOKEN,
TOASTR_TOKEN,
Toastr,
CollapsibleWellComponent,
SimpleModalComponent,
ModalTriggerDirective
} from './common/index';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { AuthService } from './user/auth.service';

let toastr: Toastr = window['toastr'];
let jQuery = window['$'];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidator
  ],

  providers: [  EventService,
                { provide: TOASTR_TOKEN, useValue: toastr },
                { provide: JQ_TOKEN, useValue: jQuery },
                EventRouteActivator,
                { provide: 'canDeactivateCreateEvent',
                  useValue:  checkDirtyState },
                  EventListResolver,
                  AuthService,
                  VoterService
              ],

  bootstrap: [EventsAppComponent]
})
export class AppModule { }
export function checkDirtyState(component: CreateEventComponent) {

  if(component.isDirty)
    return window.confirm('You have not saved this event, Do you rellay want to cancel?')
  return true

}
