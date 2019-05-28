import { Injectable } from '@angular/core';
import { Employee } from '../../employee';
import { ajax } from 'rxjs/ajax';
import{
  HttpClient,
  HttpRequest,
  HttpEventType,
  HttpResponse,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpinsertService {
  baseUrl:string = 'http://192.168.0.42:88/';

  constructor(private _http:HttpClient) { }

  insert(emp:Employee){
   return ajax.post(this.baseUrl+'employees',emp,{'Contene-Type':'application/json','rxjs-custom-header':'Rxjs'});
  }
  addEmployee(emp:Employee){
    
    
    const url= this.baseUrl+'employees';
    const formData= new FormData;
    for(var key in emp){
      console.log(key);
      console.log(emp[key]);
      formData.append(key,emp[key]);
    }
    console.log(emp.thPath);
    console.log(formData);
    const req = new HttpRequest('POST',url,formData);
    return this._http.request(req);
    
  }

}
