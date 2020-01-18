import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

  values: any;
  constructor(private client: HttpClient) { }

  ngOnInit() {

    this.getValue();
  }

  getValue() {

    this.client.get('http://localhost:5000/api/values').subscribe(response => {

        this.values = response;
    });

  }

}
