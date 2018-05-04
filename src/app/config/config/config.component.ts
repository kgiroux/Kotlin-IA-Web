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
  public weightValues;

  constructor() {
    this.config = {
      learningRate: 0.08,
      biasValue: 0.08,
      entriesNumber: 10,
      epochNumber: 10,
      log: false
    };
    this.weightValues = new Array<number>();
    for (let i = 0; i < this.config.entriesNumber; i++) {
      this.weightValues.push(0.0);
    }
  }

  ngOnInit() {}

  onChangeEntriesNumber(value: Event) {
    for (let i = 0; i < this.config.entriesNumber; i++) {
      this.weightValues.push(0.0);
    }
  }

}
