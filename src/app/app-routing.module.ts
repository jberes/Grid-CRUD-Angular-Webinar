import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { GridViewComponent } from './grid-view/grid-view.component';
import { GridChartViewComponent } from './grid-chart-view/grid-chart-view.component';
import { CardViewComponent } from './card-view/card-view.component';

export const routes: Routes = [
  { path: '', redirectTo: 'grid-view', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'grid-view', component: GridViewComponent, data: { text: 'GridView' } },
  { path: 'grid-chart-view', component: GridChartViewComponent, data: { text: 'GridChartView' } },
  { path: 'card-view', component: CardViewComponent, data: { text: 'CardView' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
