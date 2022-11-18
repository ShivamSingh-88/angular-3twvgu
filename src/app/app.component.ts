import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { switchMap } from 'rxjs';
import { DataService } from './data.service';

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form = new FormGroup({});
  model: any = {
    id: [''],
    firstName: [''],
    lastName: [''],
    gender: [''],
    email: [''],
    department: [''],
    stateId:[''],
    placeId:['']
  };

  constructor(private dataService: DataService) { }
  fields: FormlyFieldConfig[] = [
    {
      key: 'id',
      type: 'input',
      templateOptions: {
        label: 'Id',
        type: 'string',
        required: true,
      },
      validators: {
        validation: ['id'],
      },
    },
    {
      key: 'firstName',
      type: 'input',
      templateOptions: {
        label: 'FirstName',
        type: 'string',
        required: true,
      },
    },
    {
      key: 'lastName',
      type: 'input',
      templateOptions: {
        label: 'LastName',
        type: 'string',
        required: true,
      },
    },
    {
      key: 'gender',
      type: 'input',
      templateOptions: {
        label: 'Gender',
        type: 'string',
        required: true,
      },
    },
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email',
        type: 'string',
        required: true,
      },
    },
    {
      key: 'department',
      type: 'input',
      templateOptions: {
        label: 'Department',
        type: 'string',
        required: true,
      }, 
    },
    {
      key: 'stateId',
      type: 'select',
      templateOptions: {
        label: 'State',
        // options:this.dataService.getState()
        options:[
          {
            value:1,
            label:"Uttar Pradesh"
           },
           {
            value:2,
            label:"Andhra Pradesh"
           }
           ,
           {
            value:3,
            label:"Madhya Pradesh"
           }
        ],       
      }
    },
      {
        key: 'placeId',
        type: 'select',
        templateOptions: {
          label: 'Place',
          options:[] 
        },
        expressionProperties:{
         'templateOptions.disabled': model => !model.stateId
        },
        hooks:{
          onInit:(field: FormlyFieldConfig) =>{
            field.templateOptions.options = field.form.get('stateId').valueChanges.pipe(
              switchMap(stateId => this.dataService.getPlace(stateId))
            )
          }
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
