import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userModel = new UserModel('', '');
  formSubmitted = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.formSubmitted = true;
    console.log('=== submit ===');
    console.log(this.userModel);
  }

}
