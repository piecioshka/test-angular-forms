import { AbstractControl } from '@angular/forms';
import { ValidateResponse } from '../components/interfaces/validate-response.interface';

export function PasswordValidator(control: AbstractControl): ValidateResponse {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  const theSame = (password.value === confirmPassword.value);

  if (password.pristine || confirmPassword.pristine) {
    return null;
  }

  return !theSame
    ? { misMatch: true }
    : null;
}
