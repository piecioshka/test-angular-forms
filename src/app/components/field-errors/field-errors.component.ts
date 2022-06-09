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
    return this.formGroup.get(this.fieldName).errors;
  }

  get formErrors() {
    return this.formGroup.errors;
  }
}
