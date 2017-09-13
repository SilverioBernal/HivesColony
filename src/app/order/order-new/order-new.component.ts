import { OrderModel } from './../../model/order';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from './../../api.service';
import { CustomerModel } from './../../model/customer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-new',
  templateUrl: './order-new.component.html',
  styleUrls: ['./order-new.component.scss']
})
export class OrderNewComponent implements OnInit {

  customers: CustomerModel[];
  id: number;
  order: OrderModel;

  constructor(private api: ApiService, private router: Router, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];

    if (this.id != null) {
      this.newOrder();
    }
  }

  ngOnInit() {
    this.loadData()
  }

  loadData() {
    this.api.CustomerGetAll()
      .subscribe(customers => this.customers = customers);
  }

  newCustomer() {
    this.router.navigate(['./order/customer', 0])
  }

  onRowSelect(event) {
    this.id = event.data.id;
  }

  newOrder() {
    this.order = new OrderModel();

    this.order.customerId = this.id;
    this.order.storeId = 1;
    this.order.userId = 'root'

    this.api.OrderAdd(this.order).subscribe(res => this.goToOrder(res));
  }

  goToOrder(data) {
    console.log(data);

    if (data.LAST_INSERT_ID != null) {
      this.router.navigate([`order/head/${data.LAST_INSERT_ID}`]);
    }
  }
}
