import { Component, OnInit } from '@angular/core';
import { Employee } from '../../employee';
import { ajax } from 'rxjs/ajax';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  emp:Employee[]=[];
  employeeNo:number;
  baseUrl='http://192.168.0.42:88/';
  constructor(private _router:ActivatedRoute,private _rot:Router) {
    
   }

  ngOnInit() {
    this._router.params.subscribe(params=>{
      this.employeeNo=params['employeeNo'];
    });
    ajax.get(this.baseUrl+'employee?employeeNo='+this.employeeNo).subscribe(res=>{
      this.emp=res.response;
      console.log(this.emp);
    });
  }
  update(emps:Employee){
    
    ajax.put(this.baseUrl+'employees',emps,{'Content-Type':'application/json','rxjs-custom-header':'Rxjs'})
    .subscribe(res =>{
      if(res.response===1){
        alert('수정 확인이 되었습니다 .'); 
        this._rot.navigate(['select']);
      }else{
        alert('수정이 실패 했습니다, 다시 확인해 주세요 ');
        this._rot.navigate(['update/'+this.employeeNo]);
      }
    })
  }
  delete(){
    ajax.delete(this.baseUrl+'employees/?employeeNo='+this.employeeNo,{'Content-Type':'application/json','rxjs-custom-header':'Rxjs'})
    .subscribe(res =>{
        if(res.response===1){
          alert('삭제 되었습니다 .'); 
          this._rot.navigate(['select']);
        }else{
          alert('삭제 실패 했습니다.다시 한번 확인해 주세요');
        this._rot.navigate(['update/'+this.employeeNo]);
        }
    });
  }
}
