import { Injectable } from '@angular/core';
import { Laptop } from '../models/laptop'
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CustomerListComponent } from '../component/customer-list/customer-list.component';
import { Smartphone } from '../models/smartphone';
import { Monitor } from '../models/monitor';

@Injectable()
export class CustomerService {

  private customersList: Laptop[] = [];
  private baseUrl: string = 'http://localhost:3000/customers'

  constructor(private httpClient: HttpClient) {   }

  addCustomer(customer: Laptop | Smartphone | Monitor): Observable<any> {
    return this.httpClient.post(this.baseUrl, customer);
  }

  //customer.type to be added
  getCustomers(type: string): Observable<Laptop[] | Smartphone[] | Monitor[]> {
    return this.httpClient
        .get<any[]>(`${this.baseUrl}?type=${type}`)
        .pipe(
            map((customers: any[]) => {
                if (type === '1') {
                    return customers.map((customer: any) => new Laptop().deseralize(customer));
                } else if (type === '2') {
                    return customers.map((customer: any) => new Smartphone().deseralize(customer));
                } else if (type === '3') {
                    return customers.map((customer: any) => new Monitor().deseralize(customer));
                } else {
                  return [];
              }
            })
        );
  }


  removeCustomer(customer: Laptop | Smartphone | Monitor): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${customer.id}`)
  }

}
