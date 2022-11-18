import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HeaderComponent } from './header/header.component';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { Section4Component } from './section4/section4.component';
import { FooterComponent } from './footer/footer.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { FormsModule } from '@angular/forms';
import { SwitchComponent } from './switch/switch.component';
import { ToggleComponent } from './toggle/toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    
    HeaderComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    FooterComponent,
    AddtocartComponent,
    NgforComponent,
    SwitchComponent,
    ToggleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
