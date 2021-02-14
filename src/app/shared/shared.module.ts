import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatSharedModule} from './mat-shared.module';
import {PasswordStrengthBarComponent} from '../config/password-strength-bar/password-strength-bar.component';


@NgModule({
  declarations: [PasswordStrengthBarComponent],
  imports: [
    CommonModule,
    MatSharedModule
  ],
  exports: [MatSharedModule, PasswordStrengthBarComponent]
})
export class SharedModule {
}
