import { Component } from '@angular/core';
import { ApiService, Login } from '../../service/apiService';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { error } from 'node:console';
import { AppComponent } from '../../app.component';
import { app } from '../../../../server';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  userName:string='';
  password:string='';
  
  constructor(private service:ApiService,private router:Router, private appComp:AppComponent){}
  
  getLogin() {
    console.log('getLoginCalled')
   const credential = new Login();
   credential.password=this.password;
   credential.userName=this.userName;
    this.service.getData(credential).subscribe(
      (response:any) =>{
       localStorage.setItem('token',response);
       this.router.navigateByUrl('/home')
       this.appComp.showMethod();
      } 
    )
  }
  getData2(){
    this.service.getAdmindata().subscribe(
      res=>{
        console.log(res)
      },
      error => {
        console.log(error)
      }
    )
  }
}
