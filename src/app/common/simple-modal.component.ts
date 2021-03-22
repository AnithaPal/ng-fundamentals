import { Component, ElementRef, Input, ViewChild, Inject, AfterViewInit } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';


@Component({
  selector: 'simple-modal',
  template: `
    <div id="{{elementId}}" #modalContainer class="modal fade" tabindex="-1">
      <div class="modal-dialog">
          <div class="modal-content">
              <div class ="modal-header">
                  <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
                  <h4 class="modal-title">{{title}}</h4>
              </div>
              <div class="modal-body" (click)="closeModal()">
                  <ng-content></ng-content>
              </div>
          </div>
      </div>
  </div>
  `,
  styles: [`
      .modal-body { height: 250px; overflow-y: scroll;}
  `
    ]
})

export class SimpleModalComponent implements AfterViewInit{
  @Input() title: string;
  @Input() elementId: string;
  @ViewChild('#modalcontainer') containerEl: ElementRef;
  @Input() closeOnBodyClick: string;

  constructor(@Inject(JQ_TOKEN) private $: any ){}


  ngAfterViewInit() {
      console.log("container modal " + this.containerEl);
  }

  closeModal(){
     if(this.closeOnBodyClick.toLocaleLowerCase() === 'true') {
       this.$(this.containerEl.nativeElement).modal("hide");
     }
  }

}


