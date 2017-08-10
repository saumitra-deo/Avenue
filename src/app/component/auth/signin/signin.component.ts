import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
  }

  signinForm: FormGroup
  email: FormControl
  password: FormControl

  ngOnInit() {
    this.signinFormValidation()
  }

  signinFormValidation() {
    this.email = new FormControl('', [
      Validators.required,
      Validators.email
    ])
    this.password = new FormControl('', [
      Validators.required
    ])

    this.signinForm = new FormGroup({
      email: this.email,
      password: this.password
    })
  }

  signin(formvalues) {
    console.log(formvalues);
    this.authService.signin(formvalues)
    this.router.navigate([`/welcome`]);

  }


}
