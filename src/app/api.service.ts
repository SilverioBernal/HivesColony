import { OrderModel } from './model/order';
import { CustomerModel } from './model/customer';
import * as config from './app.configuration';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  CustomerGetAll() {
    return this.http.get(`${config.appApiUrl}/customers/id`)
    .map(res => <CustomerModel[]>res.json()[0]);
  }

  CustomerGetById(id) {
    return this.http.get(`${config.appApiUrl}/customers/id/${id}`)
    .map(res => <CustomerModel>res.json()[0]);
  }

  CustomerAdd(customer: CustomerModel) {
    // console.log(customer);
    return this.http.post(`${config.appApiUrl}/customers`, customer)
    .map(res => res.json());
  }

  CustomerDelete(id: number) {
    return this.http.delete(`${config.appApiUrl}/customers/${id}`)
    .map(res => res.json()[0]);
  }

   OrderAdd(order: OrderModel) {
    console.log(order);
    return this.http.post(`${config.appApiUrl}/order`, order)
    .map(res => res.json());
  }
}
