import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  AbstractControl,
  ReactiveFormsModule,
  ValidationErrors,
} from '@angular/forms';
import { FormlyModule, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

import { AppComponent } from './app.component';

export function RequiredValidatorMessage(error: any, field: FormlyFieldConfig) {
  return `"This required field was validated after ${field.formControl.updateOn}"`;
}
export function IdValidatorMessage(error: any, field: FormlyFieldConfig) {
  return `"${field.formControl.value} is not vallid ID`;
}
const ALPHA_NUMERIC_VALIDATION_ERROR = {
  alphaNumericError: 'only alpha numeric values are allowed',
};
export function IdValidator(control: AbstractControl): ValidationErrors | null {
  return /^[a-zA-Z0-9_]$/.test(control.value)
    ? null
    : ALPHA_NUMERIC_VALIDATION_ERROR;
}
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      validators: [
        {
          name: 'id',
          validation: IdValidator,
        },
      ],
      validationMessages: [
        {
          name: 'id',
          message: IdValidatorMessage,
        },
        {
          name: 'required',
          message: 'Field is required',
        },
      ],
    }),
  ],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
})
export class AppModule {}

/**  Copyright 2021 Formly. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://github.com/ngx-formly/ngx-formly/blob/main/LICENSE */
