import { Component, Inject } from '@angular/core';
import { CustomerService } from '../services/coustmer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../services/customer';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-re-add-entry',
  templateUrl: './re-add-entry.component.html',
  styleUrls: ['./re-add-entry.component.css']
})
export class ReAddEntryComponent {


  //get data coneding//  


  customerdetails:any;
  check: boolean = true;
  check2: boolean = false;


  constructor(private service: CustomerService, private route: ActivatedRoute, private router: Router, @Inject(MAT_DIALOG_DATA) public data: string) {
    this.customerdetails = data;
  }

  customer: Customer = new Customer();
  ngOnInit(): void {

this.customer=this.customerdetails
  };

  //Save Data coneding//  

  entryno: string = '';
  checkin: string = '';
  checkout: string = '';
  roomno: string = '';
  nationalitycheck: string = 'INDIAN';

  nationality() {
    if (this.nationalitycheck == 'INDIAN') { this.customer.Nationality = 'INDIAN' }
    else {
      this.customer.Nationality = this.nationalitycheck;
    }
    this.customer.id = "";
  }


  save() {
    if (this.entryno == "" || this.customer.Price == "" || this.customer.Name == "" || this.customer.fname == "" || this.customer.Address == "" || this.roomno == "" || this.customer.nperson == "" || this.customer.Phone == "" || this.customer.UID == "" || this.checkin == "") {

      alert('Please complete all the requires feilds')
    }
    else {
      window.location.reload();
      this.nationality();
      this.customer.id = "";
      this.customer.Eno = this.entryno;
      this.customer.cin = this.checkin;
      this.customer.cout = this.checkout;
      this.customer.room_no = this.roomno;
      this.service.saveCustomerRecord(this.customer)

      alert("Entry done");
      ;
    }
  }
}
