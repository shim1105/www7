import { Component, OnInit } from '@angular/core';
import { Employee } from '../../employee';
import { EmpinsertService } from './empinsert.service';
import { Router } from '@angular/router';
import { ajax } from 'rxjs/ajax';


@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
  private emp:Employee;
  baseUrl:string = 'http://192.168.0.42:88/';
  
  constructor(private _router:Router,private _eis:EmpinsertService) {
    this.emp = new Employee();   
   }

  ngOnInit() {
  }
  insert(emp:Employee){
   return this._eis.addEmployee(emp).subscribe(res=>{
      console.log(res);
    });
   }
   getFiles(evt:any){
     this.emp.thPath= evt.target.files[0];
     console.log(this.emp);
   }
}