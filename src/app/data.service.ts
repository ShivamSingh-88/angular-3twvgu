import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // getState() {
  //   return of([
  //     {
  //       value: null,
  //       label: '----',
  //     },
  //     {
  //       value: 1,
  //       label: 'Uttar Pradesh',
  //     },
  //     {
  //       value: 2,
  //       label: 'Andhra Pradesh',
  //     },
  //     {
  //       value: 3,
  //       label: 'Madhya Pradesh',
  //     },
  //     {
  //       value: 4,
  //       label: 'Himanchal Pradesh',
  //     },
  //     {
  //       value: 5,
  //       label: 'Arunachal Pradesh',
  //     },
  //   ]);
  // }

  getPlace(stateId: number = null) {
    return of(
      [
        {
          value: null,
          label: '----',
          stateId: null,
        },
        {
          value: 1,
          label: 'Noida',
          stateId: 1,
        },
        {
          value: 2,
          label: 'Lucknow',
          stateId: 1,
        },
        {
          value: 3,
          label: 'Agra',
          stateId: 1,
        },
        {
          value: 4,
          label: 'Varanasi',
          stateId: 1,
        },
        {
          value: 5,
          label: 'Prayagraj',
          stateId: 1,
        },

        {
          value: 1,
          label: 'Tirupati',
          stateId: 2,
        },
        {
          value: 2,
          label: 'Vijaywada',
          stateId: 2,
        },
        {
          value: 3,
          label: 'Guntoor',
          stateId: 2,
        },
        {
          value: 4,
          label: 'Nellore',
          stateId: 2,
        },
        {
          value: 5,
          label: 'Kadapa',
          stateId: 2,
        },
        {
          value: 1,
          label: 'Indore',
          stateId: 3,
        },
        {
          value: 2,
          label: 'Bhopal',
          stateId: 3,
        },
        {
          value: 3,
          label: 'Mhow',
          stateId: 3,
        },
        {
          value: 4,
          label: 'Ujjain',
          stateId: 3,
        },
        {
          value: 5,
          label: 'Gwalior',
          stateId: 3,
        },
      ].filter((entry) => {
        if (stateId) {
          return entry.stateId === stateId;
        } else {
          return true;
        }
      })
    );
  }
}
