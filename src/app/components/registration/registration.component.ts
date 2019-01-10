import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ForbiddenNameValidator } from 'src/app/validators/forbiddenName.validator';
import { PasswordValidator } from 'src/app/validators/password.validators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  // registrationForm = new FormGroup({
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   person: new FormGroup({
  //     name: new FormControl(''),
  //     surname: new FormControl(''),
  //   })
  // });

  get email() {
    return this.registrationForm.get('email');
  }

  get person() {
    const form = this.registrationForm;
    return {
      get name() {
        return form.get('person.name');
      },
      get surname() {
        return form.get('person.surname');
      }
    };
  }

  registrationForm = this.fb.group({
    email: ['', [
      Validators.required,
      Validators.minLength(3),
      ForbiddenNameValidator(/admin/, /password/)
    ]],
    password: ['', [
      Validators.required
    ]],
    confirmPassword: ['', [
      Validators.required
    ]],
    person: this.fb.group({
      name: ['', [
        Validators.minLength(3)
      ]],
      surname: ['', [
        Validators.minLength(3)
      ]],
    })
  }, {
      validators: [
        PasswordValidator
      ]
    });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.registrationForm.patchValue({
      email: ''
    });
  }

  onSubmit() {
    const formData = this.registrationForm.getRawValue();
    console.log({ formData });
  }

  validateField(fieldName) {
    const field = this.registrationForm.get(fieldName);
    return field.invalid && field.touched;
  }

}
