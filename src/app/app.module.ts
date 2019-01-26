import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material/material.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoutingModule } from './routing.module';
import { EtablissementsComponent } from './etablissements/etablissements.component';
import { MapComponent } from './map/map.component';
import { SportsComponent } from './sports/sports.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EtablissementComponent } from './etablissement/etablissement.component';

@NgModule({
  declarations: [
    AppComponent,
    EtablissementsComponent,
    MapComponent,
    SportsComponent,
    DashboardComponent,
    EtablissementComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
