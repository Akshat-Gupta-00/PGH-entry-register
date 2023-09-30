import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../services/coustmer.service';
import { Customer } from '../services/customer';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up-details',
  templateUrl: './pop-up-details.component.html',
  styleUrls: ['./pop-up-details.component.css']
})
export class PopUpDetailsComponent implements OnInit {

  cid: any;
  check: boolean = true;
  check2: boolean = false;


  constructor(private service: CustomerService, private route: ActivatedRoute, private router: Router, @Inject(MAT_DIALOG_DATA) public data: string) {
    this.cid = data
  }

  customer: Customer = new Customer();
  ngOnInit(): void {
 this.customer = this.cid
    console.log(this.cid)
  };
  uid: string = this.customer.UID;

  test() {
    console.log("UID" + this.uid)
    console.log("UID" + this.customer.UID)
  }

  addcheckout() {
    this.check = false;
    this.check2 = true;
  }

  updateRecord(evt: Event) {
    let ch = confirm("Are you sure to update?")
    if (!ch) {
      evt.preventDefault();

    }
    if (ch = true) {
      this.service.updateCustomerRecord(this.cid.id,this.cid);
      this.check2 = false;
      this.check = true;
    }
  }
  deleteRecord(evt: Event , value:any) {
    let ch = confirm("Are you sure to delete?")
    if (!ch) {
      evt.preventDefault();
      this.router.navigate(["/add"])
    }
    else {
      this.service.deleteCustomerRecord(value);
      console.log(value)
      // this.router.navigate(["/add"]);

      window.location.reload();
    }
  }

  id: string = ""
}
