import { Injectable } from '@angular/core';
import { Laptop } from '../models/laptop'
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CustomerListComponent } from '../component/customer-list/customer-list.component';

@Injectable()
export class CustomerService {

  private customersList: Laptop[] = [];
  private baseUrl: string = 'http://localhost:3000/customers'

  constructor(private httpClient: HttpClient) {   }

  addCustomer(customer: Laptop){
    return this.httpClient.post(this.baseUrl, customer);
  }

  //customer.type to be added
  getCustomers(type: any): Observable<Laptop[]> {
    return this.httpClient
    .get<Laptop[]>(this.baseUrl+'?type='+type)
    .pipe(
      map((customers: Laptop[]) => 
        customers.map((customer: Laptop) => new Laptop().deseralize(customer)
      )
    )
    )
  }

  removeCustomer(customer: Laptop): Observable<Laptop>{
    return this.httpClient.delete<Laptop>(this.baseUrl+'/'+customer.id)
  }

}
