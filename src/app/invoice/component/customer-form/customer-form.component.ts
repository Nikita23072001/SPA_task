import { Component } from '@angular/core';
import { Customer } from '../../models/customer'
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

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
  // Checkbox wrapper
  // Nickname
  // Comment
  // Bought or not
  // email
  save(ngForm: NgForm){
    console.log(this.customer);
    console.log(ngForm.valid)
    if(ngForm.valid){
    this.customerService.addCustomer(this.customer).
    subscribe((data: any) => {
      console.log(data);
      this.router.navigateByUrl('/invoice/customer-list');
    });
    }
  }
}