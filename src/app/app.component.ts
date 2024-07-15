import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CustomerComponent} from "./components/customer/customer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CustomerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
