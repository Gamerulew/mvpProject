import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide = true;
  chide = true;
  strengthPassword = false;
  registerForm = this.fb.group({
    login: [
      '',
      [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50),
        Validators.pattern(
          '^[a-zA-Z0-9!$&*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$|^[_.@A-Za-z0-9-]+$'
        ),
      ],
    ],
    email: [
      '',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(254),
        Validators.email,
      ],
    ],
    password: [
      '',
      [Validators.required, Validators.minLength(4), Validators.maxLength(50)],
    ],
    confirmPassword: ['', [Validators.required]],
    affiliation: ['', [Validators.required]],
    agreeTerms: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

}
