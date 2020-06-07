import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-produce-alerts',
  templateUrl: './produce-alerts.component.html',
  styleUrls: ['./produce-alerts.component.css']
})
export class ProduceAlertsComponent implements OnInit {
  @Input() product;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}