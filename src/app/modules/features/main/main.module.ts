import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
    
    
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class MainModule { }
