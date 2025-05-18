import { Component } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {debounceTime} from 'rxjs';

@Component({
  selector: 'app-template-form',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.scss'
})
export class TemplateFormComponent {

  username: FormControl = new FormControl('');

  userInfo: any = {
    firstname: '',
    lastname: ''
  }

  constructor() {
    this.username.valueChanges.pipe(debounceTime(2000)).subscribe((response) => {
      if (response.length > 3) {
        console.log(response)
      }
    });
  }

  showmessage() {
    alert('Success')
  }

  showData() {
    this.username.setValidators([Validators.required]);
  }

}
