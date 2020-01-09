import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthGuard } from './services/canactivate.service';
import { ComponentsComponent } from './components/components.component';
import { DynamicBarchartComponent } from './components/dynamic-barchart/dynamic-barchart.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MainChartComponent } from './components/main-chart/main-chart.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: "components"},
  {
    path: 'components', component: ComponentsComponent,
  children:[
    { path: '', redirectTo: 'layout', pathMatch: 'full' },
    { path: 'layout', component: LayoutComponent},
    { path: 'main-chart', component: MainChartComponent},
    { path: 'dynamic-barchart', component: DynamicBarchartComponent},
  ]
}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
