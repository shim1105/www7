import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectComponent } from './main/employee/select/select.component';
import { UpdateComponent } from './main/employee/update/update.component';
import { InsertComponent } from './main/employee/insert/insert.component';
import { SelectdeptComponent } from './main/department/selectdept/selectdept.component';
import { UpdatedeptComponent } from './main/department/updatedept/updatedept.component';
import { InsertdeptComponent } from './main/department/insertdept/insertdept.component';
import { LoginComponent } from './main/login/login.component';

const routes: Routes = [
  {path:'login' , component:LoginComponent},
  {path:'select' , component:SelectComponent},
  {path:'insert' , component:InsertComponent},
  {path:'update/:employeeNo' , component:UpdateComponent},
  {path:'selectdept',component:SelectdeptComponent},
  {path:'updatedept/:departmentCode',component:UpdatedeptComponent},
  {path:'insertdept',component:InsertdeptComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
