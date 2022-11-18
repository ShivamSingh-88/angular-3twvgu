import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
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

  // constructor(private dataService: DataService) { }
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
        
        type: 'string',
        required: true,
      }
    },
      {
        key: 'placeId',
        type: 'select',
        templateOptions: {
          label: 'Place',
          options:[
            {
              value: null,
              label:"----",
              stateId:null
            },
            {
             value:1,
             label:"Noida",
             stateId:1
            },
            {
              value:2,
              label:"Lucknow",
              stateId:1
             },
             {
              value:3,
              label:"Agra",
              stateId:1
             },
             {
              value:4,
              label:"Varanasi",
              stateId:1
             },
             {
              value:5,
              label:"Prayagraj",
              stateId:1
             },
        
        
             {
              value:1,
              label:"Tirupati",
              stateId:2
             },
             {
               value:2,
               label:"Vijaywada",
               stateId:2
              },
              {
               value:3,
               label:"Guntoor",
               stateId:2
              },
              {
               value:4,
               label:"Nellore",
               stateId:2
              },
              {
               value:5,
               label:"Kadapa",
               stateId:2
              }
            ,
        
        
            {
              value:1,
              label:"Indore",
              stateId:3
             },
             {
               value:2,
               label:"Bhopal",
               stateId:3
              },
              {
               value:3,
               label:"Mhow",
               stateId:3
              },
              {
               value:4,
               label:"Ujjain",
               stateId:3
              },
              {
               value:5,
               label:"Gwalior",
               stateId:3
              }
            
    
          ],
          
          type: 'string',
          required: true,
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
