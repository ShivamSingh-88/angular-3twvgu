import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form = new FormGroup({});
  model:any ={
    id:[''],
    firstName:[''],
    lastName:[''],
    gender:[''],
    email:[''],
    department:[''],
  }
  fields: FormlyFieldConfig[]=[
    {
      key:'id',
      type:'input',
      templateOptions:{
        label: 'Id',
        type: 'number',
        required:true
      }

    },
    {
      key:'firstName',
      type:'input',
      templateOptions:{
        label: 'FirstName',
        type: 'string',
        required:true
      }

    },
    {
      key:'lastName',
      type:'input',
      templateOptions:{
        label: 'LastName',
        type: 'string',
        required:true
      }

    },
    {
      key:'gender',
      type:'input',
      templateOptions:{
        label: 'Gender',
        type: 'string',
        required:true
      }

    },
    {
      key:'email',
      type:'input',
      templateOptions:{
        label: 'Email',
        type: 'string',
        required:true
      }

    },
    {
      key:'department',
      type:'input',
      templateOptions:{
        label: 'Department',
        type: 'string',
        required:true
      }

    }

  ];
  onSubmit(model: any) {
    console.log(model);
  }
}


/**  Copyright 2021 Formly. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://github.com/ngx-formly/ngx-formly/blob/main/LICENSE */