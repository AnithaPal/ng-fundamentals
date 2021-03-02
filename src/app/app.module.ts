import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
    EventDetailsComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    CreateEventComponent,
    EventListResolver,
    // EventRouteActivator

} from './events/index';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],

  providers: [  EventService,
                ToastrService,
                EventRouteActivator,
                { provide: 'canDeactivateCreateEvent',
                  useValue:  checkDirtyState },
                  EventListResolver
              ],

  bootstrap: [EventsAppComponent]
})
export class AppModule { }
export function checkDirtyState(component: CreateEventComponent) {
  if(component.isDirty)
    return window.confirm('You have not saved this event, Do you rellay want to cancel?')
  return false

}
