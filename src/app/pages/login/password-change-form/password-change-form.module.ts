import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PasswordChangeFormComponent} from './password-change-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppInputModule} from 'src/app/components/input/app-input.module';
import {RouterModule} from '@angular/router';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  declarations: [
    PasswordChangeFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppInputModule,
    RouterModule,
    ReactiveComponentModule,
  ],
  exports: [PasswordChangeFormComponent]
})
export class PasswordChangeFormModule {
}
