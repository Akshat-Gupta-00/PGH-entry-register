import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Customer } from '../services/customer';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private client: HttpClient) { }
  base = "https://phg-entry-register-default-rtdb.asia-southeast1.firebasedatabase.app/customer.json";
  base2 ='https://phg-entry-register-default-rtdb.asia-southeast1.firebasedatabase.app/customer/';
  getCustomerList() {
    return this.client.get<{ [key: string]: Customer }>(this.base)
      .pipe(map((res) => {
        const CONTACT = [];
        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            CONTACT.push({ ...res[key], id: key })
          }
        }
        return CONTACT;
      }));
  }
  saveCustomerRecord(customer: Customer) {
    this.client.post(this.base, customer)
      .subscribe()

  }
  deleteCustomerRecord(id: string) {
    this.client.delete( this.base2+ id + '.json').subscribe()
  }
  
  updateCustomerRecord(id:string ,value:Customer){
    return this.client.put<Customer>(this.base2 +id+'.json', value).subscribe()
  }
}

