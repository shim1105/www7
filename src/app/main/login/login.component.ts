import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { User } from './user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  us:User = new User();
  constructor(private _ls:LoginService) {
      
   }

  ngOnInit() {
  }
  doLogin():void{
    if(!this.us.uiId){
      alert('아이디를 입력해주세여 ');
      return;
    }
    if(!this.us.uiPwd){
      alert('비밀번호를 입력해주세여 ');
      return;
    }
    this._ls.doLogin(this.us).subscribe(res=>{
      if(res.response){
        this.us=res.response;
        alert('로그인 성공하셨습니다 ');
      }else{ 
        alert('아이디와 비밀번호를 화인하세여 ');
      }
    });
  }
}
