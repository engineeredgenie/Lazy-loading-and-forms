import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-reactive-form',
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent implements OnInit {

  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = fb.group({
      firstName: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
      lastName: '',
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.required, Validators.min(1), Validators.max(30)]],
      phone: ['', [Validators.required, Validators.pattern('^\\+\\d{2,3}\\d{10}$')]]
    });
  }

  ngOnInit() {
    console.log(this.userForm.value)
  }

}
