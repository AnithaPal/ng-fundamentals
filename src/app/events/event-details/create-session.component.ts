import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { formControlBinding } from '@angular/forms/src/directives/ng_model';
import { ISession, restrictedWords } from '../shared/index'


@Component({
  templateUrl: './create-session.component.html',
  styles: [`
            .container { padding-left: 20px; padding-right: 20px; }
            .event-image { height: 100px;}
            em { float: right; color: #E05C65; padding-left: 10px;}
            .error input, .error select, .error textarea { background-color: #E3C3C5;}
            .error ::-webkit-input-placeholder { color: #999;}
            .error ::-moz-placeholder { color: #999; }
            .error :-moz-placeholder { color: #999; }
            .error :ms-input-placeholder { color: #999;}
         `]
})

export class CreateSessionComponent implements OnInit {

  newSessionForm: FormGroup
  name: FormControl
  presenter: FormControl
  level: FormControl
  duration: FormControl
  abstract: FormControl

  ngOnInit(){
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWords(['foo', 'bar'])]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      level: this.level,
      duration: this.duration,
      abstract: this.abstract

    });
  }

  saveSession(formValue) {
    let session: ISession = {
      id: undefined,
      name: formValue.name,
      presenter: formValue.presenter,
      level: formValue.level,
      duration: +formValue.duration,
      abstract: formValue.abstract,
      voters: []
    }
    console.log(session);
  }


}
