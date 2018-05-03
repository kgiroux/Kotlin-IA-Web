import { Component, OnInit } from '@angular/core';
import { Config } from '../../dto/Config';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  public config: Config;
  public weightDefined: boolean;

  constructor() { this.config = {learningRate: 0.08, biasValue: 0.08, entriesNumber: 10, epochNumber: 10, log: false } }

  ngOnInit() {}

}
