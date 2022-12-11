import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  form!: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(2)]],
      lastname: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      birth_date: ['', [Validators.required]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    });
  }

  submitForm() {
    this.router.navigate([
      'output',
      {
        firstname: this.form.get('firstname')?.value,
        lastname: this.form.get('lastname')?.value,
        email: this.form.get('email')?.value,
        birth_date: this.form.get('birth_date')?.value,
        mobile: this.form.get('mobile')?.value,
      },
    ]);
  }
}
