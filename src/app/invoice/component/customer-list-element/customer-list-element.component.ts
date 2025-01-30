// filepath: /C:/Users/nikit/OneDrive/Рабочий стол/Programming/PP5/my-app/src/app/invoice/component/customer-list-element/customer-list-element.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Laptop } from '../../models/laptop';
import { Smartphone } from '../../models/smartphone';
import { Monitor } from '../../models/monitor';

@Component({
    selector: 'app-customer-list-element',
    standalone: false,
    templateUrl: './customer-list-element.component.html',
    styleUrls: ['./customer-list-element.component.scss']
})
export class CustomerListElementComponent {
    @Input() customer!: Laptop | Smartphone | Monitor;
    @Output() deletedCustomerEvent = new EventEmitter<Laptop | Smartphone | Monitor>();

    deleteCustomer() {
        this.deletedCustomerEvent.emit(this.customer);
    }
}