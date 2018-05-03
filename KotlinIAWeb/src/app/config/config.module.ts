import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigComponent } from './config/config.component';
import { MatInputModule, MatIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material';
import { MatCardModule } from '@angular/material';

@NgModule({
  exports: [ConfigComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatSlideToggleModule
  ],
  declarations: [ConfigComponent]
})
export class ConfigModule {}
