import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'event-thumbnail',
  template: `
            <div class="well hoverwell thumbnail">
              <h2> {{event.name}} </h2>
              <div> Date: {{event.date}} </div>
              <div> Time: {{event.time}} </div>
              <div> Price: \${{event.price}}</div>
              <span> Location: {{event.location.address}} </span>
               <span class="pad-left"> {{event.location.city}}, {{event.location.country}} </span>
              <button class="btn btn-primary" > Click me!</button>
            </div>
            `,
  styles: [`
           .Pad-left{
             margin-left: 20px;
           }
           .well div {color: #bbb;}
        `]
})

export class EventThumbnailComponent {
  @Input() event:any

  logFoo(){
    console.log("foo")
  }

}