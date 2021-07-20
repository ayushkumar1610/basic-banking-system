import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { NavbarComponent } from './components/navbar/navbar.component';
// import { AddEmployeeComponent } from './components/add-employee/add-employee.component';

import { HttpClientModule } from '@angular/common/http';
// import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { LandingComponent } from './components/landing/landing.component';
import { HistoryComponent } from './components/history/history.component';
import { AboutComponent } from './components/about/about.component';



const appRoutes: Routes = [
  {
    path: "", component: LandingComponent
  },
  {
    path: "history", component: HistoryComponent
  },
  {
    path: "all", component: EmployeeComponent
  },
  {
    path: "about", component: AboutComponent
  },
  {
    path: "transfer-money/:id", component: TransferComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    NavbarComponent,
    // AddEmployeeComponent,
    // EditEmployeeComponent,
    TransferComponent,
    LandingComponent,
    HistoryComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
