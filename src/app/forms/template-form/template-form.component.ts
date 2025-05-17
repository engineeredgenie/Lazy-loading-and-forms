import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [
    FormsModule
  ],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.scss'
})
export class TemplateFormComponent {
  userInfo: any = {
    firstname: '',
    lastname: ''
  }

  showmessage() {
    alert('Success')
  }

}
