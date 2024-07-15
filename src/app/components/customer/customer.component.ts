import {Component, inject, Signal} from '@angular/core';
import {toSignal} from "@angular/core/rxjs-interop";
import {Customer, results} from "../../core/models/customer";
import {CustomerService} from "../../core/services/customer.service";
import {CommonModule, JsonPipe, NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {Button} from "primeng/button";

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [
    JsonPipe,
    NgForOf,
    RouterLink,
    Button,
    CommonModule,
  ],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

  customerService = inject(CustomerService);
 customers: Signal<Customer[] | undefined>;
  displayedCustomers: Customer[] = [];
  currentPage = 0;
  itemsPerPage = 8;
  hasMoreCustomers = true;

  constructor() {
    this.customers = toSignal(this.customerService.getCustomers());
    this.displayData(this.getStartAndEndData(false))
  }

  getStartAndEndData(onLoadData: boolean): number[] {
      let start!: number;
      let end!: number;

      if (onLoadData) {
          start = this.currentPage * this.itemsPerPage;
          end = start + (this.itemsPerPage - 4);
      } else {
          start = this.currentPage * this.itemsPerPage;
          end = start + this.itemsPerPage;
      }
      return [start, end]
  }

  loadMore() {
   this.displayData(this.getStartAndEndData(true))
  }

  displayData(dataRange: number []) {
      const customerList = this.customers();
      if (!customerList || customerList.length === 0) return;

      const newCustomers = customerList.slice(dataRange[0], dataRange[1]);
      this.displayedCustomers = [...this.displayedCustomers, ...newCustomers];
      this.currentPage++;
      if (dataRange[1] >= customerList.length) {
          this.hasMoreCustomers = false;
      }
  }
}