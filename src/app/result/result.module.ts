import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultComponent } from './result/result.component';
import { MatPaginatorModule, MatCardModule } from '@angular/material';
import { MatTableModule } from '@angular/material';
import { ResultService } from './result.service';
import { WebsocketService } from '../websocket.service';
@NgModule({
  exports: [ResultComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers : [ResultService],
  declarations: [ResultComponent]
})
export class ResultModule { }
