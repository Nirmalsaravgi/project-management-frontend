import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  isActive: boolean = false;
  userObj: any = {
    "email": '',
    "password": ''
  };

  userRegisterObj: any = {
    "name": '',
    "email": '',
    "password": ''
  }

  mastersrv = inject(MasterService);
  router = inject(Router);

  toggle(isRegister: boolean){
    this.isActive = isRegister;
  }

  onSignin(){
    this.mastersrv.login(this.userObj).subscribe((res: any)=> {
      if(res.message == 'success'){
        this.router.navigateByUrl('/board');
      } else{
        alert(res.detail)
      }
    })
  }

  onSignUp(){
    this.mastersrv.register(this.userRegisterObj).subscribe((res: any)=> {
      if (res.message === 'success') {
        this.userObj.email = this.userRegisterObj.email;
        this.userObj.password = this.userRegisterObj.password;

        this.onSignin();
      } else {
        alert(res.detail);
      }
    })
  }
}
