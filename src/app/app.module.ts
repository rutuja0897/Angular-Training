import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DataListComponent } from './data-list/data-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
//import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [AppComponent, LoginComponent, EmployeeFormComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
