import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHomeComponent } from './page-home/page-home.component';
import { MatCardModule } from '@angular/material';

@NgModule({
  exports: [PageHomeComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  declarations: [PageHomeComponent]
})
export class PageHomeModule { }
