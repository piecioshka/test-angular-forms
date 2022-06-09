import { Component, ChangeDetectionStrategy, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-field-errors",
  templateUrl: "./field-errors.component.html",
  styleUrls: ["./field-errors.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldErrorsComponent {
  @Input() formGroup: FormGroup = null;
  @Input() fieldName: string = null;

  get errors() {
    if (this.formGroup) {
      return this.formGroup.get(this.fieldName).errors;
    }
    return null;
  }

  get formErrors() {
    if (this.formGroup) {
      return this.formGroup.errors;
    }
    return null;
  }
}
