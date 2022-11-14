import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

import { AppComponent } from './app.component';

export function RequiredValidatorMessage(error: any, field: FormlyFieldConfig) {
  return `"This required field was validated after ${field.formControl.updateOn}"`;
}

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      validationMessages: [
        {
          name: 'required',
          message: RequiredValidatorMessage,
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