import { Component, OnInit } from '@angular/core';
import { Department } from '../../department';
import { ajax } from 'rxjs/ajax';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insertdept',
  templateUrl: './insertdept.component.html',
  styleUrls: ['./insertdept.component.css']
})
export class InsertdeptComponent implements OnInit {
  baseUrl='http://192.168.0.42:88/';
  depts:Department;
  constructor(private _router:Router) { 
    this.depts= new Department();
  }
  
  ngOnInit() {
  }
  insert(){
    ajax.post(this.baseUrl+'departments',this.depts,{'Content-Type':'application/json','rxjs-custom-header':'Rxjs'})
    .subscribe(res=>{
      console.log(res);
      this._router.navigate(['selectdept']); 
    });
  }

}
