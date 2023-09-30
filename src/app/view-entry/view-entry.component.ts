import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../services/coustmer.service';
import { Customer } from '../services/customer';
import { MatDialog } from '@angular/material/dialog';
import { PopUpDetailsComponent } from '../pop-up-details/pop-up-details.component';
import { AddEntryComponent } from '../add-entry/add-entry.component';
import { ReAddEntryComponent } from '../re-add-entry/re-add-entry.component';


@Component({
  selector: 'app-view-entry',
  templateUrl: './view-entry.component.html',
  styleUrls: ['./view-entry.component.css']
})
export class ViewEntryComponent implements OnInit {

  searchvalue: string = '';

  ngOnInit(): void {
    this.service.getCustomerList()
      .subscribe((res) =>{
        this.customerList = res
          
          if (this.customerList.length > 0) {
            this.customerList.sort((c1: any, c2: any) => c2.Eno - c1.Eno);
          }
        }

      )
  }

  customerList: Customer[] = [];

  constructor(private dialogref: MatDialog, private service: CustomerService, private route: Router) { }

  popupopen(value:any) {
    console.log(value)
    this.dialogref.open(PopUpDetailsComponent, {
      data: value
    })

  }


  openaddentry() {
    this.dialogref.open(AddEntryComponent);
  }

  ReAddEntry(value: any) {
   
    this.dialogref.open(ReAddEntryComponent, {
      data: value
    })

  }


  


}
