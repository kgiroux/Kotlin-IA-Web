import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ResultService } from '../result.service';
import { WebsocketService } from '../../websocket.service';
import { Neurone } from '../../dto/Neurone';

@Component({
  providers : [ResultService, WebsocketService],
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements AfterViewInit {

  displayedColumns = ['Number', 'Bias', 'GradientBias', 'Weight', 'GradientWeight'];
  dataSource = new MatTableDataSource<NeuroneResult>();
  neuroneResult: NeuroneResult[];
  private intervalValue;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private _resultService: ResultService, private _websocketService: WebsocketService) {
    this.intervalValue = setInterval(this.retrieveNeuroneData.bind(this), 3000);

  }

  retrieveNeuroneData() {
    if (this._resultService.getLastMessage()) {
      this.formatData(this._resultService.getLastMessage());
      this.dataSource = new MatTableDataSource<NeuroneResult>(this.neuroneResult);
    }
  }

  formatData(neurone: Neurone) {
    this.neuroneResult = [];
    for (let i = 0; i < neurone.weight.length; i++) {
      const item: NeuroneResult = {
        weight : neurone.weight[i],
        number: i,
        gradientBias: neurone.gradientBias,
        gradientWeight: neurone.gradientWeight[i],
        bias: neurone.bias
      };
      this.neuroneResult.push(item);
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngDestroy() {
    clearInterval(this.intervalValue);
  }
}

export interface NeuroneResult {
  number: number;
  bias: number;
  gradientBias: number;
  weight: number;
  gradientWeight: number;
}
