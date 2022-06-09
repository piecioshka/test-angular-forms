import { ValidatorFn, AbstractControl } from "@angular/forms";

import { ValidateResponse } from "../interfaces/validate-response.interface";

export function ForbiddenNameValidator(
  ...patterns: Array<RegExp>
): ValidatorFn {
  return function (control: AbstractControl): ValidateResponse {
    const forbidden = patterns
      .map((pattern) => pattern.test(control.value))
      .filter((status) => status);
    return forbidden.length ? { forbiddenName: control } : null;
  };
}
