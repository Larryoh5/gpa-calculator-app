import { Component, OnInit } from '@angular/core';
import { SignInService } from '../sign-in.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  //@ts-ignore
  signInForm: FormGroup;
  //@ts-ignore
  errorMessage: string;

  constructor(
    private router: Router,
    private cookieService: CookieService,
    private fb: FormBuilder,
    private signInService: SignInService
  ) {}

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      studentId: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[0-9]*$'),
        ]),
      ],
    });
  }

  get form() {
    return this.signInForm.controls;
  }

  onSubmit() {
    const formValues = this.signInForm.value;
    const studentId = parseInt(formValues.studentId);

    if (this.signInService.validate(studentId)) {
      this.cookieService.set('session_user', studentId.toString(), 1);
      this.router.navigate(['/']);
    } else {
      this.errorMessage = `The student ID you entered is invalid, please try again.`;
    }
  }
}
