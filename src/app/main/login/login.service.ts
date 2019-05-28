import { Injectable } from '@angular/core';
import { User } from './user';
import {ajax} from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl:string ='http://192.168.0.42:88/';
  constructor() { }

  doLogin(us:User){
    return ajax.post(this.baseUrl+'login',us,{'Content-Type':'application/json','rxjs-custom-header':'Rxjs'})
    ;
  }
}
