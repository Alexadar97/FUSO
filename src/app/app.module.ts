import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, BrowserXhr } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WebserviceService } from './services/webservice.service';
import { DatatransferService } from './services/datatransfer.service';
import { AuthGuard } from './services/canactivate.service';
import { ModalModule } from 'ngx-modialog';
import { HttpClientModule }    from '@angular/common/http';
import { HighchartsChartModule } from 'highcharts-angular';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxSpinnerModule } from 'ngx-spinner';
import {NgxPaginationModule} from 'ngx-pagination';
import {TabModule} from 'angular-tabs-component';
import {ChartModule,HIGHCHARTS_MODULES} from 'angular-highcharts';
import * as more from 'highcharts/highcharts-more.src';
import * as exporting from 'highcharts/modules/exporting.src';
// import { StoreModule } from '@ngrx/store';
// import { SimpleReducer } from '../components/simple-reducer';

import { ComponentsComponent } from './components/components.component';
import { DynamicBarchartComponent } from './components/dynamic-barchart/dynamic-barchart.component';
import { DynamicLinechartComponent } from './components/dynamic-linechart/dynamic-linechart.component';
import { DynamicDonutchartComponent } from './components/dynamic-donutchart/dynamic-donutchart.component';
import { DynamicStackedbarchartComponent } from './components/dynamic-stackedbarchart/dynamic-stackedbarchart.component';
import { DynamicWaterfallchartComponent } from './components/dynamic-waterfallchart/dynamic-waterfallchart.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MainChartComponent } from './components/main-chart/main-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    DynamicBarchartComponent,
    DynamicLinechartComponent,
    DynamicDonutchartComponent,
    DynamicStackedbarchartComponent,
    DynamicWaterfallchartComponent,
    LayoutComponent,
    MainChartComponent,

  ],
  imports: [
    BsDatepickerModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule,
    CommonModule,
    NgxPaginationModule,
    ModalModule.forRoot(),
    HttpClientModule,
    HighchartsChartModule,
    NgxSpinnerModule,
    TabModule,
    ChartModule,

    // StoreModule.forRoot({message:SimpleReducer}),
  ],
  providers: [
    WebserviceService,
    AuthGuard,
    DatatransferService,
    { provide: HIGHCHARTS_MODULES, useFactory: () => [ more, exporting ] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
