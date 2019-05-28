import { Component, OnInit } from '@angular/core';
import { Department } from '../../department';
import { RouterLinkActive, Router, ActivatedRoute } from '@angular/router';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-updatedept',
  templateUrl: './updatedept.component.html',
  styleUrls: ['./updatedept.component.css']
})
export class UpdatedeptComponent implements OnInit {
  baseUrl:string ='http://192.168.0.42:88/';
  dept:Department[]=[];
  departmentCode:number;
  constructor(private _router:ActivatedRoute,private _rot:Router) { }

  ngOnInit() {
    this._router.params.subscribe(params=>{
      this.departmentCode=params['departmentCode'];
      console.log(this.departmentCode);
    });
    ajax.get(this.baseUrl+'department?departmentCode='+this.departmentCode).subscribe(res=>{
      this.dept=res.response;
      console.log(this.dept);
    });
  
  }
  update(depts:Department){
    
    ajax.put(this.baseUrl+'departments',depts,{'Content-Type':'application/json','rxjs-custom-header':'Rxjs'})
    .subscribe(res =>{
      if(res.response===1){
        alert('수정 확인이 되었습니다 .'); 
        this._rot.navigate(['selectdept']);
      }else{
        alert('수정이 실패 했습니다, 다시 확인해 주세요 ');
        this._rot.navigate(['update/'+this.departmentCode]);
      }
    })
  }
  delete(){
    console.log(this.departmentCode);
    ajax.delete(this.baseUrl+'department?departmentCode='+this.departmentCode,{'Content-Type':'application/json','rxjs-custom-header':'Rxjs'})
    .subscribe(res =>{
        if(res.response===1){
          alert('삭제 되었습니다 .'); 
          this._rot.navigate(['selectdept']);
        }else{
          alert('삭제 실패 했습니다.다시 한번 확인해 주세요');
        this._rot.navigate(['update/'+this.departmentCode]);
        }
    });
  }

}
