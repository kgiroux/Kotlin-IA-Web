import { Component, OnInit } from '@angular/core';
import { Config } from '../../dto/Config';
import { DataSet } from '../../dto/DataSet';
import { PageNeuroneService } from '../page-neurone.service';

@Component({
  selector: 'app-page-neurone',
  templateUrl: './page-neurone.component.html',
  styleUrls: ['./page-neurone.component.css']
})
export class PageNeuroneComponent implements OnInit {

  public config: Config;
  public dataSet: DataSet;

  constructor(private _pageNeuroneService: PageNeuroneService) { }

  ngOnInit() {
    this.config = new Config();
    this.config = {
      learningRate: 0.08,
      biasValue: 0.08,
      entriesNumber: 10,
      epochNumber: 10,
      log: false
    };
  }

  sendDataToNeurone() {
      this._pageNeuroneService.sendConfigToLearning(this.config).subscribe((res: string) => {
        console.log(res);
      })  ;
  }
}
