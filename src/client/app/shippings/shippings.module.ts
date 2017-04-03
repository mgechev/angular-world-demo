import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingComponent } from './shipping.component';
import { ShippingsComponent } from './shippings.component';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
  imports: [CommonModule, AboutRoutingModule],
  declarations: [AboutComponent, ShippingComponent, ShippingsComponent],
  exports: [AboutComponent, ShippingComponent, ShippingsComponent]
})
export class ShippingsModule { }
