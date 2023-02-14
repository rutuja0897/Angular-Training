import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router) {}

  username: string = '';
  password: string = '';
  show: boolean = false;
  conditional: boolean = true;

  //submit button functio
  submit() {
    //this is for validate the pass
    this.validatePassword();
  }

  validatePassword() {
    var format = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,}$/;

    if (format.test(this.password)) {
      this.show = true;
      this.router.navigateByUrl('/datalist');
      this.clear(); //for clear the both fields
    } else {
      this.show = false;
      this.conditional = false;
      this.clear(); //for clear the both fields
    }
  }

  clear() {
    this.username = '';
    this.password = '';
  }

  ngOnInit(): void {}
}
