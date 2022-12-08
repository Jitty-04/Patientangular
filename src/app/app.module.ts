import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddpatientComponent } from './addpatient/addpatient.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SearchComponent } from './search/search.component';
const myrouter:Routes=[
  {
    path:"",
    component:AddpatientComponent
  },
  {
    path:"view",
    component:ViewPatientComponent

  },
  {
    path:"search",
    component:SearchComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    AddpatientComponent,
    ViewPatientComponent,
    NavComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myrouter),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
