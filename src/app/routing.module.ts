import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { EtablissementsComponent } from './etablissements/etablissements.component';
import { EtablissementComponent } from './etablissement/etablissement.component';
import { SportsComponent } from './sports/sports.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo : 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'sports', component: SportsComponent},
  { path: 'map', component: MapComponent},
  { path: 'etablissements', component: EtablissementsComponent},
  { path: 'etablissement/:id', component: EtablissementComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ]
})
export class RoutingModule {

 }
