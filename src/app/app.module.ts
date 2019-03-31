import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusReportComponent } from './bus-report/bus-report.component';

import {  HttpClient ,HttpClientModule  } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FileService } from './Services/file.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    BusReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //HttpClient,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,   
    RouterModule.forRoot([
      { path: '', component: BusReportComponent, pathMatch: 'full' },
      { path: 'bus-report', component: BusReportComponent },
           
    ])

  ],
  //providers: [FileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
