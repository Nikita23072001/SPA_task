
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Laptop } from '../../models/laptop';
import { Smartphone } from '../../models/smartphone';
import { Monitor } from '../../models/monitor';

@Component({
    selector: 'app-customer-list',
    standalone: false,
    templateUrl: './customer-list.component.html',
    styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit, OnDestroy {
    laptopList: Laptop[] = [];
    smartphoneList: Smartphone[] = [];
    monitorList: Monitor[] = [];
    selectedType: string = '1';

    constructor(
        private customerService: CustomerService,
        private router: Router,
        private activatedRouter: ActivatedRoute
    ) { }

    ngOnInit() {
        this.loadCustomers();
    }

    ngOnDestroy() {
        console.log("Zamykam komponent!");
    }

    loadCustomers() {
        this.customerService.getCustomers(this.selectedType).subscribe((data: any[]) => {
            if (this.selectedType === '1') {
                this.laptopList = data as Laptop[];
            } else if (this.selectedType === '2') {
                this.smartphoneList = data as Smartphone[];
            } else if (this.selectedType === '3') {
                this.monitorList = data as Monitor[];
            }
        });
    }

    redirect() {
        this.router.navigateByUrl('/invoice/customer-form');
    }

    deletedCustomerEvent(customer: Laptop | Smartphone | Monitor) {
        console.log("kasuje", customer);
        this.customerService.removeCustomer(customer).subscribe(
            () => {
                this.loadCustomers();
            },
            (error) => {
                console.error('Error deleting customer:', error);
            }
        );
    }
}