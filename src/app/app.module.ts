import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { D3Service } from 'd3-ng2-service';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { ScatterPlotComponent } from './scatter-plot/scatter-plot.component';
import { BarPlotComponent } from './bar-plot/bar-plot.component';
import { LinePlotComponent } from './line-plot/line-plot.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ScatterPlotComponent,
    BarPlotComponent,
    LinePlotComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
