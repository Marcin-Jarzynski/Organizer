import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private loginService: LoginService, private router: Router) {

  }
  wrong: boolean;
  ngOnInit() {
    this.wrong = false;
  }

  loginForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  });
  
  onSubmit() {
    this.loginService.post(this.loginForm.value).subscribe(
      () => { this.router.navigate(['/fileViewer']) },
      () => { this.wrong = true}
    );
  }

}
