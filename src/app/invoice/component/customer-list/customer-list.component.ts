import { Component, OnDestroy, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';
import { Customer } from '../../models/customer'

@Component({
  selector: 'app-customer-list',
  standalone: false,
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})

export class CustomerListComponent implements OnInit, OnDestroy{
    customersList: Customer[] = [];

    constructor(
        private customerService: CustomerService,
        private router: Router
      ){ 
        
       }

       ngOnInit(){
        this.customerService.getCustomers().subscribe((data: Customer[]) => {
          this.customersList = data;
        });
       }
       ngOnDestroy(){
          console.log("Zamykam komponent!")
       }
       redirect(){
        this.router.navigateByUrl('/invoice/customer-form')
       }
       deletedCustomerEvent(customer: Customer){
        console.log("kasuje", customer);
        this.customerService.removeCustomer(customer);
        this.customerService.getCustomers().subscribe((data: Customer[]) => {
          this.customersList = data;
        });;
       }
}
