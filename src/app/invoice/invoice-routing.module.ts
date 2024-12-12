import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerFormComponent } from './component/customer-form/customer-form.component';
import { CustomerListComponent } from './component/customer-list/customer-list.component';

const routes: Routes = [
  {
    path: 'customer-form',
    component: CustomerFormComponent

  },
  {
    path: 'customer-list',
    component: CustomerListComponent

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
