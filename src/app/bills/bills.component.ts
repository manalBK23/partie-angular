import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-bills',
  standalone: false,

  templateUrl: './bills.component.html',
  styleUrl: './bills.component.css'
})
export class BillsComponent implements OnInit{
  bills : any;
  constructor(private http:HttpClient) {}

  ngOnInit() {
    this.http.get("http://localhost:8045/BILLING-SERVICE/api/fullBill/1")
      .subscribe({
        next: (data) => {
          this.bills = data;
        },
        error: (err) => {
        }
      });}


  }
