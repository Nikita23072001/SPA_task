import { Component } from '@angular/core';
import { Laptop } from '../../models/laptop'
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Smartphone } from '../../models/smartphone';

@Component({
  selector: 'app-customer-form',
  standalone: false,
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.scss'
})
export class CustomerFormComponent {
  laptop: Laptop = new Laptop();
  smartphone: Smartphone = new Smartphone();

  constructor(
    private customerService: CustomerService,
    private router: Router
  ){ 
    this.laptop.companyName ='asasa'
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
    console.log(this.laptop);
    console.log(ngForm.valid)
    if(ngForm.valid){
    this.customerService.addCustomer(this.laptop).
    subscribe((data: any) => {
      console.log(data);
      this.router.navigateByUrl('/invoice/customer-list');
    });
    }
  }
}