import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNeuroneComponent } from './page-neurone/page-neurone.component';
import { DataModule } from '../data/data.module';
import { ResultModule } from '../result/result.module';
import { ConfigModule } from '../config/config.module';
import { FormsModule } from '@angular/forms';
import { MatCardModule, MatDividerModule, MatIconBase, MatIconModule } from '@angular/material';

@NgModule({
  exports: [PageNeuroneComponent],
  imports: [
    CommonModule,
    ConfigModule,
    DataModule,
    FormsModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    ResultModule
  ],
  declarations: [PageNeuroneComponent]
})
export class PageNeuroneModule { }
