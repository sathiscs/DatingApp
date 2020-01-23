import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home1',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;

  constructor() { }

  ngOnInit() {
  }
  registerToggleMode() {
    this.registerMode = true;
  }
  cancelModefromRegister(mode: boolean) {
    this.registerMode = mode;
  }

}
