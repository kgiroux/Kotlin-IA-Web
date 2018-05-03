import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataComponent } from './data/data.component';
import { MatInputModule, MatCardModule } from '@angular/material';


@NgModule({
  exports: [DataComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule
  ],
  declarations: [DataComponent]
})
export class DataModule { }
