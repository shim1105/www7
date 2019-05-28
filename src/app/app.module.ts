import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SelectComponent } from './main/employee/select/select.component';
import { InsertComponent } from './main/employee/insert/insert.component';
import { UpdateComponent } from './main/employee/update/update.component';
import { DepartmentComponent } from './main/department/department.component';
import { SelectdeptComponent } from './main/department/selectdept/selectdept.component';
import { UpdatedeptComponent } from './main/department/updatedept/updatedept.component';
import { InsertdeptComponent } from './main/department/insertdept/insertdept.component';
import { LoginComponent } from './main/login/login.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SelectComponent,
    InsertComponent,
    UpdateComponent,
    DepartmentComponent,
    SelectdeptComponent,
    UpdatedeptComponent,
    InsertdeptComponent,
    LoginComponent
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
