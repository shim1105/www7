import { Component, OnInit } from '@angular/core';
import { Employee } from '../../employee';
import { SelectService } from './select.service';
import {ajax} from 'rxjs/ajax';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  emps:Employee[]=[];
  baseUrl='http://192.168.0.42:88/';
  
  constructor(private _router:Router) { 
   
  }

  ngOnInit() { 
  ajax.get(this.baseUrl+'employees').subscribe(res=>{
    this.emps=res.response;
    console.log(this.emps);
  });
  }
  goPage(url:string, employeeNo:number){
    console.log(url);
    this._router.navigate([url])

  }
}
