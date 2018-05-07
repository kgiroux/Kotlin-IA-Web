import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageMlpComponent } from './page-mlp/page-mlp.component';

@NgModule({
  exports: [PageMlpComponent],
  imports: [
    CommonModule
  ],
  declarations: [PageMlpComponent]
})
export class PageMlpModule { }
