import { Component, OnInit } from '@angular/core';
import { Customer } from '../services/customer';
import { CustomerService } from '../services/coustmer.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent implements OnInit {
  
  nationalitycheck:string='INDIAN';
  check:boolean=true;
  readonly:boolean=false;
  
  ngOnInit(): void {
  
  }

  constructor(private service:CustomerService,private router:Router){}

  customer=new Customer();

nationality(){
  if(this.nationalitycheck ='INDIAN')
  { this.customer.Nationality='INDIAN'}
  else{
    this.customer.Nationality=this.nationalitycheck;
  }
}

savestatements(){
  
  this.nationality();
  this.service.saveCustomerRecord(this.customer);
  alert("Entry done");
      
}

checkff(){
  
    if(this.check==true){
      window.location.reload();
      this.savestatements();
 }
 else{
  this.savestatements();
  this.clearform();
} 

}

saveRecord(){
  if(this.customer.Eno == undefined || this.customer.Price == undefined || this.customer.Name == undefined  || this.customer.fname == undefined || this.customer.Address == undefined || this.customer.room_no == undefined || this.customer.nperson == undefined || this.customer.Phone == undefined || this.customer.UID == undefined || this.customer.cin == undefined|| this.customer.Pos==undefined)
  {
    alert('Please complete all the requires feilds')
    this.readonly=false;
  }
  else{
    this.checkff()
  }
}


clearform(){
  this.customer.Name = "";
  this.customer.fname ="";
  this.customer.Address = "";
  this.customer.Phone = "XXXXXXXXXXXX";
  this.customer.UID = "";


}

second_person(){
  this.check=false;
  this.readonly=true;
}





}
