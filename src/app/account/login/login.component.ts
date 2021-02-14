import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm = this.fb.group({
    username: [null, [Validators.required]],
    password: [null, [Validators.required]],
    rememberMe: [false],
  });

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  login(e: any): void {
    // e.preventDefault();
    // if (!this.loginForm.invalid) {
    //   this.authService
    //     .login({
    //       username: this.loginForm.get('username')!.value,
    //       password: this.loginForm.get('password')!.value,
    //       rememberMe: this.loginForm.get('rememberMe')!.value,
    //     })
    //     .subscribe({
    //       next: () => {
    //         // this.activeModal.close();
    //
    //         // this.eventManager.broadcast({
    //         //   name: 'authenticationSuccess',
    //         //   content: 'Sending Authentication Success'
    //         // });
    //
    //         if (
    //           this.router.url === '/account/register' ||
    //           this.router.url.startsWith('/account/activate') ||
    //           this.router.url.startsWith('/account/reset/')
    //         ) {
    //           this.router.navigate(['']);
    //         } else {
    //           this.accountService.identity().subscribe((account) => {
    //             if (account!.authorities.includes(Authority.ADMIN)) {
    //               this.router.navigate(['/admin/dashboard']);
    //             } else {
    //               this.router.navigate(['/account/dashboard']);
    //             }
    //           });
    //         }
    //       },
    //       error: undefined,
    //     });
    // }
  }
}
