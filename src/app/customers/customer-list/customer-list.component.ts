import { Router } from '@angular/router';
import { ApiService } from './../../api.service';
import { CustomerModel } from './../../model/customer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customers: CustomerModel[];
  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.loadData()
  }

  loadData() {
    this.api.CustomerGetAll()
      .subscribe(customers => this.customers = customers);
  }

  newCustomer() {
    this.router.navigate(['./customer/add'])
  }

  edit(id) {
    this.router.navigate([`./customer/edit/${id}`])
  }

  delete(id) {
    this.api.CustomerDelete(id).subscribe(res => this.loadData());
  }

}
