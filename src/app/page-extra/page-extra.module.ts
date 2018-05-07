import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageExtraComponent } from './page-extra/page-extra.component';
import { MatCardModule } from '@angular/material';

@NgModule({
  exports: [PageExtraComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  declarations: [PageExtraComponent]
})
export class PageExtraModule { }
