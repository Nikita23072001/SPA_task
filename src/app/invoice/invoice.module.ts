import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerFormComponent } from './component/customer-form/customer-form.component';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { FormsModule } from '@angular/forms';
import { CustomerListElementComponent } from './component/customer-list-element/customer-list-element.component';
import { CustomerListComponent } from './component/customer-list/customer-list.component';



@NgModule({
  declarations: [CustomerFormComponent, CustomerListComponent, CustomerListElementComponent],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    FormsModule
  ],
  exports: [
    CustomerFormComponent
  ]
})
export class InvoiceModule { }
