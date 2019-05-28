import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { Department } from '../../department';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selectdept',
  templateUrl: './selectdept.component.html',
  styleUrls: ['./selectdept.component.css']
})
export class SelectdeptComponent implements OnInit {
  baseUrl:string='http://192.168.0.42:88/';
  depts:Department[]=[];
  constructor(private _router:Router) { }

  ngOnInit() {
    ajax.get(this.baseUrl+'departments').subscribe(res=>{
      console.log(res);
      this.depts=res.response;
    })
  }
  goPage(url:string){
    console.log(url);
    this._router.navigate([url]);
  }

}
