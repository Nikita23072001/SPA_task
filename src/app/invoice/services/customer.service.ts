import { Injectable } from '@angular/core';
import { Customer } from '../models/customer'
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CustomerListComponent } from '../component/customer-list/customer-list.component';

@Injectable()
export class CustomerService {

  private customersList: Customer[] = [];
  private baseUrl: string = 'http://localhost:3000/customers'

  constructor(private httpClient: HttpClient) {   }

  addCustomer(customer: Customer){
    return this.httpClient.post(this.baseUrl, customer);
  }

  getCustomers(): Observable<Customer[]> {
    return this.httpClient
    .get<Customer[]>(this.baseUrl)
    .pipe(
      map((customers: Customer[]) => 
        customers.map((customer: Customer) => new Customer().deseralize(customer)
      )
    )
    )
  }

  removeCustomer(customer: Customer): Observable<Customer>{
    return this.httpClient.delete<Customer>(this.baseUrl+'/'+customer.id)
  }

}
