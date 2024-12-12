import { Component } from '@angular/core';
import { Customer } from '../../models/customer'
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-form',
  standalone: false,
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.scss'
})
export class CustomerFormComponent {
  customer: Customer = new Customer();

  constructor(
    private customerService: CustomerService,
    private router: Router
  ){ 
    this.customer.name ='asasa'
   }

  // in 
  // out
  // Save data on form
  save(){
    console.log(this.customer);
    this.customerService.addCustomer(this.customer);
    this.router.navigateByUrl('/invoice/customer-list');
  }
}