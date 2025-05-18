import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-reactive-form',
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgForOf
  ],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent implements OnInit {

  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = fb.group({
      firstName: [''],
      lastName: '',
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.required, Validators.min(1), Validators.max(30)]],
      phone: ['', [Validators.required, Validators.pattern('^\\+\\d{2,3}\\d{10}$')]],
      hobbies: fb.array([this.createHobby()])
    });

    this.userForm.get('lastName')?.valueChanges.subscribe((res: any) => {
      if (res.length) {
        this.userForm.get('firstName')?.setValidators([Validators.required]);
        this.userForm.updateValueAndValidity();
      } else {
        this.userForm.get('firstName')?.clearValidators();
      }
    })
  }

  createHobby() {
    return this.fb.group({
      hobbyName: ['', [Validators.required]],
      hobbyExperience: ['', [Validators.required]],
    });
  }

  get hobbies() {
    return this.userForm.get('hobbies') as FormArray;
  }

  addHobby() {
    this.hobbies.push(this.createHobby());
  }

  ngOnInit() {

  }

  saveForm() {
    console.log(this.userForm.errors)
    if (this.userForm.invalid) {
      // show all validation errors
      this.userForm.markAllAsTouched();
    }
  }

}
