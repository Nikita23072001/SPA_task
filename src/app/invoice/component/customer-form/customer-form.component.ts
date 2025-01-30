import { Component } from '@angular/core';
import { Laptop } from '../../models/laptop'
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Smartphone } from '../../models/smartphone';
import { Monitor } from '../../models/monitor';

@Component({
  selector: 'app-customer-form',
  standalone: false,
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.scss'
})
export class CustomerFormComponent {
  laptop: Laptop = new Laptop();
  smartphone: Smartphone = new Smartphone();
  monitor: Monitor = new Monitor();
  selectedType: string = '1';

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

  save(form: NgForm) {
    if (form.valid) {
      if (this.selectedType === '1') {
        this.laptop.type = '1';
        this.customerService.addCustomer(this.laptop).subscribe((data: any) => {
          console.log(data);
          this.router.navigateByUrl('/invoice/customer-list');
        });
      } else if (this.selectedType === '2') {
        this.smartphone.type = '2';
        this.customerService.addCustomer(this.smartphone).subscribe((data: any) => {
          console.log(data);
          this.router.navigateByUrl('/invoice/customer-list');
        });
      } else if (this.selectedType === '3') {
        this.monitor.type = '3';
        this.customerService.addCustomer(this.monitor).subscribe((data: any) => {
          console.log(data);
          this.router.navigateByUrl('/invoice/customer-list');
        });
      }
    }
  }
}
  // save(ngForm: NgForm){
  //   console.log(this.laptop);
  //   console.log(ngForm.valid)
  //   if(ngForm.valid){
  //   this.customerService.addCustomer(this.laptop).
  //   subscribe((data: any) => {
  //     console.log(data);
  //     this.router.navigateByUrl('/invoice/customer-list');
  //   });
  //   }
  // }