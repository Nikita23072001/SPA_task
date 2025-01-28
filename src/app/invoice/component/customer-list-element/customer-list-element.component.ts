import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Laptop } from '../../models/laptop'

@Component({
  selector: 'app-customer-list-element',
  standalone: false,
  templateUrl: './customer-list-element.component.html',
  styleUrl: './customer-list-element.component.scss'
})
export class CustomerListElementComponent {

  @Input()
  customer: Laptop = new Laptop();

  @Output()
  deletedCustomerEvent = new EventEmitter<Laptop>();

  onDelete(customer: Laptop){
    console.log('kasuje klienta', this.customer.id)
    this.deletedCustomerEvent.emit(customer);
  }
}
