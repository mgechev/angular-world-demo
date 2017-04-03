import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';

import { ModalComponent } from './modal.component';
import { RatingComponent } from './rating.component';
import { GridComponent } from './grid.component';
import { ChartComponent } from './chart.component';

@NgModule({
  imports: [CommonModule, AboutRoutingModule],
  declarations: [AboutComponent, ChartComponent, GridComponent, RatingComponent],
  exports: [AboutComponent, ChartComponent, GridComponent, RatingComponent]
})
export class AboutModule { }
