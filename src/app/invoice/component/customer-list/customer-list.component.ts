import { Component, OnDestroy, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Laptop } from '../../models/laptop'

@Component({
  selector: 'app-customer-list',
  standalone: false,
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})

export class CustomerListComponent implements OnInit, OnDestroy{
    laptopList: Laptop[] = [];

    constructor(
        private customerService: CustomerService,
        private router: Router,
        private activatedRouter: ActivatedRoute
      ){ 
        
       }
      //  type: string;

       ngOnInit(){
        // let index = this.activatedRouter.snapshot.params['value']// static to dynamic
        this.customerService.getCustomers('1').subscribe((data: Laptop[]) => {
          this.laptopList = data;
        });
       }
       ngOnDestroy(){
          console.log("Zamykam komponent!")
       }
       redirect(){
        this.router.navigateByUrl('/invoice/customer-form')
       }
       deletedCustomerEvent(customer: Laptop){
        console.log("kasuje", customer);
        this.customerService.removeCustomer(customer).subscribe(() => {}) ;
        this.customerService.getCustomers('1').subscribe((data: Laptop[]) => {
          this.laptopList = data;
        });
       }
}
